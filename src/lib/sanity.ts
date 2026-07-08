import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder, { type SanityImageSource } from "@sanity/image-url";

export const SANITY_PROJECT_ID = "cmdikf3a";
export const SANITY_DATASET = "production";

export const sanityClient: SanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

const PLACEHOLDER_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='1600' height='1200'><rect width='100%' height='100%' fill='#E0DFD2'/></svg>`;

export const PLACEHOLDER_IMAGE = `data:image/svg+xml,${encodeURIComponent(PLACEHOLDER_SVG)}`;

export function imageUrl(source: SanityImageSource | undefined, width: number): string {
  if (!source) return PLACEHOLDER_IMAGE;
  return urlFor(source).width(width).fit("crop").auto("format").url();
}

export function splitParagraphs(text: string | undefined): string[] {
  if (!text) return [];
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}
