import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { HomeAboutTeaser } from "@/components/sections/home-about-teaser";
import { HomeServicesTeaser } from "@/components/sections/home-services-teaser";
import { HomeProductsCards } from "@/components/sections/home-products-cards";
import { HomePortfolioTeaser } from "@/components/sections/home-portfolio-teaser";
import { HomeContactCta } from "@/components/sections/home-contact-cta";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.name} | ${siteConfig.legalName}` },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.legalName,
    description: siteConfig.description,
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScrollReveal>
        <HomeAboutTeaser />
      </ScrollReveal>
      <ScrollReveal>
        <HomeServicesTeaser />
      </ScrollReveal>
      <ScrollReveal>
        <HomeProductsCards />
      </ScrollReveal>
      <ScrollReveal>
        <HomePortfolioTeaser />
      </ScrollReveal>
      <ScrollReveal>
        <HomeContactCta />
      </ScrollReveal>
    </>
  );
}
