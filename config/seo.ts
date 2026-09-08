export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://optio.digital";

export type LocaleSeo = {
  title: string;
  description: string;
  keywords: string[];
  openGraphLocale: string;
};

const seoByLocale: Record<string, LocaleSeo> = {
  en: {
    title: "OPTIO — Digital Agency in Kosovo | Web, Brand & Growth",
    description:
      "OPTIO is a digital agency in Kosovo helping brands grow worldwide. Websites, web apps, brand identity, and social strategy — from Prishtina to global clients.",
    keywords: [
      "digital agency Kosovo",
      "web development Prishtina",
      "web development Kosovo",
      "OPTIO Kosovo",
      "brand identity Kosovo",
      "web app development",
      "social media marketing Kosovo",
      "custom software Kosovo",
      "digital agency",
      "OPTIO",
    ],
    openGraphLocale: "en_US",
  },
  sq: {
    title: "OPTIO — Agjenci Dixhitale në Kosovë | Web, Markë & Rritje",
    description:
      "OPTIO është agjenci dixhitale në Kosovë që ndihmon markat të rriten lokalisht dhe botërisht. Website, web app, identitet marke dhe strategji sociale — nga Prishtina te klientët globalë.",
    keywords: [
      "agjenci dixhitale Kosovë",
      "zhvillim webi Prishtinë",
      "zhvillim webi Kosovë",
      "OPTIO Kosovë",
      "identitet marke Kosovë",
      "zhvillim web app",
      "marketing në rrjete sociale Kosovë",
      "software i personalizuar Kosovë",
      "agjenci dixhitale",
      "OPTIO",
    ],
    openGraphLocale: "sq_AL",
  },
  ar: {
    title: "OPTIO — وكالة رقمية | ويب، علامة ونمو",
    description:
      "OPTIO وكالة رقمية تساعد العلامات على النمو عالميًا. مواقع وتطبيقات ويب وهوية علامة واستراتيجية اجتماعية — من الفكرة إلى التنفيذ.",
    keywords: [
      "وكالة رقمية",
      "تطوير مواقع",
      "تطوير تطبيقات ويب",
      "هوية علامة",
      "تسويق وسائل التواصل",
      "برمجيات مخصصة",
      "OPTIO",
    ],
    openGraphLocale: "ar_SA",
  },
  de: {
    title: "OPTIO — Digitale Agentur | Web, Marke & Wachstum",
    description:
      "OPTIO hilft Marken, digital zu wachsen — weltweit. Websites, Web-Apps, Markenidentität und Social-Strategie — von der Idee bis zur Umsetzung.",
    keywords: [
      "Digitalagentur",
      "Webentwicklung",
      "Web-App-Entwicklung",
      "Markenidentität",
      "Social-Media-Marketing",
      "individuelle Software",
      "OPTIO",
    ],
    openGraphLocale: "de_DE",
  },
  fr: {
    title: "OPTIO — Agence digitale | Web, marque & croissance",
    description:
      "OPTIO aide les marques à grandir dans le monde numérique — à l'échelle mondiale. Sites, web apps, identité de marque et stratégie sociale — de l'idée à l'exécution.",
    keywords: [
      "agence digitale",
      "développement web",
      "développement web app",
      "identité de marque",
      "marketing réseaux sociaux",
      "logiciel sur mesure",
      "OPTIO",
    ],
    openGraphLocale: "fr_FR",
  },
  sv: {
    title: "OPTIO — Digital byrå | Webb, varumärke & tillväxt",
    description:
      "OPTIO hjälper varumärken att växa digitalt — globalt. Webbplatser, webbappar, varumärkesidentitet och social strategi — från idé till leverans.",
    keywords: [
      "digital byrå",
      "webbutveckling",
      "webbapputveckling",
      "varumärkesidentitet",
      "sociala medier",
      "skräddarsydd mjukvara",
      "OPTIO",
    ],
    openGraphLocale: "sv_SE",
  },
  zh: {
    title: "OPTIO — 数字机构 | 网站、品牌与增长",
    description:
      "OPTIO 帮助品牌在数字世界中增长。网站、Web 应用、品牌识别与社交策略——从创意到落地。",
    keywords: [
      "数字机构",
      "网站开发",
      "Web 应用开发",
      "品牌识别",
      "社交媒体营销",
      "定制软件",
      "OPTIO",
    ],
    openGraphLocale: "zh_CN",
  },
};

export function getSeoForLocale(lang: string): LocaleSeo {
  return seoByLocale[lang] || seoByLocale.en;
}

export function localePath(lang: string): string {
  if (!lang || lang === "en") return "/";
  return `/${lang}`;
}

/** Locale-aware path for a collab case study, e.g. /collab/harku or /sq/collab/harku */
export function collabPath(lang: string, slug: string): string {
  const base = localePath(lang);
  if (base === "/") return `/collab/${slug}`;
  return `${base}/collab/${slug}`;
}

/** Locale-aware path for a bootcamp page, e.g. /bootcamp/2026 or /sq/bootcamp/2026 */
export function bootcampPath(lang: string, year: string): string {
  const base = localePath(lang);
  if (base === "/") return `/bootcamp/${year}`;
  return `${base}/bootcamp/${year}`;
}
