import { PhoneCall, Send } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/constants/site";

export function HomeContactCta() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[5px] bg-gold-gradient px-8 py-16 text-center sm:px-16">
          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-[5px] border border-ink/20 bg-ink/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-ink">
              Get In Touch
            </span>
            <h2 className="mt-6 text-balance font-heading text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
              Need The Right Part? Talk To Us Today
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/80">
              Tell us the vehicle and the part you&apos;re looking for — our team will respond with
              availability and pricing promptly.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="/contact" variant="dark">
                <Send className="h-4 w-4" />
                Request a Quote
              </Button>
              <Button href={`tel:${contactInfo.phone}`} variant="outline">
                <PhoneCall className="h-4 w-4" />
                Call {contactInfo.phoneDisplay}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
