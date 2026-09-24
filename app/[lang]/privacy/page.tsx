import { LegalPageContent } from "@/components/legal/LegalPageContent";
import {
  contentLocales,
  defaultLocale,
  normalizeLocale,
} from "@/lib/i18n";
import { buildLegalMetadata } from "@/lib/seoMetadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return contentLocales
    .filter((lang) => lang !== defaultLocale)
    .map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildLegalMetadata(normalizeLocale(lang), "privacy");
}

export default async function LocalizedPrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = normalizeLocale(lang);
  if (locale === defaultLocale) notFound();

  return <LegalPageContent kind="privacy" locale={locale} />;
}
