import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ProductsHero } from "@/components/sections/products-hero";
import { ProductCategoriesSection } from "@/components/sections/product-categories-section";
import { HomeContactCta } from "@/components/sections/home-contact-cta";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Products",
  description:
    "Genuine, OEM, and aftermarket spare parts covering body parts, electric parts, suspension parts, radiator & AC parts, and windshields & tyres.",
  path: "/products",
  image: "/product-banner.png",
});

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Our Products"
        description="A comprehensive inventory of genuine, OEM, and high-quality aftermarket spare parts for commercial and passenger vehicles."
        image="/product-banner.png"
        path="/products"
      />
      <ProductsHero />
      <ProductCategoriesSection />
      <HomeContactCta />
    </>
  );
}
