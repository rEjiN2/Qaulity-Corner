import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { AboutSection } from "@/components/sections/about-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { CommitmentSection } from "@/components/sections/commitment-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about RUKN AL JAWDAH AL THAHABIAH AUTO SPARE PARTS TR L.L.C. — a leading UAE supplier of genuine, OEM, and aftermarket vehicle spare parts.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="Your trusted partner for commercial and passenger vehicle spare parts across the UAE, GCC, and MENA regions."
      />
      <AboutSection />
      <WhyChooseUsSection />
      <CommitmentSection />
    </>
  );
}
