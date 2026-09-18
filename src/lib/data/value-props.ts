import {
  Award,
  BadgeDollarSign,
  Truck,
  Warehouse,
  Headset,
  Handshake,
  HeartHandshake,
} from "lucide-react";
import type { ValueProp } from "@/types";

export const valueProps: ValueProp[] = [
  {
    id: "quality",
    title: "Premium Quality Products",
    description: "Every part is sourced and checked to meet the highest quality standards.",
    icon: Award,
  },
  {
    id: "pricing",
    title: "Competitive Market Prices",
    description: "Fair, transparent pricing that keeps your business ahead of the curve.",
    icon: BadgeDollarSign,
  },
  {
    id: "delivery",
    title: "Reliable & Fast Delivery",
    description: "Efficient logistics that keep your fleet and workshop moving without delay.",
    icon: Truck,
  },
  {
    id: "inventory",
    title: "Extensive Inventory",
    description: "A vast stock of genuine, OEM, and aftermarket parts ready to ship.",
    icon: Warehouse,
  },
  {
    id: "support",
    title: "Professional Customer Support",
    description: "A dedicated team ready to guide you to the right part, every time.",
    icon: Headset,
  },
  {
    id: "technical",
    title: "Trusted Technical Assistance",
    description: "Expert guidance to help you choose the correct part with confidence.",
    icon: HeartHandshake,
  },
  {
    id: "relationships",
    title: "Long-Term Business Relationships",
    description: "We build lasting partnerships founded on trust and consistency.",
    icon: Handshake,
  },
];
