import { HeroSection } from "@/components/sections/hero-section";
import { HomeAboutTeaser } from "@/components/sections/home-about-teaser";
import { HomeServicesTeaser } from "@/components/sections/home-services-teaser";
import { HomeProductsTeaser } from "@/components/sections/home-products-teaser";
import { HomePortfolioTeaser } from "@/components/sections/home-portfolio-teaser";
import { HomeContactCta } from "@/components/sections/home-contact-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeAboutTeaser />
      <HomeServicesTeaser />
      <HomeProductsTeaser />
      <HomePortfolioTeaser />
      <HomeContactCta />
    </>
  );
}
