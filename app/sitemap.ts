import type { MetadataRoute } from "next";
import { getCollabSlugs } from "@/config/collabs";
import { getBootcampYears } from "@/config/bootcamps";
import { features } from "@/config/features";
import {
  buildLanguageAlternates,
  buildCollabLanguageAlternates,
  buildBootcampLanguageAlternates,
} from "@/lib/seoMetadata";
import { contentLocales, defaultLocale } from "@/lib/i18n";
import { localePath, collabPath, bootcampPath, SITE_URL } from "@/config/seo";

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

  const collabEntries = features.showProjects
    ? getCollabSlugs().flatMap((slug) => {
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
      })
    : [];

  const years = getBootcampYears();
  const bootcampEntries = years.flatMap((year) => {
    const languages = buildBootcampLanguageAlternates(year);
    return contentLocales.map((locale) => {
      const path = bootcampPath(locale, year);
      return {
        url: new URL(path, SITE_URL).toString(),
        lastModified,
        changeFrequency: "monthly" as const,
        priority: locale === defaultLocale ? 0.8 : 0.7,
        alternates: {
          languages,
        },
      };
    });
  });

  return [...homeEntries, ...collabEntries, ...bootcampEntries];
}
