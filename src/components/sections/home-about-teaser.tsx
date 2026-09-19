import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/constants/site";

export function HomeAboutTeaser() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="About Us" title="Built On Quality, Trust & Expertise" align="left" />
            <p className="mt-6 text-base leading-relaxed text-body">
              {contactInfo.companyName} is one of the UAE&apos;s leading and fastest-growing
              suppliers of genuine, OEM, and high-quality aftermarket spare parts for commercial
              and passenger vehicles — serving the GCC and MENA regions.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="dark">
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[5px]">
              <Image
                src="/parts1.jpg"
                alt="Close-up of precision automotive engine components"
                fill
                className="object-cover"
              />
            </div>

            <div className="rounded-[5px] border border-muted-line bg-muted p-8">
              <p className="font-heading text-sm font-semibold uppercase tracking-widest text-gold-dark">
                Our Expertise
              </p>
              <p className="mt-4 text-base leading-relaxed text-body">
                Dumper Trucks, Tipper Trucks, Mercedes-Benz Actros, Iveco Power Star, MAN, Isuzu,
                Renault, and many other European, Japanese, and Korean passenger and commercial
                vehicle brands.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
