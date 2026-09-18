import type { ContactSchema } from "@/lib/validation/contact-schema";

/**
 * Handles a validated contact submission.
 *
 * No email/CRM/database is wired up yet — this is where that integration
 * will be added once the backend goes live. For now the submission is
 * simply logged server-side so the route stays fully functional end to end.
 */
export async function handleContactSubmission(data: ContactSchema): Promise<void> {
  console.log("[contact] new inquiry received", {
    name: data.name,
    company: data.company,
    email: data.email,
    phone: data.phone,
  });
}
