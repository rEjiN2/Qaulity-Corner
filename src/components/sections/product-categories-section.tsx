import { getProductCategories } from "@/lib/services/content-service";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export async function ProductCategoriesSection() {
  const categories = await getProductCategories();

  return (
    <section className="bg-muted py-24">
      <Container>
        <SectionHeading
          eyebrow="Product Range"
          title="Comprehensive Spare Parts Inventory"
          description="An extensive selection of high-quality parts for commercial and passenger vehicles — genuine, OEM, and trusted aftermarket alternatives."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group flex items-start gap-4 rounded-[5px] border border-muted-line bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-ink/5"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[5px] bg-ink text-gold-light transition-colors group-hover:bg-gold group-hover:text-ink">
                <category.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading text-base font-semibold uppercase tracking-wide text-ink">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
