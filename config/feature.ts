import { LucideIcon, MagnetIcon, Megaphone } from "lucide-react";
import { IconType } from "react-icons";
import { FaToolbox } from "react-icons/fa";
import { FaEarthAsia, FaMobileScreenButton, FaPenFancy } from "react-icons/fa6";

const optioServices = [
  {
    title: "Website & Web App Development",
    content:
      "Fast, accessible sites and product-ready web apps that look sharp and scale with you.",
    icon: FaMobileScreenButton,
  },
  {
    title: "Custom Software Solutions",
    content:
      "Bespoke tools, internal systems, and integrations that match how your business actually works.",
    icon: FaToolbox,
  },
  {
    title: "Logo & Brand Identity",
    content:
      "Distinctive visual systems — logo, colors, type, and guidelines — so your brand feels cohesive everywhere.",
    icon: FaPenFancy,
  },
  {
    title: "Social Media Marketing & Strategy",
    content:
      "Channel strategy, content direction, and campaigns built to grow reach and conversions.",
    icon: Megaphone,
  },
  {
    title: "SEO & Discoverability",
    content:
      "Technical SEO, performance, and structure that help the right people find you.",
    icon: MagnetIcon,
  },
  {
    title: "Global Collaboration",
    content:
      "We work with startups and businesses worldwide — async-friendly, clear communication, on your timeline.",
    icon: FaEarthAsia,
  },
];

export const FEATURES_EN = optioServices;

export const FEATURES_ZH = optioServices;

export const FEATURES_AR = optioServices;

export const FEATURES_DE = optioServices;

export const FEATURES_FR = optioServices;

export const FEATURES_SV = optioServices;

interface FeaturesCollection {
  [key: `FEATURES_${string}`]: {
    title: string;
    content: string;
    icon: IconType | LucideIcon | string;
  }[];
}

export const ALL_FEATURES: FeaturesCollection = {
  FEATURES_EN,
  FEATURES_ZH,
  FEATURES_AR,
  FEATURES_DE,
  FEATURES_FR,
  FEATURES_SV,
};
