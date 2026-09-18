import { getValueProps } from "@/lib/services/content-service";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export async function WhyChooseUsSection() {
  const values = await getValueProps();

  return (
    <section className="bg-muted py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Committed To Excellence In Every Delivery"
          description="We are committed to delivering premium products, dependable service, and lasting business relationships."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.id} className="text-center">
              <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-[5px] bg-gold-gradient text-ink shadow-sm">
                <value.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-heading text-sm font-semibold uppercase tracking-wide text-ink">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{value.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
