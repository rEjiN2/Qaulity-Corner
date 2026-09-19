import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants/site";

interface PageMetadataInput {
  title: string;
  description: string;
  /** Path starting with "/", e.g. "/about". Use "" for the home page. */
  path: string;
  keywords?: string[];
  /** Absolute or root-relative image path used for social share previews. */
  image?: string;
}

export function pageMetadata({ title, description, path, keywords, image }: PageMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  // The root `opengraph-image` file convention only covers the "/" segment,
  // so pages without their own banner need to reference it explicitly or
  // they'd otherwise end up with no social preview image at all.
  const resolvedImage = image ?? "/opengraph-image";
  const ogImages = [{ url: resolvedImage, width: 1200, height: 630, alt: title }];

  return {
    title,
    description,
    keywords: keywords ?? siteConfig.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [resolvedImage],
    },
  };
}
