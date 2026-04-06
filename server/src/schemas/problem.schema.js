import { z } from "zod";

// Problem/Contact form validation schema
export const problemSchema = z.object({
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(200, "Subject must not exceed 200 characters")
    .trim(),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must not exceed 5000 characters")
    .trim(),

  email: z
    .string()
    .email("Invalid email format")
    .max(254, "Email must not exceed 254 characters")
    .toLowerCase()
    .trim(),
});

export type ProblemData = z.infer<typeof problemSchema>;
