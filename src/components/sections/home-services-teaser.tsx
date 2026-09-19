import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getServices } from "@/lib/services/content-service";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const SERVICE_IMAGES: Record<string, string> = {
  "genuine-oem-sourcing": "/part-sourcing.jpg",
  "aftermarket-solutions": "/quality.jpg",
  "bulk-wholesale-supply": "/wholesale.jpg",
};

export async function HomeServicesTeaser() {
  const allServices = await getServices();
  const featured = allServices.slice(0, 3);

  return (
    <section className="bg-muted py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Our Services"
          description="From sourcing to delivery, we support your business at every step of the parts supply chain."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {featured.map((service) => {
            const image = SERVICE_IMAGES[service.id];

            return (
              <div
                key={service.id}
                className="group relative aspect-[4/5] overflow-hidden rounded-[5px] shadow-lg"
              >
                {image ? (
                  <>
                    <Image
                      src={image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10" />
                  </>
                ) : null}

                <div className="relative flex h-full flex-col justify-end p-6 text-white">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-[5px] bg-gold text-ink">
                    <service.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-heading text-base font-semibold uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button href="/services" variant="outline">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
