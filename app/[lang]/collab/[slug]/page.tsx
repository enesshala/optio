import CollabView from "@/components/collab/CollabView";
import { getCollabBySlug, getCollabSlugs } from "@/config/collabs";
import { features } from "@/config/features";
import {
  contentLocales,
  defaultLocale,
  getDictionary,
  normalizeLocale,
} from "@/lib/i18n";
import { buildCollabMetadata } from "@/lib/seoMetadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Only serve slugs from generateStaticParams (empty while Projects are hidden).
export const dynamicParams = false;

export async function generateStaticParams() {
  if (!features.showProjects) return [];
  const langs = contentLocales.filter((lang) => lang !== defaultLocale);
  const slugs = getCollabSlugs();
  return langs.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  if (!features.showProjects) return {};
  const { lang, slug } = await params;
  const collab = getCollabBySlug(slug);
  if (!collab) return {};
  return buildCollabMetadata(normalizeLocale(lang), collab);
}

export default async function LangCollabPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  if (!features.showProjects) notFound();

  const { lang, slug } = await params;
  const langName = normalizeLocale(lang);

  if (!contentLocales.includes(langName as (typeof contentLocales)[number])) {
    notFound();
  }

  const collab = getCollabBySlug(slug);
  if (!collab) notFound();

  const dict = await getDictionary(langName);

  return (
    <CollabView
      collab={collab}
      lang={langName}
      ctaLocale={dict.CTAButton}
      ctaSectionLocale={dict.CTA}
    />
  );
}
