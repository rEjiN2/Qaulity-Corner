import { getCustomerSegments } from "@/lib/services/content-service";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export async function CustomersSection() {
  const customers = await getCustomerSegments();

  return (
    <section className="bg-muted py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Customers"
          title="Proudly Serving A Wide Range Of Clients"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {customers.map((customer) => (
            <div
              key={customer.id}
              className="flex items-center gap-4 rounded-[5px] border border-muted-line bg-white p-6"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[5px] bg-ink/5 text-gold-dark">
                <customer.icon className="h-5 w-5" />
              </span>
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-ink">
                {customer.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
