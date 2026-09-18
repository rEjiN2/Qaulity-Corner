import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/forms/contact-form";
import { contactInfo } from "@/lib/constants/site";

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    value: contactInfo.phoneDisplay,
    href: `tel:${contactInfo.phone}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat With Our Team",
    href: contactInfo.whatsapp,
  },
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: `${contactInfo.address}, ${contactInfo.city}`,
    href: contactInfo.mapsUrl,
  },
];

export function ContactSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Request A Quote Today"
          description="Tell us what parts you need — our team will get back to you promptly with availability and pricing."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 rounded-[5px] border border-muted-line bg-muted p-6 transition-colors hover:border-gold/40"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[5px] bg-ink text-gold-light">
                  <method.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-body-soft">
                    {method.label}
                  </p>
                  <p className="mt-1 font-heading text-sm font-semibold text-ink">{method.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="rounded-[5px] border border-muted-line bg-white p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
