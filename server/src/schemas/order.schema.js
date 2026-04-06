import { z } from "zod";

// Polish phone number regex: +48XXXXXXXXX or formats like (XX) XXX-XX-XX
const polishPhoneRegex = /^(\+48)?[\s-]?(\d{3})[\s-]?(\d{3})[\s-]?(\d{3})$/;

// Order form validation schema
export const orderSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters")
    .regex(
      /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s\-']+$/,
      "Name can only contain letters, spaces, hyphens, and apostrophes",
    ),

  email: z
    .string()
    .email("Invalid email format")
    .max(254, "Email must not exceed 254 characters")
    .toLowerCase()
    .trim(),

  phoneNumber: z
    .string()
    .min(9, "Phone number must be at least 9 digits")
    .max(15, "Phone number must not exceed 15 digits")
    .regex(
      polishPhoneRegex,
      "Invalid phone number format. Please use Polish format: +48 XXX XXX XXX",
    ),

  city: z
    .string()
    .min(2, "City must be at least 2 characters")
    .max(100, "City must not exceed 100 characters")
    .trim(),

  weightInKg: z
    .number()
    .min(100, "Weight must be at least 100 kg")
    .max(100000, "Weight must not exceed 100,000 kg")
    .int("Weight must be a whole number"),

  comment: z
    .string()
    .max(2000, "Comment must not exceed 2000 characters")
    .optional()
    .transform((val) => val?.trim() || ""),
});
