import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface VehicleBrand {
  id: string;
  name: string;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceOffering {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CustomerSegment {
  id: string;
  title: string;
  icon: LucideIcon;
}

export interface ContactInfo {
  companyName: string;
  shortName: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  country: string;
  mapsUrl: string;
  facebookUrl: string;
  instagramUrl: string;
}

export interface ContactFormValues {
  name: string;
  company?: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormResult {
  success: boolean;
  message: string;
  fieldErrors?: Partial<Record<keyof ContactFormValues, string>>;
}
