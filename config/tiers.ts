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
      "A focused web presence, storefront, or single automation scope — clarity and speed.",
    features: [
      "Marketing site, landing, or lightweight storefront",
      "One automation or integration workflow",
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
      "Platform or e-commerce build plus digital growth foundations to scale acquisition.",
    features: [
      "Custom platform module or full e-commerce system",
      "Growth funnel & conversion foundations",
      "Core integrations between your key tools",
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
      "Multi-system builds — CRM/HRM, automations, APIs — with ongoing optimization and a dedicated lead.",
    features: [
      "Custom platforms (CRM, HRM, ops) & deep integrations",
      "Automation & AI workflows across teams",
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
      "Prani webi e fokussuar, storefront ose një scope automatizimi — qartësi dhe shpejtësi.",
    features: [
      "Faqe marketingu, landing ose storefront i lehtë",
      "Një workflow automatizimi ose integrimi",
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
      "Platformë ose e-commerce plus themele rritjeje dixhitale për të shkallëzuar acquisition.",
    features: [
      "Modul platforme ose sistem e-commerce i plotë",
      "Funnel rritjeje & themele konvertimi",
      "Integrime bazë midis mjeteve kryesore",
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
      "Ndërtime multi-sistem — CRM/HRM, automatizime, API — me optimizim të vazhdueshëm dhe lider të dedikuar.",
    features: [
      "Platforma të personalizuara (CRM, HRM, ops) & integrime të thella",
      "Automatizim & workflow me AI nëpër ekipe",
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
      "Fokussierte Webpräsenz, Storefront oder einzelner Automation-Scope — Klarheit und Tempo.",
    features: [
      "Marketing-Site, Landing oder leichter Storefront",
      "Ein Automation- oder Integrations-Workflow",
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
      "Plattform- oder E-Commerce-Build plus digitale Growth-Grundlagen für skalierbare Acquisition.",
    features: [
      "Plattform-Modul oder volles E-Commerce-System",
      "Growth-Funnel & Conversion-Fundamente",
      "Kernintegrationen zwischen euren Schlüsseltools",
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
      "Multi-System-Builds — CRM/HRM, Automationen, APIs — mit laufender Optimierung und dediziertem Lead.",
    features: [
      "Individuelle Plattformen (CRM, HRM, Ops) & tiefe Integrationen",
      "Automation & AI-Workflows über Teams hinweg",
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
      "Présence web ciblée, storefront ou scope d'automatisation unique — clarté et vitesse.",
    features: [
      "Site marketing, landing ou storefront léger",
      "Un workflow d'automatisation ou d'intégration",
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
      "Build plateforme ou e-commerce plus fondations de croissance digitale pour scaler l'acquisition.",
    features: [
      "Module plateforme ou système e-commerce complet",
      "Funnel de croissance & fondations de conversion",
      "Intégrations clés entre vos outils principaux",
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
      "Builds multi-systèmes — CRM/RH, automatisations, APIs — avec optimisation continue et lead dédié.",
    features: [
      "Plateformes sur mesure (CRM, RH, ops) & intégrations profondes",
      "Automatisation & workflows IA entre équipes",
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
      "Fokuserad webbnärvaro, storefront eller ett enda automationsscope — tydlighet och fart.",
    features: [
      "Marketingsajt, landning eller lätt storefront",
      "Ett automations- eller integrationsflöde",
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
      "Plattforms- eller e-handelsbygge plus digitala tillväxtgrunder för att skala acquisition.",
    features: [
      "Plattformsmodul eller komplett e-handelssystem",
      "Tillväxttratt & konverteringsgrunder",
      "Kärnintegrationer mellan era nyckelverktyg",
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
      "Multi-systembyggen — CRM/HRM, automationer, API:er — med löpande optimering och dedikerad lead.",
    features: [
      "Skräddarsydda plattformar (CRM, HRM, ops) & djupa integrationer",
      "Automation & AI-flöden över team",
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
      "حضور ويب مركّز أو متجر أو نطاق أتمتة واحد — وضوح وسرعة.",
    features: [
      "موقع تسويقي أو صفحة هبوط أو متجر خفيف",
      "سير عمل أتمتة أو تكامل واحد",
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
      "بناء منصة أو تجارة إلكترونية مع أسس نمو رقمي لتوسيع الاكتساب.",
    features: [
      "وحدة منصة أو نظام تجارة إلكترونية كامل",
      "قمع نمو وأسس تحويل",
      "تكاملات أساسية بين أدواتكم الرئيسية",
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
      "بناءات متعددة الأنظمة — CRM/HRM وأتمتة وواجهات برمجة — مع تحسين مستمر وقائد مخصص.",
    features: [
      "منصات مخصصة (CRM وHRM وعمليات) وتكاملات عميقة",
      "أتمتة وسير عمل بالذكاء الاصطناعي عبر الفرق",
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
    description: "聚焦的网络呈现、店铺或单一自动化范围——清晰与速度。",
    features: [
      "营销站、落地页或轻量店铺",
      "一条自动化或集成工作流",
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
    description: "平台或电商构建，加上数字增长基础，助力获客扩展。",
    features: [
      "平台模块或完整电商系统",
      "增长漏斗与转化基础",
      "关键工具之间的核心集成",
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
    description: "多系统构建——CRM/HRM、自动化、API——持续优化并配备专属负责人。",
    features: [
      "定制平台（CRM、HRM、运营）与深度集成",
      "跨团队的自动化与 AI 工作流",
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
