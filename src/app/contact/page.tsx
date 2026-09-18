import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with RUKN AL JAWDAH AL THAHABIAH AUTO SPARE PARTS TR L.L.C. for a quote on genuine, OEM, and aftermarket vehicle spare parts.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="We'd love to hear from you — reach out by phone, WhatsApp, email, or the form below."
      />
      <ContactSection />
    </>
  );
}
