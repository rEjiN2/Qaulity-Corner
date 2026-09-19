import Image from "next/image";
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
          title="Our Core Specialties"
          description="We mainly deal in these categories of genuine, OEM, and trusted aftermarket parts for commercial and passenger vehicles."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group overflow-hidden rounded-[5px] border border-muted-line bg-white transition-shadow hover:shadow-lg hover:shadow-ink/10"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start gap-4 p-6">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[5px] bg-ink text-gold-light">
                  <category.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold uppercase tracking-wide text-ink">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
