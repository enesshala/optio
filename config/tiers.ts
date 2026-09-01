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

export const TIERS_EN = optioTiersEn;

export const TIERS_SQ = optioTiersSq;

export const TIERS_ZH = optioTiersEn;

export const TIERS_AR = optioTiersEn;

export const TIERS_DE = optioTiersEn;

export const TIERS_FR = optioTiersEn;

export const TIERS_SV = optioTiersEn;

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
