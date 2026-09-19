import { getProductCategories } from "@/lib/services/content-service";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { DestinationCard } from "@/components/ui/card-21";

// Each card gets its own tone from the brand's black/gold family, expressed
// as an "H S% L%" triplet — the format `card-21` expects for its
// `hsl(var(--theme-color) / alpha)` glow, gradient, and pill styling.
const CARD_META: Record<string, { flag: string; stats: string; theme: string }> = {
  "body-parts": { flag: "🚗", stats: "Bumpers • Doors • Lights", theme: "222 12% 14%" },
  "electric-parts": { flag: "⚡", stats: "Batteries • Alternators • Wiring", theme: "45 65% 42%" },
  "suspension-parts": { flag: "🔧", stats: "Shocks • Springs • Arms", theme: "30 25% 20%" },
  "radiator-ac-parts": { flag: "❄️", stats: "Radiators • Compressors • Fans", theme: "38 70% 34%" },
  "windshield-tyre-parts": { flag: "🛞", stats: "Glass • Tyres • Wheels", theme: "0 0% 8%" },
};

export async function HomeProductsCards() {
  const categories = await getProductCategories();

  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Product Range"
          title="Our Core Specialties"
          description="We mainly deal in these categories of genuine, OEM, and trusted aftermarket parts for commercial and passenger vehicles."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => {
            const meta = CARD_META[category.id];

            return (
              <div key={category.id} className="aspect-[4/5] w-full">
                <DestinationCard
                  imageUrl={category.image}
                  location={category.title}
                  flag={meta?.flag ?? ""}
                  stats={meta?.stats ?? ""}
                  href="/products"
                  themeColor={meta?.theme ?? "45 65% 42%"}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
