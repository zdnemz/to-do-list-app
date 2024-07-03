import User from "@/models/User";
import response from "@/utils/response";
import { Handler } from "hono";
import { sign } from "hono/jwt";
import { setCookie, getCookie } from "hono/cookie";

export const login: Handler = async (c, next) => {
  const { email, password } = await c.req.json();

  const user = await User.findOne({ email });

  if (!user || !(await Bun.password.verify(password, user.password))) {
    return response(c, 404, "User not found");
  }

  const token = await sign(
    {
      id: user._id,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
    },
    Bun.env.JWT_SECRET as string
  );
  setCookie(c, "token", token, {
    httpOnly: true,
    secure: Bun.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response(c, 200);
};

export const logout: Handler = async (c, next) => {
  const body = await c.req.json();
  return body;
};

export const refreshToken: Handler = async (c, next) => {
  const body = await c.get("jwtPayload");

  return response(c, 200, body);
};
