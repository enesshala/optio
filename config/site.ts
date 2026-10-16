import { features } from "@/config/features";
import { SiteConfig } from "@/types/siteConfig";
import { MdEmail } from "react-icons/md";
import { SiInstagram } from "react-icons/si";

const INSTAGRAM_URL = "https://www.instagram.com/optio.digital/";

const baseSiteConfig = {
  name: "OPTIO",
  description:
    "We help brands and teams worldwide build platforms, automate workflows, and grow digitally. From idea to execution, we ship systems that convert.",
  url: "https://optio.digital",
  ogImage: "https://optio.digital/og.png",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://optio.digital"
  ),
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
    "custom software",
  ],
  authors: [
    {
      name: "OPTIO Digital",
      url: INSTAGRAM_URL,
      twitter: INSTAGRAM_URL,
    },
  ],
  creator: "@optio.digital",
  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "#ecfdf5" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0a09" },
  ],
  nextThemeColor: "light",
  icons: {
    icon: "/lightoptio.svg",
    shortcut: "/lightoptio.svg",
    apple: "/lightoptio.svg",
  },
  headerLinks: [
    { name: "instagram", href: INSTAGRAM_URL, icon: SiInstagram },
  ],
  footerLinks: [
    {
      name: "email",
      href: "mailto:info@optio-digital.com",
      icon: MdEmail,
    },
    { name: "instagram", href: INSTAGRAM_URL, icon: SiInstagram },
  ],
  footerProducts: [
    ...(features.showProjects
      ? [{ url: "/#Projects", name: "Projects" }]
      : []),
    { url: "/#Services", name: "Services" },
    { url: "/#Pricing", name: "Packages" },
    { url: "/bootcamp/2026", name: "Bootcamp" },
    { url: "/#FAQ", name: "FAQs" },
    { url: INSTAGRAM_URL, name: "Instagram" },
  ],
};

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    site: baseSiteConfig.creator,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
};
