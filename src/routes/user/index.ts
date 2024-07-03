import * as user from "@/controllers/user";
import { verify } from "@/middlewares/verify";
import { createUserSchema } from "@/validations/user";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";

const users = new Hono();

users.post("/register", zValidator("json", createUserSchema), user.register);
users.get("/me", verify, user.getMe);
users.put("/update", verify, zValidator("json", createUserSchema), user.update);

export default users;