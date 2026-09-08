import { Tier, TiersEnum } from "@/types/pricing";

const INSTAGRAM_URL = "https://www.instagram.com/optio.digital/";
const EMAIL_PROJECT =
  "mailto:info@optio-digital.com?subject=Project%20inquiry%20%E2%80%94%20OPTIO";

const optioTiersEn: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Starter",
    price: "Custom",
    href: EMAIL_PROJECT,
    description:
      "Launch-ready web presence for brands that need clarity and speed.",
    features: [
      "Marketing or landing site (up to 5 sections)",
      "Responsive layout & performance basics",
      "Analytics setup guidance",
      "One structured revision round",
    ],
    buttonText: "Get in touch",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Pro,
    title: "Growth",
    price: "Custom",
    href: INSTAGRAM_URL,
    description:
      "Site or app plus brand and social foundations to scale acquisition.",
    features: [
      "Multi-page site or lightweight web app",
      "Logo & core brand kit (colors, type, usage)",
      "30-day social strategy & content pillars",
      "Priority collaboration window",
    ],
    buttonText: "Get in touch",
    buttonColor: "primary",
    buttonVariant: "solid",
    mostPopular: true,
  },
  {
    key: TiersEnum.Customize,
    title: "Enterprise",
    price: "Custom",
    href: EMAIL_PROJECT,
    description:
      "Complex builds, custom software, and ongoing optimization with a dedicated lead.",
    features: [
      "Custom software & integrations",
      "Advanced web apps & APIs (as needed)",
      "Roadmap, milestones, and stakeholders",
      "Ongoing performance & iteration",
    ],
    buttonText: "Get in touch",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
];

const optioTiersSq: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Starter",
    price: "Sipas projektit",
    href: EMAIL_PROJECT,
    description:
      "Prani webi e gatshme për lansim, për marka që duan qartësi dhe shpejtësi.",
    features: [
      "Faqe marketingu ose landing (deri në 5 seksione)",
      "Layout responsiv & baza të performancës",
      "Udhëzim për vendosjen e analytics",
      "Një raund i strukturuar rishikimesh",
    ],
    buttonText: "Na kontaktoni",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Pro,
    title: "Growth",
    price: "Sipas projektit",
    href: INSTAGRAM_URL,
    description:
      "Faqe ose app plus themele marke dhe sociale për të rritur blerjen.",
    features: [
      "Faqe me shumë faqe ose web app i lehtë",
      "Logo & kit bazë marke (ngjyra, tipografi, përdorim)",
      "Strategji 30-ditore sociale & shtylla përmbajtjeje",
      "Dritare prioritare bashkëpunimi",
    ],
    buttonText: "Na kontaktoni",
    buttonColor: "primary",
    buttonVariant: "solid",
    mostPopular: true,
  },
  {
    key: TiersEnum.Customize,
    title: "Enterprise",
    price: "Sipas projektit",
    href: EMAIL_PROJECT,
    description:
      "Ndërtime komplekse, software i personalizuar dhe optimizim i vazhdueshëm me lider të dedikuar.",
    features: [
      "Software i personalizuar & integrime",
      "Web app të avancuara & API (sipas nevojës)",
      "Udhërrëfyes, milestone dhe stakeholderë",
      "Performancë & përsëritje e vazhdueshme",
    ],
    buttonText: "Na kontaktoni",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
];

const optioTiersDe: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Starter",
    price: "Individuell",
    href: EMAIL_PROJECT,
    description:
      "Launch-bereite Webpräsenz für Marken, die Klarheit und Tempo brauchen.",
    features: [
      "Marketing- oder Landing-Site (bis zu 5 Abschnitte)",
      "Responsives Layout & Performance-Basics",
      "Hilfe beim Analytics-Setup",
      "Eine strukturierte Revisionsrunde",
    ],
    buttonText: "Kontakt aufnehmen",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Pro,
    title: "Growth",
    price: "Individuell",
    href: INSTAGRAM_URL,
    description:
      "Site oder App plus Marken- und Social-Fundament, um Acquisition zu skalieren.",
    features: [
      "Mehrseitige Site oder leichte Web-App",
      "Logo & Kern-Brand-Kit (Farben, Typo, Nutzung)",
      "30-Tage Social-Strategie & Content-Säulen",
      "Prioritäres Kollaborationsfenster",
    ],
    buttonText: "Kontakt aufnehmen",
    buttonColor: "primary",
    buttonVariant: "solid",
    mostPopular: true,
  },
  {
    key: TiersEnum.Customize,
    title: "Enterprise",
    price: "Individuell",
    href: EMAIL_PROJECT,
    description:
      "Komplexe Builds, Custom Software und laufende Optimierung mit dediziertem Lead.",
    features: [
      "Custom Software & Integrationen",
      "Fortgeschrittene Web-Apps & APIs (nach Bedarf)",
      "Roadmap, Meilensteine und Stakeholder",
      "Laufende Performance & Iteration",
    ],
    buttonText: "Kontakt aufnehmen",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
];

const optioTiersFr: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Starter",
    price: "Sur mesure",
    href: EMAIL_PROJECT,
    description:
      "Présence web prête au lancement pour les marques qui veulent clarté et vitesse.",
    features: [
      "Site marketing ou landing (jusqu'à 5 sections)",
      "Layout responsive & bases de performance",
      "Guidance pour la mise en place analytics",
      "Un round de révisions structuré",
    ],
    buttonText: "Nous contacter",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Pro,
    title: "Growth",
    price: "Sur mesure",
    href: INSTAGRAM_URL,
    description:
      "Site ou app plus fondations marque et social pour scaler l'acquisition.",
    features: [
      "Site multipages ou web app légère",
      "Logo & kit de marque de base (couleurs, typo, usage)",
      "Stratégie sociale 30 jours & piliers de contenu",
      "Fenêtre de collaboration prioritaire",
    ],
    buttonText: "Nous contacter",
    buttonColor: "primary",
    buttonVariant: "solid",
    mostPopular: true,
  },
  {
    key: TiersEnum.Customize,
    title: "Enterprise",
    price: "Sur mesure",
    href: EMAIL_PROJECT,
    description:
      "Builds complexes, logiciels sur mesure et optimisation continue avec un lead dédié.",
    features: [
      "Logiciel sur mesure & intégrations",
      "Web apps avancées & APIs (selon besoin)",
      "Feuille de route, jalons et parties prenantes",
      "Performance & itération continues",
    ],
    buttonText: "Nous contacter",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
];

const optioTiersSv: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Starter",
    price: "Skräddarsytt",
    href: EMAIL_PROJECT,
    description:
      "Lanseringsklar webbnärvaro för varumärken som behöver tydlighet och fart.",
    features: [
      "Marketing- eller landningssida (upp till 5 sektioner)",
      "Responsiv layout & prestandagrunder",
      "Vägledning för analytics-setup",
      "En strukturerad revisionsrunda",
    ],
    buttonText: "Hör av dig",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Pro,
    title: "Growth",
    price: "Skräddarsytt",
    href: INSTAGRAM_URL,
    description:
      "Sajt eller app plus varumärkes- och sociala grunder för att skala acquisition.",
    features: [
      "Flersidig sajt eller lätt webbapp",
      "Logo & kärnvarumärkeskit (färger, typo, användning)",
      "30-dagars social strategi & innehållspelare",
      "Prioriterat samarbetsfönster",
    ],
    buttonText: "Hör av dig",
    buttonColor: "primary",
    buttonVariant: "solid",
    mostPopular: true,
  },
  {
    key: TiersEnum.Customize,
    title: "Enterprise",
    price: "Skräddarsytt",
    href: EMAIL_PROJECT,
    description:
      "Komplexa byggen, skräddarsydd mjukvara och löpande optimering med dedikerad lead.",
    features: [
      "Skräddarsydd mjukvara & integrationer",
      "Avancerade webbappar & API:er (vid behov)",
      "Roadmap, milstolpar och stakeholders",
      "Löpande prestanda & iteration",
    ],
    buttonText: "Hör av dig",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
];

const optioTiersAr: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Starter",
    price: "مخصص",
    href: EMAIL_PROJECT,
    description:
      "حضور ويب جاهز للإطلاق للعلامات التي تحتاج وضوحًا وسرعة.",
    features: [
      "موقع تسويقي أو صفحة هبوط (حتى 5 أقسام)",
      "تخطيط متجاوب وأساسيات الأداء",
      "إرشاد لإعداد التحليلات",
      "جولة مراجعة منظمة واحدة",
    ],
    buttonText: "تواصل معنا",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Pro,
    title: "Growth",
    price: "مخصص",
    href: INSTAGRAM_URL,
    description:
      "موقع أو تطبيق مع أسس العلامة ووسائل التواصل لتوسيع الاكتساب.",
    features: [
      "موقع متعدد الصفحات أو تطبيق ويب خفيف",
      "شعار ومجموعة علامة أساسية (ألوان وخطوط واستخدام)",
      "استراتيجية اجتماعية لـ 30 يومًا وأعمدة محتوى",
      "نافذة تعاون ذات أولوية",
    ],
    buttonText: "تواصل معنا",
    buttonColor: "primary",
    buttonVariant: "solid",
    mostPopular: true,
  },
  {
    key: TiersEnum.Customize,
    title: "Enterprise",
    price: "مخصص",
    href: EMAIL_PROJECT,
    description:
      "بناءات معقدة وبرمجيات مخصصة وتحسين مستمر مع قائد مخصص.",
    features: [
      "برمجيات مخصصة وتكاملات",
      "تطبيقات ويب متقدمة وواجهات برمجة (حسب الحاجة)",
      "خارطة طريق ومعالم وأصحاب مصلحة",
      "أداء وتكرار مستمر",
    ],
    buttonText: "تواصل معنا",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
];

const optioTiersZh: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Starter",
    price: "按需定制",
    href: EMAIL_PROJECT,
    description: "面向需要清晰与速度的品牌，提供可上线的网络呈现。",
    features: [
      "营销站或落地页（最多 5 个区块）",
      "响应式布局与性能基础",
      "分析工具设置指导",
      "一轮结构化修订",
    ],
    buttonText: "联系我们",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Pro,
    title: "Growth",
    price: "按需定制",
    href: INSTAGRAM_URL,
    description: "网站或应用，加上品牌与社交基础，助力获客扩展。",
    features: [
      "多页面站或轻量 Web 应用",
      "Logo 与核心品牌套件（色彩、字体、用法）",
      "30 天社交策略与内容支柱",
      "优先协作窗口",
    ],
    buttonText: "联系我们",
    buttonColor: "primary",
    buttonVariant: "solid",
    mostPopular: true,
  },
  {
    key: TiersEnum.Customize,
    title: "Enterprise",
    price: "按需定制",
    href: EMAIL_PROJECT,
    description: "复杂构建、定制软件与持续优化，配备专属负责人。",
    features: [
      "定制软件与集成",
      "高级 Web 应用与 API（按需）",
      "路线图、里程碑与干系人",
      "持续性能与迭代",
    ],
    buttonText: "联系我们",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
];

export const TIERS_EN = optioTiersEn;

export const TIERS_SQ = optioTiersSq;

export const TIERS_ZH = optioTiersZh;

export const TIERS_AR = optioTiersAr;

export const TIERS_DE = optioTiersDe;

export const TIERS_FR = optioTiersFr;

export const TIERS_SV = optioTiersSv;

interface TiersCollection {
  [key: `TIERS_${string}`]: Array<Tier>;
}

export const ALL_TIERS: TiersCollection = {
  TIERS_EN,
  TIERS_SQ,
  TIERS_ZH,
  TIERS_AR,
  TIERS_DE,
  TIERS_FR,
  TIERS_SV,
};
