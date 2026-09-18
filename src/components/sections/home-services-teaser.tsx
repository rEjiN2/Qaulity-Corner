import { ArrowRight } from "lucide-react";
import { getServices } from "@/lib/services/content-service";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

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
          {featured.map((service) => (
            <div key={service.id} className="rounded-[5px] border border-muted-line bg-white p-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-[5px] bg-ink text-gold-light">
                <service.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-base font-semibold uppercase tracking-wide text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{service.description}</p>
            </div>
          ))}
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
