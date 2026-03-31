import { Tier, TiersEnum } from "@/types/pricing";

const INSTAGRAM_URL = "https://www.instagram.com/optio.digital/";
const EMAIL_PROJECT = "mailto:info@optio-digital.com?subject=Project%20inquiry%20%E2%80%94%20OPTIO";

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
    buttonText: "Email us",
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
    buttonText: "DM on Instagram",
    buttonColor: "primary",
    buttonVariant: "solid",
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
    buttonText: "Let's talk",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_EN = optioTiersEn;

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
  TIERS_ZH,
  TIERS_AR,
  TIERS_DE,
  TIERS_FR,
  TIERS_SV,
};
