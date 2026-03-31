import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://optio.digital";

const locales = ["en", "ar", "de", "fr", "sv", "zh"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const defaultEntry = {
    url: SITE_URL,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 1,
  };

  const localeEntries = locales
    .filter((l) => l !== "en")
    .map((locale) => ({
      url: `${SITE_URL}/${locale}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  return [defaultEntry, ...localeEntries];
}
