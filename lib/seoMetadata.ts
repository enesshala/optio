import type { Metadata } from "next";
import { getSeoForLocale, localePath, collabPath, SITE_URL } from "@/config/seo";
import type { Collab } from "@/config/collabs";
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

export function buildCollabLanguageAlternates(
  slug: string
): Record<string, string> {
  const languages: Record<string, string> = {
    "x-default": collabPath("en", slug),
  };

  for (const locale of localesDisplayOrder) {
    languages[locale] = collabPath(locale, slug);
  }

  return languages;
}

export function buildCollabMetadata(lang: string, collab: Collab): Metadata {
  const normalized = lang || "en";
  const seo = getSeoForLocale(normalized);
  const canonical = collabPath(normalized, collab.slug);
  const absoluteCanonical = new URL(canonical, SITE_URL).toString();
  const title = collab.seoTitle;
  const description = collab.seoDescription;
  const coverAbsolute = collab.coverImage.startsWith("http")
    ? collab.coverImage
    : `${SITE_URL}${collab.coverImage}`;

  return {
    title,
    description,
    keywords: [
      collab.name,
      "OPTIO collaboration",
      "case study",
      ...seo.keywords.slice(0, 6),
    ],
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    alternates: {
      canonical,
      languages: buildCollabLanguageAlternates(collab.slug),
    },
    openGraph: {
      type: "website",
      locale: seo.openGraphLocale,
      url: absoluteCanonical,
      title,
      description,
      siteName: siteConfig.name,
      images: [coverAbsolute],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.creator,
      creator: siteConfig.creator,
      title,
      description,
      images: [coverAbsolute],
    },
  };
}
