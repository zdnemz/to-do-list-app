import { z } from "zod";

export const loginSchema = z
  .object({
    email: z
      .string({ message: "Email is required" })
      .email({ message: "Invalid email" }),
    password: z.string({ message: "Password is required" }),
  })
  .strict();

export const refreshTokenSchema = z
  .object({
    refreshToken: z
      .string({ message: "Refresh token is required" }),
  })
  .strict()