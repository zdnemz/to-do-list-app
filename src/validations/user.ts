import { z } from "zod";

export const createUserSchema = z
  .object({
    name: z.string({ message: "Name is required" }).regex(/^[a-zA-Z\s]*$/, {
      message: "Name must contain only letters and spaces",
    }),
    email: z
      .string({ message: "Email is required" })
      .email({ message: "Invalid email" }),
    password: z
      .string({ message: "Password is required" })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
  })
  .strict();

export const updateUserSchema = z
  .object({
    name: z.string({ message: "Name is required" }).regex(/^[a-zA-Z\s]*$/, {
      message: "Name must contain only letters and spaces",
    }),
    email: z
      .string({ message: "Email is required" })
      .email({ message: "Invalid email" }),
  })
  .strict();
