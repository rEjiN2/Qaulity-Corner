import {
  BadgeCheck,
  Boxes,
  Headset,
  PackageSearch,
  Truck,
  Wrench,
} from "lucide-react";
import type { ServiceOffering } from "@/types";

export const services: ServiceOffering[] = [
  {
    id: "genuine-oem-sourcing",
    title: "Genuine & OEM Parts Sourcing",
    description:
      "We source genuine and OEM spare parts directly from trusted channels, so every component meets the manufacturer's standard.",
    icon: BadgeCheck,
  },
  {
    id: "aftermarket-solutions",
    title: "Quality Aftermarket Solutions",
    description:
      "For every genuine part, we also offer a carefully vetted aftermarket alternative that balances quality and cost.",
    icon: PackageSearch,
  },
  {
    id: "bulk-wholesale-supply",
    title: "Bulk & Wholesale Supply",
    description:
      "Structured wholesale supply programs for workshops, fleet operators, and dealers who need volume and consistency.",
    icon: Boxes,
  },
  {
    id: "regional-delivery",
    title: "Fast Regional Delivery",
    description:
      "Efficient logistics across the UAE, GCC, and MENA regions, keeping your workshop and fleet moving without delay.",
    icon: Truck,
  },
  {
    id: "technical-assistance",
    title: "Technical Assistance & Parts Identification",
    description:
      "Our team helps you identify the exact part you need by chassis, engine, or model number before you order.",
    icon: Wrench,
  },
  {
    id: "after-sales-support",
    title: "After-Sales Support",
    description:
      "Ongoing account support and responsive customer service that stands behind every order we deliver.",
    icon: Headset,
  },
];
