import {
  Wrench,
  Truck,
  Container,
  HardHat,
  Landmark,
  Store,
  User,
} from "lucide-react";
import type { CustomerSegment } from "@/types";

export const customerSegments: CustomerSegment[] = [
  { id: "workshops", title: "Commercial Vehicle Workshops", icon: Wrench },
  { id: "fleet-operators", title: "Fleet Operators", icon: Truck },
  { id: "logistics", title: "Transport & Logistics Companies", icon: Container },
  { id: "contractors", title: "Construction Contractors", icon: HardHat },
  { id: "organizations", title: "Government & Private Organizations", icon: Landmark },
  { id: "dealers", title: "Spare Parts Dealers", icon: Store },
  { id: "owners", title: "Individual Vehicle Owners", icon: User },
];
