import { Hero10 } from "@/components/ui/hero-10";
import { contactInfo } from "@/lib/constants/site";

export function ProductsHero() {
  return (
    <Hero10
      title="Parts Built For The Long Haul"
      titleLine2Prefix="Genuine, OEM &"
      titleHighlight="Aftermarket"
      description="From daily drivers to heavy-duty fleets, our inventory covers the categories that keep UAE workshops, dealers, and operators moving."
      socialProof="Trusted by workshops, fleet operators, and dealers across the UAE"
      images={["/suspension-parts.png", "/body-parts.png", "/radiator-and-ac-parts.png"]}
      imageAlts={["Suspension parts", "Body parts", "Radiator and AC parts"]}
      animation="subtle"
      variant="standard"
      primaryCTA={{
        ctaEnabled: true,
        text: "Request a Quote",
        link: "/contact",
        variant: "default",
        size: "default",
      }}
      secondaryCTA={{
        ctaEnabled: true,
        text: "Call Us",
        link: `tel:${contactInfo.phone}`,
        variant: "outline",
        size: "default",
      }}
    />
  );
}
