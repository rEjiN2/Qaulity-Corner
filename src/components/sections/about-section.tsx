import { Globe2, PackageSearch, ShieldCheck, Truck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactInfo } from "@/lib/constants/site";

const facts = [
  {
    icon: ShieldCheck,
    label: "Genuine, OEM & Aftermarket",
  },
  {
    icon: Truck,
    label: "Commercial & Passenger Vehicles",
  },
  {
    icon: Globe2,
    label: "Serving the GCC & MENA Regions",
  },
  {
    icon: PackageSearch,
    label: "Extensive Spare Parts Inventory",
  },
];

export function AboutSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="About Us" title="Built On Quality, Trust & Expertise" align="left" />
            <p className="mt-6 text-base leading-relaxed text-body">
              {contactInfo.companyName} is one of the UAE&apos;s leading and fastest-growing
              suppliers of premium-quality automotive spare parts. We specialize in supplying
              genuine, OEM, and high-quality aftermarket spare parts for commercial and passenger
              vehicles, serving customers throughout the GCC and MENA regions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-body">
              Our expertise covers a wide range of vehicles, including Dumper Trucks, Tipper
              Trucks, Mercedes-Benz Actros, Iveco Power Star, MAN, Isuzu, Renault, and many other
              European, Japanese, and Korean passenger and commercial vehicle brands.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {facts.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col gap-4 rounded-[5px] border border-muted-line bg-muted p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-[5px] bg-ink text-gold-light">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="font-heading text-sm font-semibold uppercase tracking-wide text-ink">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
