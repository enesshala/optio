import type { MetadataRoute } from "next";
import { getCollabSlugs } from "@/config/collabs";
import { buildLanguageAlternates, buildCollabLanguageAlternates } from "@/lib/seoMetadata";
import { contentLocales, defaultLocale } from "@/lib/i18n";
import { localePath, collabPath, SITE_URL } from "@/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const homeLanguages = buildLanguageAlternates();

  const homeEntries = contentLocales.map((locale) => {
    const path = localePath(locale);
    return {
      url: new URL(path, SITE_URL).toString(),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: locale === defaultLocale ? 1 : 0.8,
      alternates: {
        languages: homeLanguages,
      },
    };
  });

  const slugs = getCollabSlugs();
  const collabEntries = slugs.flatMap((slug) => {
    const languages = buildCollabLanguageAlternates(slug);
    return contentLocales.map((locale) => {
      const path = collabPath(locale, slug);
      return {
        url: new URL(path, SITE_URL).toString(),
        lastModified,
        changeFrequency: "monthly" as const,
        priority: locale === defaultLocale ? 0.7 : 0.6,
        alternates: {
          languages,
        },
      };
    });
  });

  return [...homeEntries, ...collabEntries];
}
