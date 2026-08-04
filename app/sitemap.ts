import type { MetadataRoute } from "next";
import { buildLanguageAlternates } from "@/lib/seoMetadata";
import { contentLocales, defaultLocale } from "@/lib/i18n";
import { localePath, SITE_URL } from "@/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = buildLanguageAlternates();

  return contentLocales.map((locale) => {
    const path = localePath(locale);
    return {
      url: new URL(path, SITE_URL).toString(),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: locale === defaultLocale ? 1 : 0.8,
      alternates: {
        languages,
      },
    };
  });
}
