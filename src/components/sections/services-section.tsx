import { getServices } from "@/lib/services/content-service";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export async function ServicesSection() {
  const allServices = await getServices();

  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Supporting Your Business At Every Step"
          description="From sourcing the right part to getting it to your workshop or fleet, our services are built around reliability and speed."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {allServices.map((service) => (
            <div
              key={service.id}
              className="rounded-[5px] border border-muted-line bg-muted p-8"
            >
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
      </Container>
    </section>
  );
}
