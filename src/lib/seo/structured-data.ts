import { contactInfo, siteConfig } from "@/lib/constants/site";

/**
 * Site-wide AutoPartsStore structured data (schema.org). Rendered once in the
 * root layout so every page carries it, per Google's guidance for a business
 * that has one physical/primary location rather than per-page duplication.
 */
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    telephone: contactInfo.phone,
    email: contactInfo.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.address,
      addressLocality: contactInfo.city,
      addressCountry: "AE",
    },
    areaServed: ["United Arab Emirates", "GCC", "MENA"],
    sameAs: [contactInfo.facebookUrl, contactInfo.instagramUrl, contactInfo.whatsapp].filter(Boolean),
  };
}

interface BreadcrumbItem {
  name: string;
  path: string;
}

/** Mirrors the visual breadcrumb rendered in `PageHeader`. */
export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
