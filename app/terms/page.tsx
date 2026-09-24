import { LegalPageContent } from "@/components/legal/LegalPageContent";
import { defaultLocale } from "@/lib/i18n";
import { buildLegalMetadata } from "@/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildLegalMetadata(defaultLocale, "terms");

export default function TermsPage() {
  return <LegalPageContent kind="terms" locale={defaultLocale} />;
}
