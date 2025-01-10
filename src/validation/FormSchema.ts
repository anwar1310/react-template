import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .nonempty("Name is required.")
    .min(3, "Name must be at least 3 characters long."),
  email: z
    .string()
    .nonempty("Email is required.")
    .email("Invalid email address."),
  password: z
    .string()
    .nonempty("Password is required.")
    .min(8, "Password must be at least 8 characters long.")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .regex(/\d/, "Password must contain at least one number.")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character."
    ),
});

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required.")
    .email("Invalid email address."),
  password: z.string().nonempty("Password is required."),
});
