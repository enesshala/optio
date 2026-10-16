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
    title: "OPTIO — Platforms, Automation & Digital Growth Worldwide",
    description:
      "OPTIO builds custom platforms, automation & AI workflows, e-commerce systems, and digital growth engines for teams worldwide — from idea to execution.",
    keywords: [
      "digital product studio",
      "custom CRM",
      "HRM software",
      "business automation",
      "AI workflows",
      "e-commerce systems",
      "digital growth",
      "web app development",
      "API integrations",
      "OPTIO",
    ],
    openGraphLocale: "en_US",
  },
  sq: {
    title: "OPTIO — Platforma, Automatizim & Rritje Dixhitale Botërisht",
    description:
      "OPTIO ndërton platforma të personalizuara, automatizim & workflow me AI, sisteme e-commerce dhe motorë rritjeje dixhitale për ekipe botërisht — nga idea te ekzekutimi.",
    keywords: [
      "studio produkti dixhital",
      "CRM i personalizuar",
      "software HRM",
      "automatizim biznesi",
      "workflow me AI",
      "sisteme e-commerce",
      "rritje dixhitale",
      "zhvillim web app",
      "integrime API",
      "OPTIO",
    ],
    openGraphLocale: "sq_AL",
  },
  ar: {
    title: "OPTIO — منصات وأتمتة ونمو رقمي عالميًا",
    description:
      "OPTIO تبني منصات مخصصة وأتمتة وسير عمل بالذكاء الاصطناعي وأنظمة تجارة إلكترونية ومحركات نمو رقمي للفرق حول العالم — من الفكرة إلى التنفيذ.",
    keywords: [
      "استوديو منتجات رقمية",
      "CRM مخصص",
      "برمجيات HRM",
      "أتمتة الأعمال",
      "سير عمل بالذكاء الاصطناعي",
      "أنظمة التجارة الإلكترونية",
      "النمو الرقمي",
      "تطوير تطبيقات ويب",
      "تكاملات API",
      "OPTIO",
    ],
    openGraphLocale: "ar_SA",
  },
  de: {
    title: "OPTIO — Plattformen, Automation & Digitales Wachstum weltweit",
    description:
      "OPTIO baut individuelle Plattformen, Automation & AI-Workflows, E-Commerce-Systeme und digitale Growth-Engines für Teams weltweit — von der Idee bis zur Umsetzung.",
    keywords: [
      "Digital Product Studio",
      "individuelles CRM",
      "HRM-Software",
      "Business-Automation",
      "AI-Workflows",
      "E-Commerce-Systeme",
      "digitales Wachstum",
      "Web-App-Entwicklung",
      "API-Integrationen",
      "OPTIO",
    ],
    openGraphLocale: "de_DE",
  },
  fr: {
    title: "OPTIO — Plateformes, automatisation & croissance digitale mondiale",
    description:
      "OPTIO construit des plateformes sur mesure, de l'automatisation & des workflows IA, des systèmes e-commerce et des moteurs de croissance pour des équipes partout dans le monde — de l'idée à l'exécution.",
    keywords: [
      "studio produit digital",
      "CRM sur mesure",
      "logiciel RH",
      "automatisation métier",
      "workflows IA",
      "systèmes e-commerce",
      "croissance digitale",
      "développement web app",
      "intégrations API",
      "OPTIO",
    ],
    openGraphLocale: "fr_FR",
  },
  sv: {
    title: "OPTIO — Plattformar, automation & digital tillväxt globalt",
    description:
      "OPTIO bygger skräddarsydda plattformar, automation & AI-flöden, e-handelssystem och digitala tillväxtmotorer för team världen över — från idé till leverans.",
    keywords: [
      "digital produktstudio",
      "skräddarsydd CRM",
      "HRM-mjukvara",
      "affärsautomation",
      "AI-flöden",
      "e-handelssystem",
      "digital tillväxt",
      "webbapputveckling",
      "API-integrationer",
      "OPTIO",
    ],
    openGraphLocale: "sv_SE",
  },
  zh: {
    title: "OPTIO — 面向全球的平台、自动化与数字增长",
    description:
      "OPTIO 为全球团队打造定制平台、自动化与 AI 工作流、电商系统与数字增长引擎——从创意到落地。",
    keywords: [
      "数字产品工作室",
      "定制 CRM",
      "HRM 软件",
      "业务自动化",
      "AI 工作流",
      "电商系统",
      "数字增长",
      "Web 应用开发",
      "API 集成",
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

/** Locale-aware path for legal pages, e.g. /privacy or /sq/privacy */
export function legalPath(lang: string, page: "privacy" | "terms"): string {
  const base = localePath(lang);
  if (base === "/") return `/${page}`;
  return `${base}/${page}`;
}
