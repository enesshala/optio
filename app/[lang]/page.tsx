import HomeIndex from "@/components/home/HomeIndex";
import { contentLocales, defaultLocale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seoMetadata";
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
  return buildPageMetadata(lang);
}

export default async function LangHome({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!contentLocales.includes(lang as (typeof contentLocales)[number])) {
    notFound();
  }

  return <HomeIndex lang={lang} />;
}
