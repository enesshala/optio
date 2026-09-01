import BootcampView from "@/components/bootcamp/BootcampView";
import { getBootcamp, getBootcampYears } from "@/config/bootcamps";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import { buildBootcampMetadata } from "@/lib/seoMetadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getBootcampYears().map((year) => ({ year }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ year: string }>;
}): Promise<Metadata> {
  const { year } = await params;
  const bootcamp = getBootcamp(year, defaultLocale);
  if (!bootcamp) return {};
  return buildBootcampMetadata(defaultLocale, bootcamp);
}

export default async function BootcampPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  const bootcamp = getBootcamp(year, defaultLocale);
  if (!bootcamp) notFound();

  const dict = await getDictionary(defaultLocale);
  const enDict = await getDictionary("en");

  return (
    <BootcampView
      bootcamp={bootcamp}
      lang={defaultLocale}
      ctaLocale={dict.CTAButton}
      ctaSectionLocale={dict.CTA}
      applyFormLocale={dict.BootcampApply ?? enDict.BootcampApply}
    />
  );
}
