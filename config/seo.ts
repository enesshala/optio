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
    title: "OPTIO — Digital Agency | Web, Brand & Growth",
    description:
      "OPTIO helps brands grow in the digital world — globally. From idea to execution, we build digital experiences that convert.",
    keywords: [
      "digital agency",
      "web development",
      "brand identity",
      "OPTIO",
    ],
    openGraphLocale: "ar_SA",
  },
  de: {
    title: "OPTIO — Digitale Agentur | Web, Marke & Wachstum",
    description:
      "OPTIO hilft Marken, digital zu wachsen — weltweit. Von der Idee bis zur Umsetzung entwickeln wir digitale Erlebnisse, die konvertieren.",
    keywords: [
      "Digitalagentur",
      "Webentwicklung",
      "Markenidentität",
      "OPTIO",
    ],
    openGraphLocale: "de_DE",
  },
  fr: {
    title: "OPTIO — Agence digitale | Web, marque & croissance",
    description:
      "OPTIO aide les marques à grandir dans le monde numérique — à l'échelle mondiale. De l'idée à l'exécution, nous créons des expériences qui convertissent.",
    keywords: [
      "agence digitale",
      "développement web",
      "identité de marque",
      "OPTIO",
    ],
    openGraphLocale: "fr_FR",
  },
  sv: {
    title: "OPTIO — Digital byrå | Webb, varumärke & tillväxt",
    description:
      "OPTIO hjälper varumärken att växa digitalt — globalt. Från idé till leverans bygger vi digitala upplevelser som konverterar.",
    keywords: [
      "digital byrå",
      "webbutveckling",
      "varumärkesidentitet",
      "OPTIO",
    ],
    openGraphLocale: "sv_SE",
  },
  zh: {
    title: "OPTIO — 数字机构 | 网站、品牌与增长",
    description:
      "OPTIO 帮助品牌在数字世界中增长。从创意到落地，我们打造可转化的数字体验。",
    keywords: ["数字机构", "网站开发", "品牌识别", "OPTIO"],
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
