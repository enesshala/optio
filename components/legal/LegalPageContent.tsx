import {
  getLegalLabels,
  getPrivacyDocument,
  getTermsDocument,
} from "@/config/legal";
import { legalPath } from "@/config/seo";
import { normalizeLocale } from "@/lib/i18n";
import Link from "next/link";

type LegalPageContentProps = {
  kind: "privacy" | "terms";
  locale: string;
};

export function LegalPageContent({ kind, locale }: LegalPageContentProps) {
  const lang = normalizeLocale(locale);
  const labels = getLegalLabels(lang);
  const document =
    kind === "privacy" ? getPrivacyDocument(lang) : getTermsDocument(lang);
  const otherKind = kind === "privacy" ? "terms" : "privacy";
  const otherLabel = otherKind === "privacy" ? labels.privacy : labels.terms;
  const homeHref = lang === "en" ? "/" : `/${lang}`;

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-10 sm:py-14">
      <div className="mb-8 flex flex-col gap-3">
        <Link
          href={homeHref}
          className="text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
        >
          ← {labels.backHome}
        </Link>
        <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {document.title}
        </h1>
        <p className="text-sm text-muted-foreground">
          {document.lastUpdatedLabel}: {document.lastUpdated}
        </p>
        <p className="text-base leading-relaxed text-muted-foreground">
          {document.intro}
        </p>
        <p className="text-sm">
          <Link
            href={legalPath(lang, otherKind)}
            className="font-medium text-emerald-600 underline underline-offset-4 hover:text-emerald-700 dark:text-emerald-400"
          >
            {otherLabel}
          </Link>
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {document.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-semibold text-foreground">
              {section.title}
            </h2>
            <div className="mt-3 flex flex-col gap-3">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-sm leading-relaxed text-muted-foreground sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
