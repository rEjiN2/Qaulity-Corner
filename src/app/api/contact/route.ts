import { NextResponse } from "next/server";
import { z } from "zod";
import { contactSchema } from "@/lib/validation/contact-schema";
import { handleContactSubmission } from "@/lib/services/contact-service";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    const fieldErrors = z.flattenError(parsed.error).fieldErrors;
    return NextResponse.json(
      { success: false, message: "Please check the form and try again.", fieldErrors },
      { status: 400 }
    );
  }

  await handleContactSubmission(parsed.data);

  return NextResponse.json({
    success: true,
    message: "Thank you. Your inquiry has been received — our team will contact you shortly.",
  });
}
