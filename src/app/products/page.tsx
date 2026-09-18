import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ProductCategoriesSection } from "@/components/sections/product-categories-section";
import { HomeContactCta } from "@/components/sections/home-contact-cta";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Genuine, OEM, and aftermarket spare parts covering engine, mechanical, suspension, steering, brake, electrical, A/C, cooling, transmission, and body parts.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Our Products"
        description="A comprehensive inventory of genuine, OEM, and high-quality aftermarket spare parts for commercial and passenger vehicles."
      />
      <ProductCategoriesSection />
      <HomeContactCta />
    </>
  );
}
