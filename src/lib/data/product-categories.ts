import { Car, CircleDot, Gauge, Snowflake, Zap } from "lucide-react";
import type { ProductCategory } from "@/types";

export const productCategories: ProductCategory[] = [
  {
    id: "body-parts",
    title: "Body Parts",
    description: "Bumpers, fenders, doors, headlights, and other exterior components for a complete restoration.",
    icon: Car,
    image: "/body-parts.png",
  },
  {
    id: "electric-parts",
    title: "Electric Parts",
    description: "Batteries, alternators, starters, wiring harnesses, and lighting for reliable electrical performance.",
    icon: Zap,
    image: "/electric-parts.png",
  },
  {
    id: "suspension-parts",
    title: "Suspension Parts",
    description: "Shock absorbers, control arms, coil springs, and linkages for a smooth, stable ride.",
    icon: Gauge,
    image: "/suspension-parts.png",
  },
  {
    id: "radiator-ac-parts",
    title: "Radiator & AC Parts",
    description: "Radiators, condensers, compressors, and cooling components to keep every system running right.",
    icon: Snowflake,
    image: "/radiator-and-ac-parts.png",
  },
  {
    id: "windshield-tyre-parts",
    title: "Windshield & Tyres",
    description: "Windshields, glass, and a full range of tyres for commercial and passenger vehicles.",
    icon: CircleDot,
    image: "/windshield-tyre-parts.png",
  },
];
