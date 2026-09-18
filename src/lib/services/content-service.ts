import { productCategories } from "@/lib/data/product-categories";
import { vehicleBrands } from "@/lib/data/vehicle-brands";
import { valueProps } from "@/lib/data/value-props";
import { customerSegments } from "@/lib/data/customer-segments";
import { services } from "@/lib/data/services";
import type {
  CustomerSegment,
  ProductCategory,
  ServiceOffering,
  ValueProp,
  VehicleBrand,
} from "@/types";

/**
 * Content service layer.
 *
 * Every page/section reads content through these functions instead of
 * importing `lib/data` directly. Today they resolve local static arrays;
 * later they can be swapped for CMS/database/API calls without any change
 * to the components that consume them.
 */

export async function getProductCategories(): Promise<ProductCategory[]> {
  return productCategories;
}

export async function getVehicleBrands(): Promise<VehicleBrand[]> {
  return vehicleBrands;
}

export async function getValueProps(): Promise<ValueProp[]> {
  return valueProps;
}

export async function getCustomerSegments(): Promise<CustomerSegment[]> {
  return customerSegments;
}

export async function getServices(): Promise<ServiceOffering[]> {
  return services;
}
