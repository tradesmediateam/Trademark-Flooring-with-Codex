import type { Metadata } from "next";
import { site, serviceAreas } from "./site";

const serviceAreaText = serviceAreas.join(", ");

/**
 * Build a fully-formed Metadata object for a page. Centralizes titles,
 * descriptions, canonical URLs, Open Graph, and Twitter cards so every page is
 * consistently optimized.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  images,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  images?: string[];
}): Metadata {
  const url = new URL(path, site.url).toString();
  const fullTitle =
    path === "/" ? `${site.name} — ${site.tagline}` : `${title} | ${site.name}`;

  const ogImages = (images ?? ["/opengraph-image"]).map((img) => ({
    url: img,
    width: 1200,
    height: 630,
    alt: `${site.name} — ${title}`,
  }));

  return {
    title: fullTitle,
    description,
    keywords: [
      "concrete floor preparation",
      "self-levelling",
      "concrete grinding",
      "floor prep Vancouver",
      "flooring contractor BC",
      ...serviceAreas.map((a) => `flooring prep ${a}`),
      ...keywords,
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: site.locale,
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: images ?? ["/opengraph-image"],
    },
  };
}

export const defaultKeywords = [
  "Trademark Flooring",
  "floor levelling Vancouver",
  "concrete grinding Metro Vancouver",
  "skim coating",
  "concrete patching",
  "commercial floor prep",
  "high-rise floor preparation",
  "multi-family flooring",
  `flooring contractor serving ${serviceAreaText}`,
];
