import user from "@/controllers/user";
import { protect } from "@/middlewares/protect";
import { createUserSchema } from "@/validations/user";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";

const userRoutes = new Hono();

userRoutes.post(
  "/register",
  zValidator("json", createUserSchema),
  user.register
);
userRoutes.get("/me", protect, user.getMe);
userRoutes.put(
  "/update",
  protect,
  zValidator("json", createUserSchema),
  user.update
);

export default userRoutes;
