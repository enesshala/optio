import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

/** Supported path segments for middleware + locale matcher. */
export const locales = [
  "",
  "en",
  "en-US",
  "sq",
  "sq-AL",
  "sq-XK",
  "ar",
  "de",
  "de-DE",
  "de-AT",
  "de-CH",
  "fr",
  "fr-FR",
  "fr-CA",
  "fr-BE",
  "sv",
  "sv-SE",
  "zh",
  "zh-CN",
  "zh-TW",
  "zh-HK",
];

/**
 * Order in language picker and footer: English first, then Albanian (Kosovo), then others.
 */
export const localesDisplayOrder = [
  "en",
  "sq",
  "ar",
  "de",
  "fr",
  "sv",
  "zh",
] as const;

export const localeNames: Record<(typeof localesDisplayOrder)[number], string> =
  {
    en: "🇺🇸 English",
    sq: "🇦🇱 Shqip",
    ar: "🇸🇦 العربية",
    de: "🇩🇪 Deutsch",
    fr: "🇫🇷 Français",
    sv: "🇸🇪 Svenska",
    zh: "🇨🇳 中文",
  };

export const defaultLocale = "en";

/** Content locales used for sitemap and static generation (no empty / regional tags). */
export const contentLocales = [...localesDisplayOrder];

export function getLocale(headers: any): string {
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

const dictionaries: Record<string, () => Promise<Record<string, unknown>>> = {
  en: () => import("@/locales/en.json").then((module) => module.default),
  sq: () => import("@/locales/sq.json").then((module) => module.default),
  ar: () => import("@/locales/ar.json").then((module) => module.default),
  de: () => import("@/locales/de.json").then((module) => module.default),
  fr: () => import("@/locales/fr.json").then((module) => module.default),
  sv: () => import("@/locales/sv.json").then((module) => module.default),
  zh: () => import("@/locales/zh.json").then((module) => module.default),
};

const localeAliases: Record<string, string> = {
  "zh-CN": "zh",
  "zh-TW": "zh",
  "zh-HK": "zh",
  "de-DE": "de",
  "de-AT": "de",
  "de-CH": "de",
  "fr-FR": "fr",
  "fr-CA": "fr",
  "fr-BE": "fr",
  "sv-SE": "sv",
  "sq-AL": "sq",
  "sq-XK": "sq",
};

export function normalizeLocale(locale: string): string {
  if (locale in localeAliases) {
    return localeAliases[locale];
  }
  if (!Object.keys(dictionaries).includes(locale)) {
    return defaultLocale;
  }
  return locale;
}

export const getDictionary = async (locale: string) => {
  locale = normalizeLocale(locale);
  return dictionaries[locale]();
};
