import User from "@/models/User";
import response from "@/utils/response";
import { Handler } from "hono";

export const register: Handler = async (c, next) => {
  const { name, email, password } = await c.req.json();

  const isExists = await User.findOne({ email });
  if (isExists) {
    return response(c, 404, "User already exists");
  }

  const hashedPassword = await Bun.password.hash(password, {
    algorithm: "bcrypt",
  });
  
  const user = await User.create({ name, email, password: hashedPassword });

  if (!user) {
    return response(c, 500, "Failed to create user");
  }

  return response(c, 201);
};

export const getMe: Handler = async (c, next) => {
  const body = await c.req.json();
};

export const update: Handler = async (c, next) => {
  const body = await c.req.json();
};
