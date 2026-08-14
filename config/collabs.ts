export type CollabProcessStep = {
  title: string;
  description: string;
};

export type CollabGallerySlot = {
  id: string;
  label: string;
  /** Empty until office collaboration photos are provided */
  src?: string;
};

export type Collab = {
  slug: string;
  name: string;
  tag: string;
  url: string;
  coverImage: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  process: CollabProcessStep[];
  deliverables: string[];
  gallery: CollabGallerySlot[];
  seoTitle: string;
  seoDescription: string;
};

export const collabs: Collab[] = [
  {
    slug: "aromadream",
    name: "AromaDream",
    tag: "E-commerce",
    url: "https://aromadream-ks.com",
    coverImage: "/images/projects/aromadream.png",
    summary:
      "A fragrance brand storefront for home, car, and space scents — warm product storytelling built for Kosovo shoppers.",
    challenge:
      "AromaDream had a distinctive scent catalog, but online it needed a storefront that felt as inviting as the products — clear collections, product stories that sell atmosphere, and a shopping path Kosovo customers could trust from browse to checkout.",
    approach:
      "We partnered from first conversation through launch — shaping a scent-led information architecture, designing a warm e-commerce experience, and shipping a store that makes discovery, product detail, and purchase feel effortless.",
    outcome:
      "AromaDream launched with a polished fragrance store that presents home, car, and space scents with clarity, tells the brand story with warmth, and gives shoppers a confident path to buy — a foundation ready to grow with the catalog.",
    process: [
      {
        title: "Discovery",
        description:
          "Workshops and interviews to map collections, audiences, and what “atmosphere” means for a scent brand in Kosovo.",
      },
      {
        title: "Strategy",
        description:
          "Defined brand voice, collection hierarchy, and conversion goals so every page supports discovery and purchase.",
      },
      {
        title: "Design",
        description:
          "Visual system and layouts that feel warm and considered — product-first storytelling, clear typography, and room to browse.",
      },
      {
        title: "Build",
        description:
          "Implemented a responsive, fast storefront with structured catalog content, checkout-ready paths, and production-ready polish.",
      },
      {
        title: "Launch",
        description:
          "Final QA, go-live, and handoff so AromaDream could own and grow the store with confidence.",
      },
    ],
    deliverables: [
      "Full e-commerce fragrance storefront",
      "Collection-led information architecture",
      "Brand-aligned visual design system",
      "Product storytelling and catalog structure",
      "Clear browse-to-purchase paths",
      "Responsive experience across devices",
      "Launch support and handoff",
    ],
    gallery: [
      {
        id: "build",
        label: "Build session — shipping AromaDream alongside OPTIO",
      },
      {
        id: "review",
        label: "Design review — storefront in light & dark",
      },
      {
        id: "hero",
        label: "Hero polish — dual-screen collaboration",
      },
      {
        id: "focused",
        label: "Focused build — crafting the experience",
      },
    ],
    seoTitle: "AromaDream — Collaboration | OPTIO",
    seoDescription:
      "How OPTIO partnered with AromaDream from idea to completion — a fragrance brand storefront for home, car, and space scents in Kosovo.",
  },
  {
    slug: "plustrade",
    name: "Plus Trade",
    tag: "Business",
    url: "https://plustrade-ks.com",
    coverImage: "/images/projects/plustrade.png",
    summary:
      "An electrical services company site with clear service offers, trust signals, and a path to request work.",
    challenge:
      "Plus Trade’s electrical work was proven on the ground, but online the company needed a presence that made services easy to understand, built trust for homeowners and businesses, and gave visitors a clear way to request work.",
    approach:
      "We partnered from first conversation through launch — clarifying positioning, shaping a service-led information architecture, designing a professional business interface, and shipping a site that makes expertise and next steps obvious.",
    outcome:
      "Plus Trade launched with a polished company site that presents electrical services with clarity, signals reliability at a glance, and gives visitors a direct route to get in touch — a foundation ready to grow with the business.",
    process: [
      {
        title: "Discovery",
        description:
          "Workshops and interviews to map services, audiences, and what trust looks like for electrical work in Kosovo.",
      },
      {
        title: "Strategy",
        description:
          "Defined brand voice, service hierarchy, and conversion goals so every page supports inquiries and credibility.",
      },
      {
        title: "Design",
        description:
          "Visual system and layouts that feel professional and approachable — clear typography, service clarity, and room to breathe.",
      },
      {
        title: "Build",
        description:
          "Implemented a responsive, fast site with structured content, contact paths, and production-ready polish.",
      },
      {
        title: "Launch",
        description:
          "Final QA, go-live, and handoff so Plus Trade could own and grow the presence with confidence.",
      },
    ],
    deliverables: [
      "Full electrical services company website",
      "Service-led information architecture",
      "Brand-aligned visual design system",
      "Trust-focused service presentation",
      "Clear inquiry and contact paths",
      "Responsive experience across devices",
      "Launch support and handoff",
    ],
    gallery: [
      {
        id: "build",
        label: "Build session — shipping Plus Trade alongside OPTIO",
      },
      {
        id: "review",
        label: "Design review — services in light & dark",
      },
      {
        id: "hero",
        label: "Hero polish — dual-screen collaboration",
      },
      {
        id: "focused",
        label: "Focused build — crafting the experience",
      },
    ],
    seoTitle: "Plus Trade — Collaboration | OPTIO",
    seoDescription:
      "How OPTIO partnered with Plus Trade from idea to completion — an electrical services company site with clear offers, trust signals, and a path to request work.",
  },
  {
    slug: "harku",
    name: "HARKU",
    tag: "Services",
    url: "https://harku-ks.com",
    coverImage: "/images/projects/harku.png",
    summary:
      "A professional services presence for heating, climate, ventilation, and water installation — built for Kosovo homes and businesses.",
    challenge:
      "HARKU needed a digital home that matched the reliability of their craft. Service offerings were strong in the field, but online the brand lacked a clear story, structured service presentation, and a confident path for homeowners and businesses to request work.",
    approach:
      "We partnered from first conversation through launch — clarifying positioning, shaping a service-led information architecture, designing a calm professional interface, and shipping a site that makes trust and next steps obvious.",
    outcome:
      "HARKU launched with a polished services site that communicates expertise at a glance, organizes HVAC and water offerings clearly, and gives visitors a direct route to get in touch — a foundation ready to grow with the brand.",
    process: [
      {
        title: "Discovery",
        description:
          "Workshops and interviews to map services, audiences, and what “professional” means for installation work in Kosovo.",
      },
      {
        title: "Strategy",
        description:
          "Defined brand voice, service hierarchy, and conversion goals so every page supports trust and inquiries.",
      },
      {
        title: "Design",
        description:
          "Visual system and layouts that feel solid and approachable — clear typography, service clarity, and room to breathe.",
      },
      {
        title: "Build",
        description:
          "Implemented a responsive, fast site with structured content, contact paths, and production-ready polish.",
      },
      {
        title: "Launch",
        description:
          "Final QA, go-live, and handoff so HARKU could own and grow the presence with confidence.",
      },
    ],
    deliverables: [
      "Full professional services website",
      "Service-led information architecture",
      "Brand-aligned visual design system",
      "Clear inquiry and contact paths",
      "Responsive experience across devices",
      "Launch support and handoff",
    ],
    gallery: [
      {
        id: "build",
        label: "Build session — shipping HARKU alongside OPTIO",
        src: "/images/collab/harku/build-session.png",
      },
      {
        id: "review",
        label: "Design review — services in light & dark",
        src: "/images/collab/harku/design-review.png",
      },
      {
        id: "hero",
        label: "Hero polish — dual-screen collaboration",
        src: "/images/collab/harku/hero-polish.png",
      },
      {
        id: "focused",
        label: "Focused build — crafting the experience",
        src: "/images/collab/harku/focused-build.png",
      },
    ],
    seoTitle: "HARKU — Collaboration | OPTIO",
    seoDescription:
      "How OPTIO partnered with HARKU from idea to completion — a professional heating, climate, ventilation, and water services site for Kosovo.",
  },
];

export function getCollabBySlug(slug: string): Collab | undefined {
  return collabs.find((c) => c.slug === slug);
}

export function getCollabSlugs(): string[] {
  return collabs.map((c) => c.slug);
}
