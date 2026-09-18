import { ArrowRight } from "lucide-react";
import { getProductCategories } from "@/lib/services/content-service";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export async function HomeProductsTeaser() {
  const categories = await getProductCategories();
  const featured = categories.slice(0, 6);

  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Product Range"
          title="Comprehensive Spare Parts Inventory"
          description="An extensive selection of high-quality parts for commercial and passenger vehicles — genuine, OEM, and trusted aftermarket alternatives."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((category) => (
            <div
              key={category.id}
              className="group flex items-start gap-4 rounded-[5px] border border-muted-line bg-muted p-6 transition-shadow hover:shadow-lg hover:shadow-ink/5"
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

        <div className="mt-10 text-center">
          <Button href="/products" variant="dark">
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
