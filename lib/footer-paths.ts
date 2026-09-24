import { bootcampPath } from "@/config/seo";
import { defaultLocale } from "@/lib/i18n";

/** Homepage section hash, locale-aware (e.g. /#Services, /sq/#Services). */
export function localizedSectionHref(lang: string, sectionId: string) {
  const hash = sectionId.startsWith("#") ? sectionId : `#${sectionId}`;
  if (!lang || lang === defaultLocale) return `/${hash}`;
  return `/${lang}/${hash}`;
}

export function localizedBootcampHref(lang: string, year = "2026") {
  return bootcampPath(lang, year);
}
