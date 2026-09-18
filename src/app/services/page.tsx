import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ServicesSection } from "@/components/sections/services-section";
import { HomeContactCta } from "@/components/sections/home-contact-cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Genuine and OEM parts sourcing, aftermarket solutions, bulk wholesale supply, regional delivery, technical assistance, and after-sales support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Comprehensive support across sourcing, supply, and delivery for commercial and passenger vehicle spare parts."
      />
      <ServicesSection />
      <HomeContactCta />
    </>
  );
}
