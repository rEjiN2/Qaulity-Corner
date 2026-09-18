"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { contactSchema } from "@/lib/validation/contact-schema";
import type { ContactFormResult, ContactFormValues } from "@/types";

const initialValues: ContactFormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

const inputStyles =
  "w-full rounded-[5px] border border-muted-line bg-white px-4 py-3 text-sm text-ink placeholder:text-body-soft focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30";

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  function updateField<K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const errors: Partial<Record<keyof ContactFormValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactFormValues;
        if (!errors[key]) errors[key] = issue.message;
      }
      setFieldErrors(errors);
      setStatus("error");
      setStatusMessage("Please correct the highlighted fields.");
      return;
    }

    setFieldErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const result: ContactFormResult = await response.json();

      if (!response.ok || !result.success) {
        setFieldErrors(result.fieldErrors ?? {});
        setStatus("error");
        setStatusMessage(result.message || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setStatusMessage(result.message);
      setValues(initialValues);
    } catch {
      setStatus("error");
      setStatusMessage("Unable to send your message right now. Please call or WhatsApp us instead.");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            className={inputStyles}
            placeholder="John Smith"
          />
          {fieldErrors.name ? <p className="mt-1.5 text-xs text-red-600">{fieldErrors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={(event) => updateField("company", event.target.value)}
            className={inputStyles}
            placeholder="Your workshop or company"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={inputStyles}
            placeholder="you@company.com"
          />
          {fieldErrors.email ? <p className="mt-1.5 text-xs text-red-600">{fieldErrors.email}</p> : null}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={inputStyles}
            placeholder="+971 5X XXX XXXX"
          />
          {fieldErrors.phone ? <p className="mt-1.5 text-xs text-red-600">{fieldErrors.phone}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink">
          What parts are you looking for?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          className={cn(inputStyles, "resize-none")}
          placeholder="Tell us the vehicle brand, model, and the parts you need..."
        />
        {fieldErrors.message ? <p className="mt-1.5 text-xs text-red-600">{fieldErrors.message}</p> : null}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-[5px] bg-gold px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-light disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        Send Inquiry
      </button>

      {statusMessage ? (
        <p
          className={cn(
            "text-sm font-medium",
            status === "success" ? "text-green-700" : status === "error" ? "text-red-600" : "text-body"
          )}
          role="status"
        >
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}
