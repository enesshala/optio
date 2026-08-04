const optioFaqs = [
  {
    title: "What does OPTIO do?",
    content:
      "OPTIO is a digital agency based in Kosovo. We build websites and web apps, custom software, brand identity, and social media strategy — from idea through execution — for startups and businesses in Kosovo and worldwide.",
  },
  {
    title: "Who do you work with?",
    content:
      "We work with founders, marketing leads, and growing teams that want clean design, clear strategy, and shipping speed — whether you're in Prishtina, elsewhere in Kosovo, or fully remote across time zones.",
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
      "Yes. We're set up for async collaboration, written specs, and scheduled calls so we can partner with teams in Kosovo and globally.",
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
      "Message us on Instagram @optio.digital or email info@optio-digital.com — tell us what you're building and we'll follow up quickly.",
  },
];

const optioFaqsSq = [
  {
    title: "Çfarë bën OPTIO?",
    content:
      "OPTIO është agjenci dixhitale me bazë në Kosovë. Ndërtojmë website dhe web app, software të personalizuar, identitet marke dhe strategji në rrjetet sociale — nga idea te ekzekutimi — për startupe dhe biznese në Kosovë e botërisht.",
  },
  {
    title: "Me kë punoni?",
    content:
      "Punojmë me themelues, drejtues marketingu dhe ekipe në rritje që duan dizajn të pastër, strategji të qartë dhe shpejtësi dorëzimi — në Prishtinë, kudo në Kosovë, ose plotësisht në distancë.",
  },
  {
    title: "Si nisin zakonisht projektet?",
    content:
      "Shumica e angazhimeve fillojnë me një zbulim të shkurtër: qëllimet, audienca, afatet dhe buxheti. Pastaj propozojmë një udhërrëfyes me fusha të qarta (milestone, dorëzime dhe ritëm komunikimi) para ndërtimit të rëndë.",
  },
  {
    title: "Sa zgjat tipikisht një website?",
    content:
      "Faqet e marketingut shpesh përfundojnë brenda disa javësh, në varësi të gatishmërisë së përmbajtjes dhe kompleksitetit. Web app dhe software i personalizuar ndryshojnë më shumë; pas zbulimit ju japim një vlerësim real.",
  },
  {
    title: "A punoni me klientë ndërkombëtarë?",
    content:
      "Po. Jemi të përgatitur për bashkëpunim asinkron, specifikime të shkruara dhe thirrje të planifikuara — me ekipe në Kosovë dhe kudo në botë.",
  },
  {
    title: "Sa kushton një projekt?",
    content:
      "Çdo fushë është e ndryshme. Çmimet i bazojmë te rezultatet dhe milestone-t — jo te kutitë e errëta me orë. Na dërgoni briefing-un dhe përgjigjemi me opsione që i përshtaten fazës suaj.",
  },
  {
    title: "Çfarë përfshihet te identiteti i markës?",
    content:
      "Zakonisht koncepte logoje, drejtim ngjyrash dhe tipografie, plus udhëzues praktikë që marka të duket e qëndrueshme në web, social dhe materiale të printueshme kur duhet.",
  },
  {
    title: "Si të kontaktoj?",
    content:
      "Na shkruani në Instagram @optio.digital ose email info@optio-digital.com — na tregoni çfarë po ndërtoni dhe kthehemi shpejt.",
  },
];

export const FAQS_EN = optioFaqs;

export const FAQS_SQ = optioFaqsSq;

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
  FAQS_SQ,
  FAQS_ZH,
  FAQS_AR,
  FAQS_DE,
  FAQS_FR,
  FAQS_SV,
};
