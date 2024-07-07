import auth from "@/controllers/auth";
import { Hono } from "hono";
import { loginSchema } from "@/validations/auth";
import { zValidator } from "@hono/zod-validator";
import { protect } from "@/middlewares/protect";

const authRoutes = new Hono();

authRoutes.post("/login", zValidator("json", loginSchema), auth.login);
authRoutes.delete("/logout", protect, auth.logout);
authRoutes.get("/refresh", protect, auth.refreshToken);

export default authRoutes;