import type { ContactInfo, NavItem } from "@/types";

export const contactInfo: ContactInfo = {
  companyName: "RUKN AL JAWDAH AL THAHABIAH AUTO SPARE PARTS TR L.L.C.",
  shortName: "Quality Corner",
  tagline: "Quality Parts • Competitive Prices • Reliable Service • On-Time Delivery",
  phone: "+971500000000",
  phoneDisplay: "+971 50 000 0000",
  whatsapp: "https://wa.me/971500000000",
  email: "info@qualitycorner.ae",
  address: "Auto Spare Parts Market",
  city: "Dubai",
  country: "United Arab Emirates",
  mapsUrl: "https://maps.google.com",
  facebookUrl: "https://facebook.com",
  instagramUrl: "https://instagram.com",
};

export const siteConfig = {
  name: contactInfo.shortName,
  legalName: contactInfo.companyName,
  description:
    "RUKN AL JAWDAH AL THAHABIAH AUTO SPARE PARTS TR L.L.C. is one of the UAE's leading suppliers of Genuine, OEM, and high-quality aftermarket spare parts for commercial and passenger vehicles, serving the GCC and MENA regions.",
  url: "https://www.qualitycorner.ae",
  locale: "en_AE",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

// Header nav only — logo sits centered between these two groups, so it stays
// intentionally shorter than the full site nav (see `navItems`, used in the footer).
export const headerNavLeft: NavItem[] = [navItems[0], navItems[1]];
export const headerNavRight: NavItem[] = [navItems[3], navItems[4]];
