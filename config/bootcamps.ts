export type BootcampPhase = {
  title: string;
  weeksLabel: string;
  description: string;
  topics: string[];
};

export type BootcampFaq = {
  question: string;
  answer: string;
};

export type BootcampOutcome = {
  title: string;
  description: string;
};

export type Bootcamp = {
  year: string;
  brandName: string;
  cohortLabel: string;
  statusLabel: string;
  seatsLabel: string;
  priceLabel: string;
  headline: string;
  summary: string;
  promise: string;
  applyCta: string;
  curriculumCta: string;
  outcomesEyebrow: string;
  outcomesTitle: string;
  outcomes: BootcampOutcome[];
  trainerEyebrow: string;
  trainerTitle: string;
  trainer: {
    name: string;
    role: string;
    bio: string;
    linkedIn: string;
    initials: string;
  };
  stackEyebrow: string;
  stackTitle: string;
  stackDescription: string;
  stack: { name: string; description: string }[];
  curriculumEyebrow: string;
  curriculumTitle: string;
  curriculumDescription: string;
  phases: BootcampPhase[];
  formatEyebrow: string;
  formatTitle: string;
  formatItems: { title: string; description: string }[];
  internshipEyebrow: string;
  internshipTitle: string;
  internshipBody: string;
  internshipHighlights: string[];
  faqEyebrow: string;
  faqTitle: string;
  faqs: BootcampFaq[];
  applyBandEyebrow: string;
  applyBandTitle: string;
  applyBandBody: string;
  applyBandCta: string;
  seoTitle: string;
  seoDescription: string;
  applyUrl: string;
  gameUi: {
    season: string;
    hudSeats: string;
    hudWeeks: string;
    hudQuests: string;
    hudReward: string;
    xpLabel: string;
    xpLevels: string;
    startRun: string;
    viewQuests: string;
    achievements: string;
    partyLead: string;
    loadout: string;
    questBoard: string;
    quest: string;
    xpGain: string;
    powerUps: string;
    legendary: string;
    joinRaid: string;
    missionClear: string;
  };
};

const INSTAGRAM_URL = "https://www.instagram.com/optio.digital/";
const TRAINER_LINKEDIN = "https://www.linkedin.com/in/enesshala/";

const bootcampEn: Bootcamp = {
  year: "2026",
  brandName: "OPTIO Bootcamp",
  cohortLabel: "Oct – 31 Dec 2026",
  statusLabel: "Applications open",
  seatsLabel: "20 seats",
  priceLabel: "Contact us",
  headline: "Guaranteed paid internship for the top 3 graduates.",
  summary:
    "A 3-month full-stack bootcamp — October through 31 December — from the beginning to a real product with React, Express, and PostgreSQL. Led by a senior engineer. Only 20 seats in this first cohort.",
  promise:
    "Ship a real app step by step. Finish strong and one of three paid Optio Digital internships is yours.",
  applyCta: "Apply on Instagram",
  curriculumCta: "See the curriculum",
  outcomesEyebrow: "Outcomes",
  outcomesTitle: "What you will ship",
  outcomes: [
    {
      title: "A real full-stack app",
      description:
        "Not a toy tutorial — a product with auth, data, APIs, and a polished UI you can demo with confidence.",
    },
    {
      title: "A stack that gets hired",
      description:
        "React on the front, Express on the API, PostgreSQL for data — the same tools modern teams ship with.",
    },
    {
      title: "3 guaranteed Optio internships",
      description:
        "The top 3 graduates get a paid internship at Optio Digital — real projects, real mentorship, earned by performance.",
    },
  ],
  trainerEyebrow: "Trainer",
  trainerTitle: "Learn from someone who ships",
  trainer: {
    name: "Enes Shala",
    role: "Senior Software Engineer · Lead Trainer",
    bio: "Enes leads the OPTIO Bootcamp with the same bar he brings to production work — clear fundamentals, clean architecture, and shipping discipline. You will build week by week under senior guidance, not alone in a video course.",
    linkedIn: TRAINER_LINKEDIN,
    initials: "ES",
  },
  stackEyebrow: "Stack",
  stackTitle: "The tools you will master",
  stackDescription:
    "One focused stack. Deep enough to be dangerous — practical enough to ship.",
  stack: [
    {
      name: "React",
      description: "Modern UI, components, state, and production-ready frontends.",
    },
    {
      name: "Express.js",
      description: "REST APIs, middleware, auth patterns, and server craft.",
    },
    {
      name: "PostgreSQL",
      description: "Relational modeling, queries, and data you can trust.",
    },
  ],
  curriculumEyebrow: "Curriculum",
  curriculumTitle: "3 months. Six phases. One product.",
  curriculumDescription:
    "From October to 31 December we go from the beginning to a complete full-stack project — paced week by week so every concept sticks. The final stretch brings AI vibe coding into how you ship.",
  phases: [
    {
      title: "Foundations",
      weeksLabel: "Weeks 1–2",
      description:
        "Programming mindset, the web platform, Git, and the habits that keep a project alive.",
      topics: [
        "JavaScript & TypeScript essentials",
        "How the web works (HTTP, browsers, APIs)",
        "Git, GitHub, and clean collaboration",
        "Dev environment & project structure",
      ],
    },
    {
      title: "Frontend",
      weeksLabel: "Weeks 3–4",
      description:
        "Build interfaces people actually use — React components, state, and app structure.",
      topics: [
        "React components & composition",
        "Hooks, state, and data fetching",
        "Forms, validation, and UX polish",
        "Responsive layouts & design systems basics",
      ],
    },
    {
      title: "Backend",
      weeksLabel: "Weeks 5–6",
      description:
        "Stand up an Express API with clear routes, middleware, and authentication patterns.",
      topics: [
        "Express architecture & routing",
        "Middleware, errors, and validation",
        "Auth fundamentals (sessions / JWT patterns)",
        "API design for real clients",
      ],
    },
    {
      title: "Database",
      weeksLabel: "Weeks 7–8",
      description:
        "Model data properly in PostgreSQL and connect it cleanly to your API.",
      topics: [
        "Relational modeling & migrations",
        "SQL queries that scale with clarity",
        "Connecting Express ↔ PostgreSQL",
        "Data integrity and security basics",
      ],
    },
    {
      title: "Full-stack project",
      weeksLabel: "Weeks 9–10",
      description:
        "Wire the stack into one product: React front, Express API, PostgreSQL data — end to end.",
      topics: [
        "Feature planning & milestones",
        "Integrating UI ↔ API ↔ DB",
        "Auth flows across the stack",
        "Weekly demos and iteration",
      ],
    },
    {
      title: "AI vibe coding & career",
      weeksLabel: "Weeks 11–12",
      description:
        "Ship faster with AI-assisted coding, polish the product, and compete for one of three guaranteed Optio internships — wrapping by 31 December.",
      topics: [
        "AI vibe coding — prompts, review, and shipping with copilots",
        "Performance, testing mindset, and QA",
        "Deploy, portfolio case study & demo day",
        "Top 3 selection for paid internship at Optio Digital",
      ],
    },
  ],
  formatEyebrow: "Format",
  formatTitle: "How the weeks work",
  formatItems: [
    {
      title: "Project-first",
      description:
        "Every phase feeds the same product. You leave with something you built — not a folder of disconnected exercises.",
    },
    {
      title: "Senior mentorship",
      description:
        "Enes reviews direction, unblocks you, and keeps the bar at professional quality.",
    },
    {
      title: "Weekly cadence",
      description:
        "Clear weekly goals from October through demo day by 31 December — three focused months, no fluff.",
    },
  ],
  internshipEyebrow: "Internship",
  internshipTitle: "3 paid internships — guaranteed",
  internshipBody:
    "The top 3 graduates of OPTIO Bootcamp 2026 are guaranteed a paid internship at Optio Digital. You earn it with craft, consistency, and ownership — then work on real projects beside the team that trained you. Twenty seats. Three offers. Compete.",
  internshipHighlights: [
    "Guaranteed paid internship for the top 3",
    "Real projects with Optio Digital",
    "Mentorship that continues after the bootcamp",
    "Only 20 seats in the first cohort",
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Before you apply",
  faqs: [
    {
      question: "Who is this for?",
      answer:
        "Motivated beginners and early juniors who want a structured path to shipping a real full-stack app — not people looking for a passive video course.",
    },
    {
      question: "What are the prerequisites?",
      answer:
        "Curiosity, commitment, and a laptop. We start from the beginning; comfort with computers and willingness to practice weekly matters more than prior degrees.",
    },
    {
      question: "How long does it run?",
      answer:
        "Three months total — from October through 31 December 2026. Six phases, twelve weeks, one full-stack product.",
    },
    {
      question: "What language is the bootcamp in?",
      answer:
        "Sessions and materials are designed for Kosovo and the region — expect clear instruction with practical English for code and tooling.",
    },
    {
      question: "How many seats are there?",
      answer:
        "20 seats for this first bootcamp — so mentorship stays real. When seats fill, applications close for the October–December 2026 cohort.",
    },
    {
      question: "How do I apply?",
      answer:
        "DM us on Instagram @optio.digital with a short note about why you want in. We will follow up with next steps.",
    },
    {
      question: "Is the internship guaranteed?",
      answer:
        "Yes — for the top 3 graduates. Performance across the three months decides who gets a paid internship at Optio Digital. Everyone else still leaves with a real full-stack project and AI-assisted shipping skills.",
    },
    {
      question: "How much does it cost?",
      answer:
        "Reach out on Instagram for current pricing and payment details for the October–December 2026 cohort.",
    },
  ],
  applyBandEyebrow: "Apply",
  applyBandTitle: "20 seats. 3 internships. Apply now.",
  applyBandBody:
    "Message Optio on Instagram. Tell us who you are and why you want OPTIO Bootcamp 2026 — we will take it from there.",
  applyBandCta: "DM @optio.digital",
  seoTitle:
    "OPTIO Bootcamp 2026 — React, Express & PostgreSQL | 3 Guaranteed Internships",
  seoDescription:
    "3-month OPTIO Bootcamp (October–31 December 2026) led by senior engineer Enes Shala. Build a real full-stack project with React, Express, and PostgreSQL. Top 3 graduates get a guaranteed paid internship at Optio Digital. Only 20 seats.",
  applyUrl: INSTAGRAM_URL,
  gameUi: {
    season: "Season 2026 · Oct–Dec",
    hudSeats: "20 seats",
    hudWeeks: "3 months",
    hudQuests: "6 quests",
    hudReward: "×3 internships",
    xpLabel: "Campaign progress",
    xpLevels: "Lv. 0 → 12",
    startRun: "Start your run",
    viewQuests: "View quests",
    achievements: "Unlockables",
    partyLead: "Party lead",
    loadout: "Your loadout",
    questBoard: "Quest board",
    quest: "Quest",
    xpGain: "XP",
    powerUps: "Power-ups",
    legendary: "Legendary reward",
    joinRaid: "Join the raid",
    missionClear: "Mission",
  },
};

const bootcampSq: Bootcamp = {
  year: "2026",
  brandName: "OPTIO Bootcamp",
  cohortLabel: "Tetor – 31 Dhjetor 2026",
  statusLabel: "Aplikimet janë hapur",
  seatsLabel: "20 vende",
  priceLabel: "Na kontaktoni",
  headline: "Tre studentët më të mirë fitojnë praktikë të paguar te Optio — e garantuar.",
  summary:
    "Bootcamp full-stack 3-mujor — nga tetori deri më 31 dhjetor — nga baza deri te një aplikacion i vërtetë me React, Express dhe PostgreSQL. I udhëhequr nga një inxhinier senior. Vetëm 20 vende në grupin e parë.",
  promise:
    "Ndërto hap pas hapi. Nëse je ndër tre më të mirët, praktika e paguar te Optio Digital është e jotja.",
  applyCta: "Apliko në Instagram",
  curriculumCta: "Shiko programin",
  outcomesEyebrow: "Çfarë fiton",
  outcomesTitle: "Çfarë del nga bootcamp-i",
  outcomes: [
    {
      title: "Një aplikacion real full-stack",
      description:
        "Jo ushtrime të shkëputura — një produkt me autentifikim, të dhëna, API dhe ndërfaqe të pastër që mund ta tregosh me krenari.",
    },
    {
      title: "Teknologji që kërkohen në treg",
      description:
        "React për frontend, Express për API, PostgreSQL për të dhëna — stack-u që përdorin ekipet moderne.",
    },
    {
      title: "Tre praktika të garantuara te Optio",
      description:
        "Tre studentët më të mirë fitojnë praktikë të paguar te Optio Digital. Projekte reale, mentorim i vërtetë — e fituar me punë, jo me short.",
    },
  ],
  trainerEyebrow: "Trajneri",
  trainerTitle: "Mëso nga dikush që punon në seriozitet",
  trainer: {
    name: "Enes Shala",
    role: "Inxhinier Softueri Senior · Trajner kryesor",
    bio: "Enes e udhëheq OPTIO Bootcamp me të njëjtin standard që përdor në punë: themele të qarta, arkitekturë e pastër dhe disiplinë. Ndërtoni javë pas jave me udhëzim profesional — jo vetëm me video kursesh.",
    linkedIn: TRAINER_LINKEDIN,
    initials: "ES",
  },
  stackEyebrow: "Teknologjitë",
  stackTitle: "Çfarë do të mësosh",
  stackDescription:
    "Një stack i fokusuar. Thellësi sa duhet për të qenë i gatshëm për treg — praktikë sa duhet për të ndërtuar diçka reale.",
  stack: [
    {
      name: "React",
      description: "Ndërfaqe moderne, komponente, state dhe frontend i gatshëm për përdorim.",
    },
    {
      name: "Express.js",
      description: "API REST, middleware, autentifikim dhe logjikë serveri.",
    },
    {
      name: "PostgreSQL",
      description: "Modelim i të dhënave, query dhe baza të besueshme.",
    },
  ],
  curriculumEyebrow: "Programi",
  curriculumTitle: "3 muaj. Gjashtë faza. Një produkt.",
  curriculumDescription:
    "Nga tetori deri më 31 dhjetor fillojmë nga e para dhe mbërrijmë te një projekt i plotë full-stack. Çdo javë ka qëllim të qartë. Në fazën e fundit punojmë edhe me AI vibe coding.",
  phases: [
    {
      title: "Themelet",
      weeksLabel: "Javët 1–2",
      description:
        "Si mendon një programues, si funksionon webi, Git dhe zakonet që e mbajnë gjallë një projekt.",
      topics: [
        "JavaScript dhe TypeScript — bazat",
        "Si funksionon webi (HTTP, shfletuesi, API)",
        "Git, GitHub dhe bashkëpunimi në ekip",
        "Ambienti i zhvillimit dhe struktura e projektit",
      ],
    },
    {
      title: "Frontend",
      weeksLabel: "Javët 3–4",
      description:
        "Ndërtoni ndërfaqe që njerëzit i përdorin me të vërtetë — komponente React, state dhe struktura e aplikacionit.",
      topics: [
        "Komponente React dhe kompozimi",
        "Hooks, state dhe marrja e të dhënave",
        "Forma, validim dhe përvojë e mirë e përdoruesit",
        "Layout responsiv dhe bazat e design system",
      ],
    },
    {
      title: "Backend",
      weeksLabel: "Javët 5–6",
      description:
        "Ndërtoni një API me Express: route të qarta, middleware dhe autentifikim.",
      topics: [
        "Arkitektura Express dhe routing",
        "Middleware, gabimet dhe validimi",
        "Autentifikimi (session / JWT)",
        "Si dizajnohet një API për klientë reale",
      ],
    },
    {
      title: "Baza e të dhënave",
      weeksLabel: "Javët 7–8",
      description:
        "Modeloni të dhënat siç duhet në PostgreSQL dhe lidhini pastër me API-në.",
      topics: [
        "Modelimi i të dhënave dhe migrimet",
        "Query SQL të qarta dhe të qëndrueshme",
        "Lidhja Express ↔ PostgreSQL",
        "Integriteti i të dhënave dhe bazat e sigurisë",
      ],
    },
    {
      title: "Projekti full-stack",
      weeksLabel: "Javët 9–10",
      description:
        "Bashkoni gjithçka në një produkt: React, Express dhe PostgreSQL — nga fillimi deri në fund.",
      topics: [
        "Planifikimi i veçorive dhe fazat e projektit",
        "Integrimi UI ↔ API ↔ baza e të dhënave",
        "Autentifikimi në të gjithë stack-un",
        "Demo javore dhe përmirësim i vazhdueshëm",
      ],
    },
    {
      title: "AI vibe coding dhe karriera",
      weeksLabel: "Javët 11–12",
      description:
        "Punoni më shpejt me ndihmën e AI, përmirësoni produktin dhe konkurroni për një nga tre praktikat e garantuara te Optio — deri më 31 dhjetor.",
      topics: [
        "AI vibe coding — si të shkruash, kontrollosh dhe dorëzosh me copilots",
        "Performanca, testimi dhe kontrolli i cilësisë",
        "Deploy, portfolio dhe dita e demonstrimit",
        "Përzgjedhja e tre studentëve për praktikë të paguar te Optio Digital",
      ],
    },
  ],
  formatEyebrow: "Si funksionon",
  formatTitle: "Si kalojnë javët",
  formatItems: [
    {
      title: "Projekt real që në fillim",
      description:
        "Çdo fazë ushqen të njëjtin produkt. Në fund ke diçka që e ke ndërtuar ti — jo një dosje me ushtrime të shkëputura.",
    },
    {
      title: "Mentorim profesional",
      description:
        "Enes të orienton, të ndihmon kur ngec dhe mban standardin në nivel profesional.",
    },
    {
      title: "Ritëm javor",
      description:
        "Qëllime të qarta çdo javë — nga tetori deri te dita e demonstrimit më 31 dhjetor. Tre muaj të fokusuar, pa mbushës.",
    },
  ],
  internshipEyebrow: "Praktika",
  internshipTitle: "Tre praktika të paguara — të garantuara",
  internshipBody:
    "Tre studentët më të mirë të OPTIO Bootcamp 2026 kanë të garantuar një praktikë të paguar te Optio Digital. E fiton me punë, konsistencë dhe përgjegjësi — pastaj punon në projekte reale pranë ekipit që të ka trajnuar. 20 vende. Tre oferta. Vendin e fiton ti.",
  internshipHighlights: [
    "Praktikë e paguar e garantuar për tre më të mirët",
    "Projekte reale me Optio Digital",
    "Mentorim që vazhdon edhe pas bootcamp-it",
    "Vetëm 20 vende në grupin e parë",
  ],
  faqEyebrow: "Pyetje të shpeshta",
  faqTitle: "Para se të aplikosh",
  faqs: [
    {
      question: "Për kë është ky program?",
      answer:
        "Për fillestarë të motivuar dhe juniorë që duan një rrugë të qartë drejt një aplikacioni real full-stack — jo për ata që kërkojnë vetëm video pa praktikë.",
    },
    {
      question: "Çfarë duhet të di më parë?",
      answer:
        "Kuriozitet, angazhim dhe një laptop. Fillojmë nga e para; më e rëndësishme është të praktikosh çdo javë sesa të kesh diplomë.",
    },
    {
      question: "Sa zgjat?",
      answer:
        "Tre muaj gjithsej — nga tetori deri më 31 dhjetor 2026. Gjashtë faza, dymbëdhjetë javë, një produkt full-stack.",
    },
    {
      question: "Në çfarë gjuhe zhvillohet?",
      answer:
        "Sesionet dhe materialet janë për Kosovën dhe rajonin — shpjegim i qartë, me anglisht praktike kur flasim për kod dhe mjete zhvillimi.",
    },
    {
      question: "Sa vende ka?",
      answer:
        "20 vende për këtë bootcamp të parë, që mentorimi të mbetet i vërtetë. Kur vendet mbushen, aplikimet mbyllen për grupin Tetor–Dhjetor 2026.",
    },
    {
      question: "Si aplikoj?",
      answer:
        "Na shkruaj DM në Instagram @optio.digital me pak fjalë pse do të bëhesh pjesë. Ne të kthejmë përgjigje me hapat e ardhshëm.",
    },
    {
      question: "A garantohet praktika?",
      answer:
        "Po — për tre studentët më të mirë. Si ke punuar gjatë tre muajve vendos kush merr praktikë të paguar te Optio Digital. Të tjerët dalin me projekt real full-stack dhe aftësi për të punuar me AI.",
    },
    {
      question: "Sa kushton?",
      answer:
        "Na shkruaj në Instagram për çmimin dhe detajet e pagesës për grupin Tetor–Dhjetor 2026.",
    },
  ],
  applyBandEyebrow: "Apliko",
  applyBandTitle: "20 vende. Tre praktika. Apliko tani.",
  applyBandBody:
    "Shkruaji Optio në Instagram. Thuaj kush je dhe pse do OPTIO Bootcamp 2026 — ne e vazhdojmë nga aty.",
  applyBandCta: "DM @optio.digital",
  seoTitle:
    "OPTIO Bootcamp 2026 — React, Express & PostgreSQL | 3 Praktika të Garantuar",
  seoDescription:
    "OPTIO Bootcamp 3-mujor (Tetor–31 Dhjetor 2026) me trajnerin Enes Shala. Ndërto një projekt real full-stack me React, Express dhe PostgreSQL. Tre studentët më të mirë fitojnë praktikë të paguar të garantuar te Optio Digital. Vetëm 20 vende.",
  applyUrl: INSTAGRAM_URL,
  gameUi: {
    season: "Sezoni 2026 · Tet–Dhj",
    hudSeats: "20 vende",
    hudWeeks: "3 muaj",
    hudQuests: "6 quest-e",
    hudReward: "×3 praktika",
    xpLabel: "Progresi i kampanjës",
    xpLevels: "Lv. 0 → 12",
    startRun: "Fillo run-in",
    viewQuests: "Shiko quest-et",
    achievements: "Çelësat e suksesit",
    partyLead: "Udhëheqësi i ekipit",
    loadout: "Loadout-i yt",
    questBoard: "Tabela e quest-eve",
    quest: "Quest",
    xpGain: "XP",
    powerUps: "Power-up-e",
    legendary: "Shpërblimi legjendar",
    joinRaid: "Hyr në raid",
    missionClear: "Mision",
  },
};

const bootcampsByLocale: Record<string, Bootcamp> = {
  en: bootcampEn,
  sq: bootcampSq,
};

export function getBootcamp(year: string, lang: string): Bootcamp | undefined {
  const localeBootcamp = bootcampsByLocale[lang] || bootcampEn;
  if (localeBootcamp.year !== year) return undefined;
  return localeBootcamp;
}

export function getBootcampYears(): string[] {
  return [bootcampEn.year];
}
