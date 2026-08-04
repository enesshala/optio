import type { Metadata } from "next";
import { getSeoForLocale, localePath, SITE_URL } from "@/config/seo";
import { localesDisplayOrder } from "@/lib/i18n";
import { siteConfig } from "@/config/site";

export function buildLanguageAlternates(): Record<string, string> {
  const languages: Record<string, string> = {
    "x-default": "/",
  };

  for (const locale of localesDisplayOrder) {
    languages[locale] = localePath(locale);
  }

  return languages;
}

export function buildPageMetadata(lang: string): Metadata {
  const normalized = lang || "en";
  const seo = getSeoForLocale(normalized);
  const canonical = localePath(normalized);
  const absoluteCanonical = new URL(canonical, SITE_URL).toString();

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    alternates: {
      canonical,
      languages: buildLanguageAlternates(),
    },
    openGraph: {
      type: "website",
      locale: seo.openGraphLocale,
      url: absoluteCanonical,
      title: seo.title,
      description: seo.description,
      siteName: siteConfig.name,
      images: [`${SITE_URL}/og.png`],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.creator,
      creator: siteConfig.creator,
      title: seo.title,
      description: seo.description,
      images: [`${SITE_URL}/og.png`],
    },
  };
}
