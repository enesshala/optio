import { LucideIcon, Plug, ShoppingCart, TrendingUp, Zap } from "lucide-react";
import { IconType } from "react-icons";
import { FaToolbox } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";

const serviceIcons = {
  platforms: FaToolbox,
  automation: Zap,
  ecommerce: ShoppingCart,
  growth: TrendingUp,
  apps: FaMobileScreenButton,
  integrations: Plug,
} as const;

const optioServices = [
  {
    title: "Custom Platforms",
    content:
      "CRM, HRM, and internal ops tools tailored to how your business actually runs — not generic templates.",
    icon: serviceIcons.platforms,
  },
  {
    title: "Automation & AI Workflows",
    content:
      "Ops automation and AI-assisted processes that cut manual handoffs and keep teams moving faster.",
    icon: serviceIcons.automation,
  },
  {
    title: "E-commerce Systems",
    content:
      "Stores, catalogs, checkout, and post-purchase flows built to convert and scale with your catalog.",
    icon: serviceIcons.ecommerce,
  },
  {
    title: "Digital Growth",
    content:
      "Acquisition, funnels, content and SEO, and conversion systems that turn attention into pipeline.",
    icon: serviceIcons.growth,
  },
  {
    title: "Product & Web Apps",
    content:
      "Customer-facing products and scalable web applications — sharp UX, solid architecture, ready to ship.",
    icon: serviceIcons.apps,
  },
  {
    title: "Integrations & APIs",
    content:
      "Connect tools, data, and systems into one reliable stack so nothing important lives in silos.",
    icon: serviceIcons.integrations,
  },
];

const optioServicesSq = [
  {
    title: "Platforma të Personalizuara",
    content:
      "CRM, HRM dhe mjete ops të brendshme të përshtatura me mënyrën reale të punës së biznesit — jo template gjenerike.",
    icon: serviceIcons.platforms,
  },
  {
    title: "Automatizim & Workflow me AI",
    content:
      "Automatizim ops dhe procese me ndihmë të AI që ulin punën manuale dhe mbajnë ekipet në lëvizje.",
    icon: serviceIcons.automation,
  },
  {
    title: "Sisteme E-commerce",
    content:
      "Dyqane, katalogë, checkout dhe flukse pas blerjes të ndërtuara për të konvertuar dhe rritur me katalogun.",
    icon: serviceIcons.ecommerce,
  },
  {
    title: "Rritje Dixhitale",
    content:
      "Acquisition, funnel, përmbajtje dhe SEO, dhe sisteme konvertimi që e kthejnë vëmendjen në pipeline.",
    icon: serviceIcons.growth,
  },
  {
    title: "Produkt & Web App",
    content:
      "Produkte për klientë dhe web app të shkallëzueshme — UX i pastër, arkitekturë e fortë, gati për lansim.",
    icon: serviceIcons.apps,
  },
  {
    title: "Integrime & API",
    content:
      "Lidhni mjete, të dhëna dhe sisteme në një stack të besueshëm — pa silosa të panevojshme.",
    icon: serviceIcons.integrations,
  },
];

const optioServicesDe = [
  {
    title: "Individuelle Plattformen",
    content:
      "CRM, HRM und interne Ops-Tools, die zu Ihrer Arbeitsweise passen — keine generischen Templates.",
    icon: serviceIcons.platforms,
  },
  {
    title: "Automation & AI-Workflows",
    content:
      "Ops-Automation und KI-gestützte Prozesse, die manuelle Übergaben reduzieren und Teams beschleunigen.",
    icon: serviceIcons.automation,
  },
  {
    title: "E-Commerce-Systeme",
    content:
      "Shops, Kataloge, Checkout und Post-Purchase-Flows — gebaut für Conversion und skalierbare Kataloge.",
    icon: serviceIcons.ecommerce,
  },
  {
    title: "Digitales Wachstum",
    content:
      "Acquisition, Funnels, Content & SEO sowie Conversion-Systeme, die Aufmerksamkeit in Pipeline verwandeln.",
    icon: serviceIcons.growth,
  },
  {
    title: "Produkt & Web-Apps",
    content:
      "Kundenprodukte und skalierbare Web-Apps — klares UX, solide Architektur, bereit zum Launch.",
    icon: serviceIcons.apps,
  },
  {
    title: "Integrationen & APIs",
    content:
      "Tools, Daten und Systeme zu einem zuverlässigen Stack verbinden — ohne unnötige Silos.",
    icon: serviceIcons.integrations,
  },
];

const optioServicesFr = [
  {
    title: "Plateformes sur mesure",
    content:
      "CRM, RH et outils ops internes adaptés à votre façon de travailler — pas de templates génériques.",
    icon: serviceIcons.platforms,
  },
  {
    title: "Automatisation & workflows IA",
    content:
      "Automatisation ops et processus assistés par l'IA pour moins de passes manuelles et plus de vitesse.",
    icon: serviceIcons.automation,
  },
  {
    title: "Systèmes e-commerce",
    content:
      "Boutiques, catalogues, checkout et parcours post-achat conçus pour convertir et grandir avec le catalogue.",
    icon: serviceIcons.ecommerce,
  },
  {
    title: "Croissance digitale",
    content:
      "Acquisition, funnels, contenu & SEO, et systèmes de conversion qui transforment l'attention en pipeline.",
    icon: serviceIcons.growth,
  },
  {
    title: "Produit & web apps",
    content:
      "Produits client et web apps évolutives — UX nette, architecture solide, prêtes à livrer.",
    icon: serviceIcons.apps,
  },
  {
    title: "Intégrations & APIs",
    content:
      "Connectez outils, données et systèmes dans une stack fiable — sans silos inutiles.",
    icon: serviceIcons.integrations,
  },
];

const optioServicesSv = [
  {
    title: "Skräddarsydda plattformar",
    content:
      "CRM, HRM och interna ops-verktyg anpassade till hur ni faktiskt jobbar — inte generiska mallar.",
    icon: serviceIcons.platforms,
  },
  {
    title: "Automation & AI-flöden",
    content:
      "Ops-automation och AI-stödda processer som minskar manuella överlämningar och håller farten uppe.",
    icon: serviceIcons.automation,
  },
  {
    title: "E-handelssystem",
    content:
      "Butiker, kataloger, checkout och postköpsflöden byggda för konvertering och skalning.",
    icon: serviceIcons.ecommerce,
  },
  {
    title: "Digital tillväxt",
    content:
      "Acquisition, trattar, content & SEO samt konverteringssystem som gör uppmärksamhet till pipeline.",
    icon: serviceIcons.growth,
  },
  {
    title: "Produkt & webbappar",
    content:
      "Kundnära produkter och skalbara webbappar — skarp UX, solid arkitektur, redo att shippa.",
    icon: serviceIcons.apps,
  },
  {
    title: "Integrationer & API:er",
    content:
      "Koppla verktyg, data och system till en pålitlig stack — utan onödiga silos.",
    icon: serviceIcons.integrations,
  },
];

const optioServicesAr = [
  {
    title: "منصات مخصصة",
    content:
      "أنظمة CRM وHRM وأدوات تشغيل داخلية مصممة لطريقة عملكم الحقيقية — لا قوالب عامة.",
    icon: serviceIcons.platforms,
  },
  {
    title: "أتمتة وسير عمل بالذكاء الاصطناعي",
    content:
      "أتمتة العمليات ومسارات مدعومة بالذكاء الاصطناعي تقلل التسليم اليدوي وتسرّع الفرق.",
    icon: serviceIcons.automation,
  },
  {
    title: "أنظمة التجارة الإلكترونية",
    content:
      "متاجر وكتالوجات ودفع ومسارات ما بعد الشراء مبنية للتحويل والنمو مع الكتالوج.",
    icon: serviceIcons.ecommerce,
  },
  {
    title: "النمو الرقمي",
    content:
      "اكتساب وقمع محتوى وتحسين محركات البحث وأنظمة تحويل تحوّل الانتباه إلى خط أنابيب.",
    icon: serviceIcons.growth,
  },
  {
    title: "المنتج وتطبيقات الويب",
    content:
      "منتجات للعملاء وتطبيقات ويب قابلة للتوسع — تجربة واضحة وهندسة قوية وجاهزة للإطلاق.",
    icon: serviceIcons.apps,
  },
  {
    title: "التكاملات وواجهات البرمجة",
    content:
      "اربط الأدوات والبيانات والأنظمة في مكدس موثوق — بلا صوامع غير ضرورية.",
    icon: serviceIcons.integrations,
  },
];

const optioServicesZh = [
  {
    title: "定制平台",
    content:
      "贴合真实业务运转的 CRM、HRM 与内部运营工具——而非通用模板。",
    icon: serviceIcons.platforms,
  },
  {
    title: "自动化与 AI 工作流",
    content:
      "运营自动化与 AI 辅助流程，减少人工交接，让团队更快推进。",
    icon: serviceIcons.automation,
  },
  {
    title: "电商系统",
    content:
      "店铺、目录、结账与购后流程，围绕转化与目录扩展而建。",
    icon: serviceIcons.ecommerce,
  },
  {
    title: "数字增长",
    content:
      "获客、漏斗、内容与 SEO，以及把注意力变成管道的转化系统。",
    icon: serviceIcons.growth,
  },
  {
    title: "产品与 Web 应用",
    content:
      "面向客户的产品与可扩展 Web 应用——清晰体验、扎实架构、可交付上线。",
    icon: serviceIcons.apps,
  },
  {
    title: "集成与 API",
    content:
      "把工具、数据与系统连成可靠技术栈——避免无谓孤岛。",
    icon: serviceIcons.integrations,
  },
];

export const FEATURES_EN = optioServices;

export const FEATURES_SQ = optioServicesSq;

export const FEATURES_ZH = optioServicesZh;

export const FEATURES_AR = optioServicesAr;

export const FEATURES_DE = optioServicesDe;

export const FEATURES_FR = optioServicesFr;

export const FEATURES_SV = optioServicesSv;

interface FeaturesCollection {
  [key: `FEATURES_${string}`]: {
    title: string;
    content: string;
    icon: IconType | LucideIcon | string;
  }[];
}

export const ALL_FEATURES: FeaturesCollection = {
  FEATURES_EN,
  FEATURES_SQ,
  FEATURES_ZH,
  FEATURES_AR,
  FEATURES_DE,
  FEATURES_FR,
  FEATURES_SV,
};
