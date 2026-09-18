import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { BrandsSection } from "@/components/sections/brands-section";
import { CustomersSection } from "@/components/sections/customers-section";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "The vehicle brands we support and the customers we serve — from commercial workshops and fleet operators to individual vehicle owners across the UAE.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        title="Our Portfolio"
        description="The vehicle brands we support and the customers who trust us across the UAE, GCC, and MENA regions."
      />
      <BrandsSection />
      <CustomersSection />
    </>
  );
}
