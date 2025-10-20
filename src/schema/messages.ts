import { z } from "zod";

export const messageSchema = z.object({
  name: z
    .string()
    .min(5, "Name must be at least 5 characters long")
    .max(30, "Name must be less than 30 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters"),
});

// TypeScript helper
export type MessageInput = z.infer<typeof messageSchema>;
