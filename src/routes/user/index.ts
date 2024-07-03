import * as user from "@/controllers/user";
import { verify } from "@/middlewares/verify";
import { createUserSchema } from "@/validations/user";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";

export const users = new Hono();

users.post("/create", zValidator("json", createUserSchema), user.register);
users.get("/me", verify, user.getMe);
