import env from "@/configs/env";
import User from "@/models/User";
import { Payload } from "@/types";
import { logger } from "@/utils/logger";
import response from "@/utils/response";
import { Handler } from "hono";
import { setCookie } from "hono/cookie";
import { sign } from "hono/jwt";

const register: Handler = async (c) => {
  const { name, email, password } = await c.req.json();

  const isExists = await User.findOne({ email });
  if (isExists) {
    return response(c, 409, "User already exists");
  }

  const hashedPassword = await Bun.password.hash(password, {
    algorithm: "bcrypt",
  });

  const user = await User.create({ name, email, password: hashedPassword });

  logger.info(`[${user.id}] User ${user.email} has created`);

  const token = await sign(
    { id: user.id, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7 },
    env.JWT_SECRET as string
  )

  setCookie(c, "token", token, {
    httpOnly: true,
    secure: Bun.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response(c, 201);
};

const getMe: Handler = async (c) => {
  const { id }: Payload = await c.get("jwtPayload");

  const user = await User.findById(id);
  if (!user) {
    return response(c, 404, "User not found");
  }

  return response(c, 200, user);
};

const update: Handler = async (c) => {
  const { name } = await c.req.json();
  const { id }: Payload = await c.get("jwtPayload");

  const user = await User.findByIdAndUpdate(id, { name }, { new: true });
  if (!user) {
    return response(c, 404, "User not found");
  }

  return response(c, 200, user);
};

export default {
  register,
  getMe,
  update,
};
