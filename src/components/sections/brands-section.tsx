import { Truck } from "lucide-react";
import { getVehicleBrands } from "@/lib/services/content-service";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export async function BrandsSection() {
  const brands = await getVehicleBrands();

  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <SectionHeading
          eyebrow="Vehicles We Cover"
          title="Trusted Across Leading Vehicle Brands"
          description="From heavy-duty trucks to passenger vehicles, our inventory supports a wide range of European, Japanese, and Korean brands."
          light
        />

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {brands.map((brand) => (
            <span
              key={brand.id}
              className="inline-flex items-center gap-2 rounded-[5px] border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white/90"
            >
              <Truck className="h-4 w-4 text-gold-light" />
              {brand.name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
