import * as auths from "@/controllers/auth";
import { Hono } from "hono";
import { loginSchema } from "@/validations/auth";
import { zValidator } from "@hono/zod-validator";

const auth = new Hono();

auth.post("/login", zValidator("json", loginSchema), auths.login);
auth.delete("/logout", auths.logout);
auth.get("/refresh", auths.refreshToken);
