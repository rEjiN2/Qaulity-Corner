import { CheckCircle2, PhoneCall } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { contactInfo } from "@/lib/constants/site";

const highlights = [
  "Genuine, OEM & Aftermarket Parts",
  "Commercial & Passenger Vehicles",
  "GCC & MENA Wide Reach",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <ParallaxImage
        src="/home-banner.png"
        alt="Genuine and aftermarket auto spare parts on display in a professional workshop"
        priority
        offset={70}
        className="object-cover object-[75%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />

      <Container className="relative pb-24 pt-48 sm:pb-28 sm:pt-52 lg:pb-36 lg:pt-60">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-[5px] border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-light">
            Auto Spare Parts Trading L.L.C.
          </span>

          <h1 className="mt-6 text-balance font-heading text-4xl font-bold uppercase leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Your Trusted Partner for <span className="text-gold-light">Commercial &amp; Passenger</span> Vehicle Spare Parts
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {contactInfo.companyName} is one of the UAE&apos;s leading and fastest-growing
            suppliers of premium-quality automotive spare parts — serving customers across the
            GCC and MENA regions.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" variant="primary">
              Request a Quote
            </Button>
            <Button href={`tel:${contactInfo.phone}`} variant="outline-light">
              <PhoneCall className="h-4 w-4" />
              Call {contactInfo.phoneDisplay}
            </Button>
          </div>

          <ul className="mt-12 flex flex-col flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-8 sm:flex-row">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-white/90">
                <CheckCircle2 className="h-4 w-4 text-gold-light" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
