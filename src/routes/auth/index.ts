import * as auths from "@/controllers/auth";
import { Hono } from "hono";
import { loginSchema } from "@/validations/auth";
import { zValidator } from "@hono/zod-validator";
import { verify } from "@/middlewares/verify";

const auth = new Hono();

auth.use("*", verify);

auth.post("/login", zValidator("json", loginSchema), auths.login);
auth.delete("/logout", auths.logout);
auth.get("/refresh", auths.refreshToken);

export default auth;