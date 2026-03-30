const optioFaqs = [
  {
    title: "What does OPTIO do?",
    content:
      "OPTIO is a digital agency. We build websites and web apps, custom software, brand identity, and social media strategy — from idea through execution — for startups and businesses worldwide.",
  },
  {
    title: "Who do you work with?",
    content:
      "We work with founders, marketing leads, and growing teams that want clean design, clear strategy, and shipping speed — whether you're local or fully remote across time zones.",
  },
  {
    title: "How do projects usually start?",
    content:
      "Most engagements begin with a short discovery: your goals, audience, timeline, and budget. We then propose a scoped roadmap (milestones, deliverables, and communication rhythm) before any heavy build work.",
  },
  {
    title: "How long does a typical website take?",
    content:
      "Marketing sites often land in a few weeks depending on content readiness and complexity. Web apps and custom software vary more; we'll give you a realistic range after discovery.",
  },
  {
    title: "Do you work with international clients?",
    content:
      "Yes. We're set up for async collaboration, written specs, and scheduled calls so we can partner with teams globally.",
  },
  {
    title: "How much does a project cost?",
    content:
      "Every scope is different. We price by outcomes and milestones — not vague hourly black boxes. Share your brief and we'll respond with options that fit your stage.",
  },
  {
    title: "What's included in brand identity work?",
    content:
      "Typically logo concepts, color and type direction, and practical guidelines so your brand looks consistent on your site, social, and print-ready assets when needed.",
  },
  {
    title: "How do I get in touch?",
    content:
      "Message us on Instagram @optio.digital or email hello@optio.digital — tell us what you're building and we'll follow up quickly.",
  },
];

export const FAQS_EN = optioFaqs;

export const FAQS_ZH = optioFaqs;

export const FAQS_AR = optioFaqs;

export const FAQS_DE = optioFaqs;

export const FAQS_FR = optioFaqs;

export const FAQS_SV = optioFaqs;

interface FAQSCollection {
  [key: `FAQS_${string}`]: {
    title: string;
    content: string;
  }[];
}
export const ALL_FAQS: FAQSCollection = {
  FAQS_EN,
  FAQS_ZH,
  FAQS_AR,
  FAQS_DE,
  FAQS_FR,
  FAQS_SV,
};
