import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

/** Supported path segments for middleware + locale matcher. */
export const locales = [
  "",
  "en",
  "en-US",
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
 * Order in language picker and footer: default English first, then ISO 639-1 (ar, de, fr, sv, zh).
 */
export const localesDisplayOrder = [
  "en",
  "ar",
  "de",
  "fr",
  "sv",
  "zh",
] as const;

export const localeNames: Record<(typeof localesDisplayOrder)[number], string> =
  {
    en: "🇺🇸 English",
    ar: "🇸🇦 العربية",
    de: "🇩🇪 Deutsch",
    fr: "🇫🇷 Français",
    sv: "🇸🇪 Svenska",
    zh: "🇨🇳 中文",
  };

export const defaultLocale = "en";

export function getLocale(headers: any): string {
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

const dictionaries: Record<string, () => Promise<Record<string, unknown>>> = {
  en: () => import("@/locales/en.json").then((module) => module.default),
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
};

export const getDictionary = async (locale: string) => {
  if (locale in localeAliases) {
    locale = localeAliases[locale];
  }

  if (!Object.keys(dictionaries).includes(locale)) {
    locale = "en";
  }

  return dictionaries[locale]();
};
