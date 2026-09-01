import BootcampView from "@/components/bootcamp/BootcampView";
import { getBootcamp, getBootcampYears } from "@/config/bootcamps";
import {
  contentLocales,
  defaultLocale,
  getDictionary,
  normalizeLocale,
} from "@/lib/i18n";
import { buildBootcampMetadata } from "@/lib/seoMetadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const langs = contentLocales.filter((lang) => lang !== defaultLocale);
  const years = getBootcampYears();
  return langs.flatMap((lang) => years.map((year) => ({ lang, year })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; year: string }>;
}): Promise<Metadata> {
  const { lang, year } = await params;
  const langName = normalizeLocale(lang);
  const contentLang = langName === "sq" ? "sq" : "en";
  const bootcamp = getBootcamp(year, contentLang);
  if (!bootcamp) return {};
  return buildBootcampMetadata(langName, bootcamp);
}

export default async function LangBootcampPage({
  params,
}: {
  params: Promise<{ lang: string; year: string }>;
}) {
  const { lang, year } = await params;
  const langName = normalizeLocale(lang);

  if (!contentLocales.includes(langName as (typeof contentLocales)[number])) {
    notFound();
  }

  const contentLang = langName === "sq" ? "sq" : "en";
  const bootcamp = getBootcamp(year, contentLang);
  if (!bootcamp) notFound();

  const dict = await getDictionary(langName);
  const enDict = await getDictionary("en");

  return (
    <BootcampView
      bootcamp={bootcamp}
      lang={langName}
      ctaLocale={dict.CTAButton}
      ctaSectionLocale={dict.CTA}
      applyFormLocale={dict.BootcampApply ?? enDict.BootcampApply}
    />
  );
}
