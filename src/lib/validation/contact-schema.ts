import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  company: z.string().trim().optional(),
  email: z.email("Please enter a valid email address."),
  phone: z.string().trim().min(7, "Please enter a valid phone number."),
  message: z.string().trim().min(10, "Please tell us a bit more about what you need."),
});

export type ContactSchema = z.infer<typeof contactSchema>;
