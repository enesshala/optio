import CollabView from "@/components/collab/CollabView";
import { getCollabBySlug, getCollabSlugs } from "@/config/collabs";
import { features } from "@/config/features";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import { buildCollabMetadata } from "@/lib/seoMetadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  if (!features.showProjects) return [];
  return getCollabSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  if (!features.showProjects) return {};
  const { slug } = await params;
  const collab = getCollabBySlug(slug);
  if (!collab) return {};
  return buildCollabMetadata(defaultLocale, collab);
}

export default async function CollabPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  if (!features.showProjects) notFound();

  const { slug } = await params;
  const collab = getCollabBySlug(slug);
  if (!collab) notFound();

  const dict = await getDictionary(defaultLocale);

  return (
    <CollabView
      collab={collab}
      lang={defaultLocale}
      ctaLocale={dict.CTAButton}
      ctaSectionLocale={dict.CTA}
    />
  );
}
