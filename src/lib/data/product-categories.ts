import {
  Cog,
  Gauge,
  Wrench,
  Disc3,
  Zap,
  Wind,
  Thermometer,
  Settings2,
  Car,
  Droplet,
  ShieldCheck,
} from "lucide-react";
import type { ProductCategory } from "@/types";

export const productCategories: ProductCategory[] = [
  {
    id: "engine-parts",
    title: "Engine Parts",
    description: "Complete range of engine components for peak performance and durability.",
    icon: Cog,
  },
  {
    id: "mechanical-parts",
    title: "Mechanical Parts",
    description: "High-grade mechanical components built for heavy-duty operation.",
    icon: Wrench,
  },
  {
    id: "suspension-parts",
    title: "Suspension Parts",
    description: "Suspension systems engineered for a smooth, stable, and safe ride.",
    icon: Gauge,
  },
  {
    id: "steering-components",
    title: "Steering Components",
    description: "Precision steering parts for accurate control and handling.",
    icon: Settings2,
  },
  {
    id: "brake-system",
    title: "Brake System Parts",
    description: "Reliable braking components for maximum safety on the road.",
    icon: Disc3,
  },
  {
    id: "electrical-parts",
    title: "Electrical Parts",
    description: "Dependable electrical components for commercial and passenger vehicles.",
    icon: Zap,
  },
  {
    id: "ac-parts",
    title: "Air Conditioning (A/C) Parts",
    description: "Complete A/C system parts to keep every cabin cool and comfortable.",
    icon: Wind,
  },
  {
    id: "cooling-system",
    title: "Cooling System Components",
    description: "Radiators, fans, and cooling parts that keep engines running safely.",
    icon: Thermometer,
  },
  {
    id: "transmission-parts",
    title: "Transmission Parts",
    description: "Durable transmission components for smooth power delivery.",
    icon: Car,
  },
  {
    id: "body-parts",
    title: "Body Parts & Accessories",
    description: "Body panels, trims, and accessories for repair and restoration.",
    icon: ShieldCheck,
  },
  {
    id: "filters-lubricants",
    title: "Filters, Lubricants & Maintenance",
    description: "Filters, lubricants, and maintenance essentials for routine service.",
    icon: Droplet,
  },
  {
    id: "genuine-oem-aftermarket",
    title: "Genuine, OEM & Aftermarket",
    description: "Genuine, OEM, and trusted aftermarket replacement parts, all in one place.",
    icon: ShieldCheck,
  },
];
