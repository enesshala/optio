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
        id: "workshop",
        label: "Discovery workshop — office collaboration",
      },
      {
        id: "review",
        label: "Design review — office collaboration",
      },
      {
        id: "build",
        label: "Build session — office collaboration",
      },
      {
        id: "launch",
        label: "Launch moment — office collaboration",
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
