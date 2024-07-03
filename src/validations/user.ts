import { z } from "zod";

export const createUserSchema = z
  .object({
    name: z
      .string({ message: "Name is required" })
      .regex(/^[a-zA-Z\s]*$/, {
        message: "Name must contain only letters and spaces",
      }),
    email: z
      .string({ message: "Email is required" })
      .email({ message: "Invalid email" }),
    password: z.string({ message: "Password is required" }),
  })
  .strict();
