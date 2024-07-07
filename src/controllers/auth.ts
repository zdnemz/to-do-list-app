import User from "@/models/User";
import response from "@/utils/response";
import { Handler } from "hono";
import { sign } from "hono/jwt";
import { setCookie, deleteCookie } from "hono/cookie";
import { logger } from "@/utils/logger";
import env from "@/configs/env";

export const login: Handler = async (c) => {
  const { email, password } = await c.req.json();

  const user = await User.findOne({ email }).select("+password");
  
  if (!user || !(await Bun.password.verify(password, user.password))) {
    return response(c, 401, "Invalid email or password");
  }
  
  
  const token = await sign(
    { id: user.id, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7 },
    Bun.env.JWT_SECRET as string
  );
  
  setCookie(c, "token", token, {
    httpOnly: true,
    secure: Bun.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
  });

  logger.info(`${user.email} has logged in`);
  
  return response(c, 200);
};

export const logout: Handler = async (c) => {
  deleteCookie(c, "token");
  return response(c, 200);
};

export const refreshToken: Handler = async (c) => {
  const { id } = await c.get("jwtPayload");

  const newToken = await sign(
    {
      id,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
    },
    Bun.env.JWT_SECRET as string
  );

  setCookie(c, "token", newToken, {
    httpOnly: true,
    secure: Bun.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response(c, 200);
};

export default { login, logout, refreshToken };
