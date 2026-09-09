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
  discountPercent: string;
  discountLabel: string;
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
    spawnLabel: string;
  };
};

const INSTAGRAM_URL = "https://www.instagram.com/optio.digital/";
const TRAINER_LINKEDIN = "https://www.linkedin.com/in/enesshala/";

const bootcampEn: Bootcamp = {
  year: "2026",
  brandName: "OPTIO Bootcamp",
  cohortLabel: "Oct – 31 Dec 2026",
  statusLabel: "Applications open",
  seatsLabel: "25 seats",
  priceLabel: "Contact us",
  discountPercent: "−50%",
  discountLabel: "Launch offer",
  headline: "Guaranteed paid internship for the top 3 graduates.",
  summary:
    "A 3-month full-stack bootcamp — October through 31 December — from the beginning to a real product with React, Express, and PostgreSQL. Led by a senior engineer. Only 25 seats in this first cohort.",
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
    "The top 3 graduates of OPTIO Bootcamp 2026 are guaranteed a paid internship at Optio Digital. You earn it with craft, consistency, and ownership — then work on real projects beside the team that trained you. Twenty-five seats. Three offers. Compete.",
  internshipHighlights: [
    "Guaranteed paid internship for the top 3",
    "Real projects with Optio Digital",
    "Mentorship that continues after the bootcamp",
    "Only 25 seats in the first cohort",
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
        "25 seats for this first bootcamp — so mentorship stays real. When seats fill, applications close for the October–December 2026 cohort.",
    },
    {
      question: "How do I apply?",
      answer:
        "Fill out the application form on this page. Tell us who you are and why you want OPTIO Bootcamp 2026 — we will follow up with next steps. You can also DM us on Instagram if you prefer.",
    },
    {
      question: "Is the internship guaranteed?",
      answer:
        "Yes — for the top 3 graduates. Performance across the three months decides who gets a paid internship at Optio Digital. Everyone else still leaves with a real full-stack project and AI-assisted shipping skills.",
    },
    {
      question: "How much does it cost?",
      answer:
        "The bootcamp is not free — this first cohort is 50% off. Submit the application form and we will follow up with pricing and payment details for the October–December 2026 cohort.",
    },
  ],
  applyBandEyebrow: "Apply",
  applyBandTitle: "25 seats. 3 internships. Apply now.",
  applyBandBody:
    "Fill out the form below. Tell us who you are and why you want OPTIO Bootcamp 2026 — we will take it from there.",
  applyBandCta: "Submit application",
  seoTitle:
    "OPTIO Bootcamp 2026 — React, Express & PostgreSQL | 3 Guaranteed Internships",
  seoDescription:
    "3-month OPTIO Bootcamp (October–31 December 2026) led by senior engineer Enes Shala. Build a real full-stack project with React, Express, and PostgreSQL. Top 3 graduates get a guaranteed paid internship at Optio Digital. Only 25 seats.",
  applyUrl: INSTAGRAM_URL,
  gameUi: {
    season: "Season 2026 · Oct–Dec",
    hudSeats: "25 seats",
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
    spawnLabel: "Spawning…",
  },
};

const bootcampSq: Bootcamp = {
  year: "2026",
  brandName: "OPTIO Bootcamp",
  cohortLabel: "Tetor – 31 Dhjetor 2026",
  statusLabel: "Aplikimet janë hapur",
  seatsLabel: "25 vende",
  priceLabel: "Na kontaktoni",
  discountPercent: "−50%",
  discountLabel: "Ofertë e hapjes",
  headline: "Tre studentët më të mirë fitojnë praktikë të paguar te Optio — e garantuar.",
  summary:
    "Bootcamp full-stack 3-mujor — nga tetori deri më 31 dhjetor — nga baza deri te një aplikacion i vërtetë me React, Express dhe PostgreSQL. I udhëhequr nga një inxhinier senior. Vetëm 25 vende në grupin e parë.",
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
    "Tre studentët më të mirë të OPTIO Bootcamp 2026 kanë të garantuar një praktikë të paguar te Optio Digital. E fiton me punë, konsistencë dhe përgjegjësi — pastaj punon në projekte reale pranë ekipit që të ka trajnuar. 25 vende. Tre oferta. Vendin e fiton ti.",
  internshipHighlights: [
    "Praktikë e paguar e garantuar për tre më të mirët",
    "Projekte reale me Optio Digital",
    "Mentorim që vazhdon edhe pas bootcamp-it",
    "Vetëm 25 vende në grupin e parë",
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
        "25 vende për këtë bootcamp të parë, që mentorimi të mbetet i vërtetë. Kur vendet mbushen, aplikimet mbyllen për grupin Tetor–Dhjetor 2026.",
    },
    {
      question: "Si aplikoj?",
      answer:
        "Plotëso formularin e aplikimit në këtë faqe. Na thuaj kush je dhe pse do OPTIO Bootcamp 2026 — ne të kthejmë përgjigje me hapat e ardhshëm. Mund të na shkruash edhe në Instagram nëse preferon.",
    },
    {
      question: "A garantohet praktika?",
      answer:
        "Po — për tre studentët më të mirë. Si ke punuar gjatë tre muajve vendos kush merr praktikë të paguar te Optio Digital. Të tjerët dalin me projekt real full-stack dhe aftësi për të punuar me AI.",
    },
    {
      question: "Sa kushton?",
      answer:
        "Bootcamp-i nuk është falas — grupi i parë ka 50% zbritje. Dërgo formularin e aplikimit në këtë faqe dhe do të kthehemi me çmimin dhe detajet e pagesës për grupin Tetor–Dhjetor 2026.",
    },
  ],
  applyBandEyebrow: "Apliko",
  applyBandTitle: "25 vende. Tre praktika. Apliko tani.",
  applyBandBody:
    "Plotëso formularin më poshtë. Na thuaj kush je dhe pse do OPTIO Bootcamp 2026 — ne e vazhdojmë nga aty.",
  applyBandCta: "Dërgo aplikimin",
  seoTitle:
    "OPTIO Bootcamp 2026 — React, Express & PostgreSQL | 3 Praktika të Garantuar",
  seoDescription:
    "OPTIO Bootcamp 3-mujor (Tetor–31 Dhjetor 2026) me trajnerin Enes Shala. Ndërto një projekt real full-stack me React, Express dhe PostgreSQL. Tre studentët më të mirë fitojnë praktikë të paguar të garantuar te Optio Digital. Vetëm 25 vende.",
  applyUrl: INSTAGRAM_URL,
  gameUi: {
    season: "Sezoni 2026 · Tet–Dhj",
    hudSeats: "25 vende",
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
    spawnLabel: "Duke u ngarkuar…",
  },
};

const bootcampDe: Bootcamp = {
  year: "2026",
  brandName: "OPTIO Bootcamp",
  cohortLabel: "Okt – 31 Dez 2026",
  statusLabel: "Bewerbungen offen",
  seatsLabel: "25 Plätze",
  priceLabel: "Kontaktiere uns",
  discountPercent: "−50%",
  discountLabel: "Startangebot",
  headline: "Garantiertes bezahltes Praktikum für die Top 3 Absolventen.",
  summary:
    "Ein 3-monatiges Full-Stack-Bootcamp — Oktober bis 31. Dezember — vom Einstieg bis zu einem echten Produkt mit React, Express und PostgreSQL. Geleitet von einem Senior Engineer. Nur 25 Plätze in der ersten Kohorte.",
  promise:
    "Baue Schritt für Schritt eine echte App. Schließe stark ab — und eines von drei bezahlten Optio-Digital-Praktika gehört dir.",
  applyCta: "Auf Instagram bewerben",
  curriculumCta: "Curriculum ansehen",
  outcomesEyebrow: "Ergebnisse",
  outcomesTitle: "Was du liefern wirst",
  outcomes: [
    {
      title: "Eine echte Full-Stack-App",
      description:
        "Kein Spielzeug-Tutorial — ein Produkt mit Auth, Daten, APIs und einer polierten UI, die du selbstbewusst zeigen kannst.",
    },
    {
      title: "Ein Stack, der Jobs bringt",
      description:
        "React im Frontend, Express für die API, PostgreSQL für Daten — dieselben Tools, mit denen moderne Teams shippen.",
    },
    {
      title: "3 garantierte Optio-Praktika",
      description:
        "Die Top-3-Absolventen bekommen ein bezahltes Praktikum bei Optio Digital — echte Projekte, echtes Mentoring, verdient durch Leistung.",
    },
  ],
  trainerEyebrow: "Trainer",
  trainerTitle: "Lerne von jemandem, der liefert",
  trainer: {
    name: "Enes Shala",
    role: "Senior Software Engineer · Lead Trainer",
    bio: "Enes leitet das OPTIO Bootcamp mit demselben Anspruch wie in der Produktion — klare Grundlagen, saubere Architektur und Lieferdisziplin. Du baust Woche für Woche unter Senior-Guidance — nicht allein in einem Videokurs.",
    linkedIn: TRAINER_LINKEDIN,
    initials: "ES",
  },
  stackEyebrow: "Stack",
  stackTitle: "Die Tools, die du meistern wirst",
  stackDescription:
    "Ein fokussierter Stack. Tief genug, um stark zu sein — praktisch genug, um zu liefern.",
  stack: [
    {
      name: "React",
      description: "Moderne UI, Komponenten, State und produktionsreife Frontends.",
    },
    {
      name: "Express.js",
      description: "REST-APIs, Middleware, Auth-Muster und Server-Handwerk.",
    },
    {
      name: "PostgreSQL",
      description: "Relationales Modellieren, Queries und Daten, denen du vertrauen kannst.",
    },
  ],
  curriculumEyebrow: "Curriculum",
  curriculumTitle: "3 Monate. Sechs Phasen. Ein Produkt.",
  curriculumDescription:
    "Von Oktober bis 31. Dezember gehen wir vom Anfang bis zu einem kompletten Full-Stack-Projekt — Woche für Woche, damit jedes Konzept sitzt. Zum Schluss kommt AI vibe coding dazu.",
  phases: [
    {
      title: "Grundlagen",
      weeksLabel: "Wochen 1–2",
      description:
        "Programmier-Mindset, die Web-Plattform, Git und die Gewohnheiten, die ein Projekt am Leben halten.",
      topics: [
        "JavaScript- & TypeScript-Grundlagen",
        "Wie das Web funktioniert (HTTP, Browser, APIs)",
        "Git, GitHub und saubere Zusammenarbeit",
        "Dev-Umgebung & Projektstruktur",
      ],
    },
    {
      title: "Frontend",
      weeksLabel: "Wochen 3–4",
      description:
        "Baue Interfaces, die Menschen wirklich nutzen — React-Komponenten, State und App-Struktur.",
      topics: [
        "React-Komponenten & Komposition",
        "Hooks, State und Datenabruf",
        "Formulare, Validierung und UX-Feinschliff",
        "Responsive Layouts & Design-System-Basics",
      ],
    },
    {
      title: "Backend",
      weeksLabel: "Wochen 5–6",
      description:
        "Stelle eine Express-API mit klaren Routes, Middleware und Authentifizierung auf.",
      topics: [
        "Express-Architektur & Routing",
        "Middleware, Fehler und Validierung",
        "Auth-Grundlagen (Sessions / JWT)",
        "API-Design für echte Clients",
      ],
    },
    {
      title: "Datenbank",
      weeksLabel: "Wochen 7–8",
      description:
        "Modelliere Daten richtig in PostgreSQL und verbinde sie sauber mit der API.",
      topics: [
        "Relationales Modellieren & Migrationen",
        "SQL-Queries, die klar skalieren",
        "Express ↔ PostgreSQL verbinden",
        "Datenintegrität und Sicherheitsbasics",
      ],
    },
    {
      title: "Full-Stack-Projekt",
      weeksLabel: "Wochen 9–10",
      description:
        "Verbinde den Stack zu einem Produkt: React-Frontend, Express-API, PostgreSQL — Ende zu Ende.",
      topics: [
        "Feature-Planung & Meilensteine",
        "UI ↔ API ↔ DB integrieren",
        "Auth-Flows über den Stack",
        "Wöchentliche Demos und Iteration",
      ],
    },
    {
      title: "AI vibe coding & Karriere",
      weeksLabel: "Wochen 11–12",
      description:
        "Shippe schneller mit KI-unterstütztem Coding, poliere das Produkt und konkurriere um eines von drei garantierten Optio-Praktika — Abschluss bis 31. Dezember.",
      topics: [
        "AI vibe coding — Prompten, Review und Shipping mit Copilots",
        "Performance, Testing-Mindset und QA",
        "Deploy, Portfolio-Case-Study & Demo Day",
        "Top-3-Auswahl für bezahltes Praktikum bei Optio Digital",
      ],
    },
  ],
  formatEyebrow: "Format",
  formatTitle: "So laufen die Wochen",
  formatItems: [
    {
      title: "Projekt zuerst",
      description:
        "Jede Phase speist dasselbe Produkt. Du gehst mit etwas, das du gebaut hast — nicht mit einem Ordner isolierter Übungen.",
    },
    {
      title: "Senior-Mentoring",
      description:
        "Enes gibt Richtung, hilft bei Blockern und hält den Qualitätsstandard professionell.",
    },
    {
      title: "Wöchentlicher Rhythmus",
      description:
        "Klare Wochenziele von Oktober bis Demo Day am 31. Dezember — drei fokussierte Monate, kein Füllstoff.",
    },
  ],
  internshipEyebrow: "Praktikum",
  internshipTitle: "3 bezahlte Praktika — garantiert",
  internshipBody:
    "Die Top-3-Absolventen des OPTIO Bootcamp 2026 erhalten ein garantiertes bezahltes Praktikum bei Optio Digital. Verdient durch Handwerk, Konstanz und Ownership — danach arbeitest du an echten Projekten neben dem Team, das dich ausgebildet hat. Fünfundzwanzig Plätze. Drei Angebote. Trete an.",
  internshipHighlights: [
    "Garantiertes bezahltes Praktikum für die Top 3",
    "Echte Projekte mit Optio Digital",
    "Mentoring, das nach dem Bootcamp weitergeht",
    "Nur 25 Plätze in der ersten Kohorte",
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Bevor du dich bewirbst",
  faqs: [
    {
      question: "Für wen ist das?",
      answer:
        "Für motivierte Einsteiger und frühe Juniors, die einen klaren Weg zu einer echten Full-Stack-App wollen — nicht für Leute, die nur einen passiven Videokurs suchen.",
    },
    {
      question: "Welche Voraussetzungen gibt es?",
      answer:
        "Neugier, Commitment und ein Laptop. Wir starten von vorne; Übung jede Woche zählt mehr als Abschlüsse.",
    },
    {
      question: "Wie lange dauert es?",
      answer:
        "Drei Monate insgesamt — von Oktober bis 31. Dezember 2026. Sechs Phasen, zwölf Wochen, ein Full-Stack-Produkt.",
    },
    {
      question: "In welcher Sprache läuft das Bootcamp?",
      answer:
        "Sessions und Materialien sind für Kosovo und die Region gedacht — klare Erklärung mit praktischem Englisch für Code und Tools.",
    },
    {
      question: "Wie viele Plätze gibt es?",
      answer:
        "25 Plätze für dieses erste Bootcamp — damit Mentoring real bleibt. Wenn die Plätze voll sind, schließen die Bewerbungen für die Kohorte Oktober–Dezember 2026.",
    },
    {
      question: "Wie bewerbe ich mich?",
      answer:
        "Fülle das Formular auf dieser Seite aus. Erzähl uns, wer du bist und warum du OPTIO Bootcamp 2026 willst — wir melden uns mit den nächsten Schritten. Du kannst uns auch auf Instagram schreiben.",
    },
    {
      question: "Ist das Praktikum garantiert?",
      answer:
        "Ja — für die Top-3-Absolventen. Die Leistung über drei Monate entscheidet, wer ein bezahltes Praktikum bei Optio Digital bekommt. Alle anderen gehen mit einem echten Full-Stack-Projekt und AI-Shipping-Skills.",
    },
    {
      question: "Was kostet es?",
      answer:
        "Das Bootcamp ist nicht kostenlos — die erste Kohorte gibt es 50% günstiger. Sende das Bewerbungsformular auf dieser Seite — wir melden uns mit aktuellen Preisen und Zahlungsdetails für die Kohorte Oktober–Dezember 2026.",
    },
  ],
  applyBandEyebrow: "Bewerben",
  applyBandTitle: "25 Plätze. 3 Praktika. Jetzt bewerben.",
  applyBandBody:
    "Fülle das Formular unten aus. Erzähl uns, wer du bist und warum du OPTIO Bootcamp 2026 willst — wir übernehmen von dort.",
  applyBandCta: "Bewerbung absenden",
  seoTitle:
    "OPTIO Bootcamp 2026 — React, Express & PostgreSQL | 3 garantierte Praktika",
  seoDescription:
    "3-monatiges OPTIO Bootcamp (Oktober–31. Dezember 2026) mit Senior Engineer Enes Shala. Baue ein echtes Full-Stack-Projekt mit React, Express und PostgreSQL. Die Top 3 bekommen ein garantiertes bezahltes Praktikum bei Optio Digital. Nur 25 Plätze.",
  applyUrl: INSTAGRAM_URL,
  gameUi: {
    season: "Season 2026 · Okt–Dez",
    hudSeats: "25 Plätze",
    hudWeeks: "3 Monate",
    hudQuests: "6 Quests",
    hudReward: "×3 Praktika",
    xpLabel: "Kampagnenfortschritt",
    xpLevels: "Lv. 0 → 12",
    startRun: "Run starten",
    viewQuests: "Quests ansehen",
    achievements: "Freischaltungen",
    partyLead: "Party Lead",
    loadout: "Dein Loadout",
    questBoard: "Quest-Board",
    quest: "Quest",
    xpGain: "XP",
    powerUps: "Power-ups",
    legendary: "Legendäre Belohnung",
    joinRaid: "Raid beitreten",
    missionClear: "Mission",
    spawnLabel: "Wird geladen…",
  },
};

const bootcampFr: Bootcamp = {
  year: "2026",
  brandName: "OPTIO Bootcamp",
  cohortLabel: "Oct – 31 déc 2026",
  statusLabel: "Candidatures ouvertes",
  seatsLabel: "25 places",
  priceLabel: "Contactez-nous",
  discountPercent: "−50%",
  discountLabel: "Offre de lancement",
  headline: "Stage rémunéré garanti pour les 3 meilleurs diplômés.",
  summary:
    "Un bootcamp full-stack de 3 mois — d'octobre au 31 décembre — des bases jusqu'à un vrai produit avec React, Express et PostgreSQL. Dirigé par un ingénieur senior. Seulement 25 places pour cette première cohorte.",
  promise:
    "Livrez une vraie app pas à pas. Terminez fort et l'un des trois stages rémunérés chez Optio Digital est à vous.",
  applyCta: "Postuler sur Instagram",
  curriculumCta: "Voir le programme",
  outcomesEyebrow: "Résultats",
  outcomesTitle: "Ce que vous livrerez",
  outcomes: [
    {
      title: "Une vraie app full-stack",
      description:
        "Pas un tutoriel jouet — un produit avec auth, données, APIs et une UI soignée que vous pouvez présenter avec confiance.",
    },
    {
      title: "Un stack qui recrute",
      description:
        "React en front, Express pour l'API, PostgreSQL pour les données — les mêmes outils que les équipes modernes.",
    },
    {
      title: "3 stages Optio garantis",
      description:
        "Les 3 meilleurs diplômés obtiennent un stage rémunéré chez Optio Digital — vrais projets, vrai mentorat, gagné par la performance.",
    },
  ],
  trainerEyebrow: "Formateur",
  trainerTitle: "Apprenez auprès de quelqu'un qui livre",
  trainer: {
    name: "Enes Shala",
    role: "Ingénieur logiciel senior · Formateur principal",
    bio: "Enes dirige l'OPTIO Bootcamp avec le même niveau qu'en production — fondamentaux clairs, architecture propre et discipline de livraison. Vous construisez semaine après semaine sous guidance senior, pas seuls dans un cours vidéo.",
    linkedIn: TRAINER_LINKEDIN,
    initials: "ES",
  },
  stackEyebrow: "Stack",
  stackTitle: "Les outils que vous maîtriserez",
  stackDescription:
    "Un stack focalisé. Assez profond pour être solide — assez pratique pour livrer.",
  stack: [
    {
      name: "React",
      description: "UI moderne, composants, state et frontends prêts pour la prod.",
    },
    {
      name: "Express.js",
      description: "APIs REST, middleware, auth et craft serveur.",
    },
    {
      name: "PostgreSQL",
      description: "Modélisation relationnelle, requêtes et données fiables.",
    },
  ],
  curriculumEyebrow: "Programme",
  curriculumTitle: "3 mois. Six phases. Un produit.",
  curriculumDescription:
    "D'octobre au 31 décembre, nous allons des bases à un projet full-stack complet — semaine par semaine pour que chaque concept tienne. La dernière phase intègre l'AI vibe coding.",
  phases: [
    {
      title: "Fondations",
      weeksLabel: "Semaines 1–2",
      description:
        "Mentalité de développeur, plateforme web, Git et les habitudes qui maintiennent un projet vivant.",
      topics: [
        "Essentiels JavaScript & TypeScript",
        "Comment fonctionne le web (HTTP, navigateurs, APIs)",
        "Git, GitHub et collaboration propre",
        "Environnement de dev & structure de projet",
      ],
    },
    {
      title: "Frontend",
      weeksLabel: "Semaines 3–4",
      description:
        "Construisez des interfaces que les gens utilisent vraiment — composants React, state et structure d'app.",
      topics: [
        "Composants React & composition",
        "Hooks, state et fetching de données",
        "Formulaires, validation et polish UX",
        "Layouts responsives & bases de design system",
      ],
    },
    {
      title: "Backend",
      weeksLabel: "Semaines 5–6",
      description:
        "Montez une API Express avec routes claires, middleware et authentification.",
      topics: [
        "Architecture Express & routing",
        "Middleware, erreurs et validation",
        "Bases de l'auth (sessions / JWT)",
        "Design d'API pour de vrais clients",
      ],
    },
    {
      title: "Base de données",
      weeksLabel: "Semaines 7–8",
      description:
        "Modélisez correctement les données dans PostgreSQL et reliez-les proprement à l'API.",
      topics: [
        "Modélisation relationnelle & migrations",
        "Requêtes SQL claires et scalables",
        "Connexion Express ↔ PostgreSQL",
        "Intégrité des données et bases de sécurité",
      ],
    },
    {
      title: "Projet full-stack",
      weeksLabel: "Semaines 9–10",
      description:
        "Assemblez le stack en un produit : front React, API Express, données PostgreSQL — de bout en bout.",
      topics: [
        "Planification des features & jalons",
        "Intégration UI ↔ API ↔ DB",
        "Flux d'auth à travers le stack",
        "Démos hebdomadaires et itération",
      ],
    },
    {
      title: "AI vibe coding & carrière",
      weeksLabel: "Semaines 11–12",
      description:
        "Livrez plus vite avec le coding assisté par IA, peaufinez le produit et rivalisez pour l'un des trois stages Optio garantis — fin le 31 décembre.",
      topics: [
        "AI vibe coding — prompts, review et livraison avec copilots",
        "Performance, mindset de test et QA",
        "Deploy, étude de cas portfolio & jour de démo",
        "Sélection top 3 pour stage rémunéré chez Optio Digital",
      ],
    },
  ],
  formatEyebrow: "Format",
  formatTitle: "Comment se déroulent les semaines",
  formatItems: [
    {
      title: "Projet d'abord",
      description:
        "Chaque phase alimente le même produit. Vous repartez avec quelque chose que vous avez construit — pas un dossier d'exercices déconnectés.",
    },
    {
      title: "Mentorat senior",
      description:
        "Enes oriente, débloque et maintient la barre à un niveau professionnel.",
    },
    {
      title: "Cadence hebdomadaire",
      description:
        "Objectifs clairs chaque semaine d'octobre jusqu'au jour de démo le 31 décembre — trois mois focalisés, sans remplissage.",
    },
  ],
  internshipEyebrow: "Stage",
  internshipTitle: "3 stages rémunérés — garantis",
  internshipBody:
    "Les 3 meilleurs diplômés d'OPTIO Bootcamp 2026 ont un stage rémunéré garanti chez Optio Digital. Vous le gagnez par le craft, la constance et l'ownership — puis vous travaillez sur de vrais projets aux côtés de l'équipe qui vous a formés. Vingt-cinq places. Trois offres. Compétitionnez.",
  internshipHighlights: [
    "Stage rémunéré garanti pour le top 3",
    "Vrais projets avec Optio Digital",
    "Mentorat qui continue après le bootcamp",
    "Seulement 25 places dans la première cohorte",
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Avant de postuler",
  faqs: [
    {
      question: "Pour qui est-ce ?",
      answer:
        "Pour les débutants motivés et les juniors précoces qui veulent un chemin structuré vers une vraie app full-stack — pas pour ceux qui cherchent un cours vidéo passif.",
    },
    {
      question: "Quels sont les prérequis ?",
      answer:
        "Curiosité, engagement et un laptop. On commence depuis le début ; pratiquer chaque semaine compte plus que les diplômes.",
    },
    {
      question: "Combien de temps dure-t-il ?",
      answer:
        "Trois mois au total — d'octobre au 31 décembre 2026. Six phases, douze semaines, un produit full-stack.",
    },
    {
      question: "Dans quelle langue se déroule le bootcamp ?",
      answer:
        "Les sessions et matériaux sont conçus pour le Kosovo et la région — explications claires avec un anglais pratique pour le code et les outils.",
    },
    {
      question: "Combien de places y a-t-il ?",
      answer:
        "25 places pour ce premier bootcamp — pour que le mentorat reste réel. Quand les places sont pleines, les candidatures ferment pour la cohorte octobre–décembre 2026.",
    },
    {
      question: "Comment postuler ?",
      answer:
        "Remplissez le formulaire sur cette page. Dites-nous qui vous êtes et pourquoi vous voulez OPTIO Bootcamp 2026 — nous reviendrons avec les prochaines étapes. Vous pouvez aussi nous écrire sur Instagram.",
    },
    {
      question: "Le stage est-il garanti ?",
      answer:
        "Oui — pour les 3 meilleurs diplômés. La performance sur trois mois décide qui obtient un stage rémunéré chez Optio Digital. Les autres repartent avec un vrai projet full-stack et des compétences de shipping assisté par IA.",
    },
    {
      question: "Combien ça coûte ?",
      answer:
        "Le bootcamp n'est pas gratuit — cette première cohorte est à −50%. Soumettez le formulaire sur cette page et nous vous enverrons les tarifs et détails de paiement pour la cohorte octobre–décembre 2026.",
    },
  ],
  applyBandEyebrow: "Postuler",
  applyBandTitle: "25 places. 3 stages. Postulez maintenant.",
  applyBandBody:
    "Remplissez le formulaire ci-dessous. Dites-nous qui vous êtes et pourquoi vous voulez OPTIO Bootcamp 2026 — on s'occupe du reste.",
  applyBandCta: "Envoyer la candidature",
  seoTitle:
    "OPTIO Bootcamp 2026 — React, Express & PostgreSQL | 3 stages garantis",
  seoDescription:
    "Bootcamp OPTIO de 3 mois (octobre–31 décembre 2026) avec l'ingénieur senior Enes Shala. Construisez un vrai projet full-stack avec React, Express et PostgreSQL. Les 3 meilleurs obtiennent un stage rémunéré garanti chez Optio Digital. Seulement 25 places.",
  applyUrl: INSTAGRAM_URL,
  gameUi: {
    season: "Saison 2026 · Oct–Déc",
    hudSeats: "25 places",
    hudWeeks: "3 mois",
    hudQuests: "6 quêtes",
    hudReward: "×3 stages",
    xpLabel: "Progression de campagne",
    xpLevels: "Nv. 0 → 12",
    startRun: "Lancer votre run",
    viewQuests: "Voir les quêtes",
    achievements: "Déblocables",
    partyLead: "Chef de party",
    loadout: "Votre loadout",
    questBoard: "Tableau des quêtes",
    quest: "Quête",
    xpGain: "XP",
    powerUps: "Power-ups",
    legendary: "Récompense légendaire",
    joinRaid: "Rejoindre le raid",
    missionClear: "Mission",
    spawnLabel: "Chargement…",
  },
};

const bootcampSv: Bootcamp = {
  year: "2026",
  brandName: "OPTIO Bootcamp",
  cohortLabel: "Okt – 31 dec 2026",
  statusLabel: "Ansökningar öppna",
  seatsLabel: "25 platser",
  priceLabel: "Kontakta oss",
  discountPercent: "−50%",
  discountLabel: "Lanseringserbjudande",
  headline: "Garanterad betald praktik för de 3 bästa deltagarna.",
  summary:
    "Ett 3-månaders full-stack-bootcamp — oktober till 31 december — från grunden till en riktig produkt med React, Express och PostgreSQL. Leds av en senior engineer. Endast 25 platser i första kohorten.",
  promise:
    "Leverera en riktig app steg för steg. Avsluta starkt så är en av tre betalda Optio Digital-praktiker din.",
  applyCta: "Ansök på Instagram",
  curriculumCta: "Se kursplanen",
  outcomesEyebrow: "Resultat",
  outcomesTitle: "Vad du kommer leverera",
  outcomes: [
    {
      title: "En riktig full-stack-app",
      description:
        "Inte en leksakstutorial — en produkt med auth, data, API:er och en polerad UI som du kan visa med självförtroende.",
    },
    {
      title: "En stack som anställer",
      description:
        "React i fronten, Express för API:t, PostgreSQL för data — samma verktyg moderna team shippar med.",
    },
    {
      title: "3 garanterade Optio-praktiker",
      description:
        "De 3 bästa får betald praktik på Optio Digital — riktiga projekt, riktigt mentorskap, förtjänat genom prestation.",
    },
  ],
  trainerEyebrow: "Tränare",
  trainerTitle: "Lär dig av någon som levererar",
  trainer: {
    name: "Enes Shala",
    role: "Senior mjukvaruingenjör · Huvudtränare",
    bio: "Enes leder OPTIO Bootcamp med samma krav som i produktion — tydliga grunder, ren arkitektur och leveransdisciplin. Du bygger vecka för vecka under senior vägledning — inte ensam i en videokurs.",
    linkedIn: TRAINER_LINKEDIN,
    initials: "ES",
  },
  stackEyebrow: "Stack",
  stackTitle: "Verktygen du kommer bemästra",
  stackDescription:
    "En fokuserad stack. Tillräckligt djup för att vara vass — tillräckligt praktisk för att leverera.",
  stack: [
    {
      name: "React",
      description: "Modern UI, komponenter, state och produktionsklara frontends.",
    },
    {
      name: "Express.js",
      description: "REST-API:er, middleware, auth-mönster och serverhantverk.",
    },
    {
      name: "PostgreSQL",
      description: "Relationell modellering, queries och data du kan lita på.",
    },
  ],
  curriculumEyebrow: "Kursplan",
  curriculumTitle: "3 månader. Sex faser. En produkt.",
  curriculumDescription:
    "Från oktober till 31 december går vi från början till ett komplett full-stack-projekt — vecka för vecka så varje koncept sitter. Slutet tar in AI vibe coding i hur du shippar.",
  phases: [
    {
      title: "Grunder",
      weeksLabel: "Veckor 1–2",
      description:
        "Programmeringsmindset, webbplattformen, Git och vanorna som håller ett projekt vid liv.",
      topics: [
        "JavaScript- & TypeScript-grunder",
        "Hur webben fungerar (HTTP, webbläsare, API:er)",
        "Git, GitHub och rent samarbete",
        "Dev-miljö & projektstruktur",
      ],
    },
    {
      title: "Frontend",
      weeksLabel: "Veckor 3–4",
      description:
        "Bygg interfaces som folk faktiskt använder — React-komponenter, state och appstruktur.",
      topics: [
        "React-komponenter & komposition",
        "Hooks, state och datahämtning",
        "Formulär, validering och UX-finish",
        "Responsiva layouter & design system-grunder",
      ],
    },
    {
      title: "Backend",
      weeksLabel: "Veckor 5–6",
      description:
        "Sätt upp ett Express-API med tydliga routes, middleware och autentisering.",
      topics: [
        "Express-arkitektur & routing",
        "Middleware, fel och validering",
        "Auth-grunder (sessions / JWT)",
        "API-design för riktiga klienter",
      ],
    },
    {
      title: "Databas",
      weeksLabel: "Veckor 7–8",
      description:
        "Modellera data rätt i PostgreSQL och koppla det rent till API:t.",
      topics: [
        "Relationell modellering & migrationer",
        "SQL-queries som skalar med tydlighet",
        "Koppla Express ↔ PostgreSQL",
        "Dataintegritet och säkerhetsgrunder",
      ],
    },
    {
      title: "Full-stack-projekt",
      weeksLabel: "Veckor 9–10",
      description:
        "Koppla ihop stacken till en produkt: React-front, Express-API, PostgreSQL — från ände till ände.",
      topics: [
        "Feature-planering & milstolpar",
        "Integrera UI ↔ API ↔ DB",
        "Auth-flöden genom stacken",
        "Veckovisa demos och iteration",
      ],
    },
    {
      title: "AI vibe coding & karriär",
      weeksLabel: "Veckor 11–12",
      description:
        "Shippa snabbare med AI-assisterad kodning, putsa produkten och konkurrera om en av tre garanterade Optio-praktiker — avslut senast 31 december.",
      topics: [
        "AI vibe coding — prompts, review och shipping med copilots",
        "Prestanda, testmindset och QA",
        "Deploy, portfoliocase & demodag",
        "Topp 3-urval för betald praktik på Optio Digital",
      ],
    },
  ],
  formatEyebrow: "Format",
  formatTitle: "Så fungerar veckorna",
  formatItems: [
    {
      title: "Projekt först",
      description:
        "Varje fas matar samma produkt. Du lämnar med något du byggt — inte en mapp med lösa övningar.",
    },
    {
      title: "Senior mentorskap",
      description:
        "Enes ger riktning, hjälper dig lossna och håller ribban på professionell nivå.",
    },
    {
      title: "Veckovis rytm",
      description:
        "Tydliga veckomål från oktober till demodagen 31 december — tre fokuserade månader, ingen utfyllnad.",
    },
  ],
  internshipEyebrow: "Praktik",
  internshipTitle: "3 betalda praktiker — garanterade",
  internshipBody:
    "De 3 bästa från OPTIO Bootcamp 2026 får en garanterad betald praktik på Optio Digital. Du förtjänar den med hantverk, konsekvens och ägarskap — sedan arbetar du på riktiga projekt bredvid teamet som tränat dig. Tjugofem platser. Tre erbjudanden. Tävla.",
  internshipHighlights: [
    "Garanterad betald praktik för topp 3",
    "Riktiga projekt med Optio Digital",
    "Mentorskap som fortsätter efter bootcampet",
    "Endast 25 platser i första kohorten",
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Innan du ansöker",
  faqs: [
    {
      question: "Vem är det för?",
      answer:
        "Motiverade nybörjare och tidiga juniors som vill ha en strukturerad väg till en riktig full-stack-app — inte folk som söker en passiv videokurs.",
    },
    {
      question: "Vilka förkunskaper behövs?",
      answer:
        "Nyfikenhet, engagemang och en laptop. Vi börjar från början; att öva varje vecka betyder mer än examina.",
    },
    {
      question: "Hur länge pågår det?",
      answer:
        "Totalt tre månader — från oktober till 31 december 2026. Sex faser, tolv veckor, en full-stack-produkt.",
    },
    {
      question: "På vilket språk är bootcampet?",
      answer:
        "Sessioner och material är utformade för Kosovo och regionen — tydlig undervisning med praktisk engelska för kod och verktyg.",
    },
    {
      question: "Hur många platser finns det?",
      answer:
        "25 platser för detta första bootcamp — så mentorskapet förblir riktigt. När platserna fylls stängs ansökningarna för kohorten oktober–december 2026.",
    },
    {
      question: "Hur ansöker jag?",
      answer:
        "Fyll i formuläret på den här sidan. Berätta vem du är och varför du vill ha OPTIO Bootcamp 2026 — vi återkommer med nästa steg. Du kan också DM:a oss på Instagram.",
    },
    {
      question: "Är praktiken garanterad?",
      answer:
        "Ja — för de 3 bästa. Prestation under tre månader avgör vem som får betald praktik på Optio Digital. Alla andra lämnar med ett riktigt full-stack-projekt och AI-assisterade shipping-skills.",
    },
    {
      question: "Vad kostar det?",
      answer:
        "Bootcampet är inte gratis — den första kohorten har 50% rabatt. Skicka ansökningsformuläret på den här sidan så återkommer vi med aktuellt pris och betalningsdetaljer för kohorten oktober–december 2026.",
    },
  ],
  applyBandEyebrow: "Ansök",
  applyBandTitle: "25 platser. 3 praktiker. Ansök nu.",
  applyBandBody:
    "Fyll i formuläret nedan. Berätta vem du är och varför du vill ha OPTIO Bootcamp 2026 — vi tar det därifrån.",
  applyBandCta: "Skicka ansökan",
  seoTitle:
    "OPTIO Bootcamp 2026 — React, Express & PostgreSQL | 3 garanterade praktiker",
  seoDescription:
    "3-månaders OPTIO Bootcamp (oktober–31 december 2026) lett av senior engineer Enes Shala. Bygg ett riktigt full-stack-projekt med React, Express och PostgreSQL. Topp 3 får garanterad betald praktik på Optio Digital. Endast 25 platser.",
  applyUrl: INSTAGRAM_URL,
  gameUi: {
    season: "Säsong 2026 · Okt–Dec",
    hudSeats: "25 platser",
    hudWeeks: "3 månader",
    hudQuests: "6 quests",
    hudReward: "×3 praktiker",
    xpLabel: "Kampanjprogress",
    xpLevels: "Lv. 0 → 12",
    startRun: "Starta din run",
    viewQuests: "Visa quests",
    achievements: "Upplåsningar",
    partyLead: "Party lead",
    loadout: "Din loadout",
    questBoard: "Quest-bräda",
    quest: "Quest",
    xpGain: "XP",
    powerUps: "Power-ups",
    legendary: "Legendarisk belöning",
    joinRaid: "Gå med i raiden",
    missionClear: "Mission",
    spawnLabel: "Laddar…",
  },
};

const bootcampAr: Bootcamp = {
  year: "2026",
  brandName: "OPTIO Bootcamp",
  cohortLabel: "أكتوبر – 31 ديسمبر 2026",
  statusLabel: "الطلبات مفتوحة",
  seatsLabel: "25 مقعدًا",
  priceLabel: "تواصل معنا",
  discountPercent: "−50%",
  discountLabel: "عرض الإطلاق",
  headline: "تدريب مدفوع مضمون لأفضل 3 خريجين.",
  summary:
    "معسكر برمجة full-stack لمدة 3 أشهر — من أكتوبر حتى 31 ديسمبر — من البداية إلى منتج حقيقي باستخدام React وExpress وPostgreSQL. بإشراف مهندس أول. 25 مقعدًا فقط في الدفعة الأولى.",
  promise:
    "ابنِ تطبيقًا حقيقيًا خطوة بخطوة. أنهِ بقوة وسيكون أحد ثلاثة تدريبات مدفوعة لدى Optio Digital من نصيبك.",
  applyCta: "قدّم عبر Instagram",
  curriculumCta: "اطّلع على المنهج",
  outcomesEyebrow: "النتائج",
  outcomesTitle: "ما الذي ستسلّمه",
  outcomes: [
    {
      title: "تطبيق full-stack حقيقي",
      description:
        "ليس درسًا تجريبيًا — منتج بمصادقة وبيانات وواجهات برمجة وواجهة مصقولة يمكنك عرضها بثقة.",
    },
    {
      title: "تقنيات تُوظَّف بها",
      description:
        "React في الواجهة، Express للـ API، وPostgreSQL للبيانات — نفس أدوات الفرق الحديثة.",
    },
    {
      title: "3 تدريبات Optio مضمونة",
      description:
        "أفضل 3 خريجين يحصلون على تدريب مدفوع لدى Optio Digital — مشاريع حقيقية وإرشاد حقيقي، يُكتسب بالأداء.",
    },
  ],
  trainerEyebrow: "المدرّب",
  trainerTitle: "تعلّم ممن يسلّم فعليًا",
  trainer: {
    name: "Enes Shala",
    role: "مهندس برمجيات أول · المدرّب الرئيسي",
    bio: "يقود Enes معسكر OPTIO بنفس معيار الإنتاج: أساسيات واضحة وهندسة نظيفة وانضباط في التسليم. تبني أسبوعًا بعد أسبوع بإرشاد كبار — لا بمفردك في دورة فيديو.",
    linkedIn: TRAINER_LINKEDIN,
    initials: "ES",
  },
  stackEyebrow: "التقنيات",
  stackTitle: "الأدوات التي ستتقنها",
  stackDescription:
    "مجموعة تقنيات مركّزة. عميقة بما يكفي لتكون قويًا — عملية بما يكفي للتسليم.",
  stack: [
    {
      name: "React",
      description: "واجهات حديثة ومكوّنات وحالة وواجهات جاهزة للإنتاج.",
    },
    {
      name: "Express.js",
      description: "واجهات REST وmiddleware وأنماط المصادقة وحرفة الخادم.",
    },
    {
      name: "PostgreSQL",
      description: "نمذجة علائقية واستعلامات وبيانات يمكن الوثوق بها.",
    },
  ],
  curriculumEyebrow: "المنهج",
  curriculumTitle: "3 أشهر. ست مراحل. منتج واحد.",
  curriculumDescription:
    "من أكتوبر حتى 31 ديسمبر نبدأ من الصفر ونصل إلى مشروع full-stack مكتمل — بإيقاع أسبوعي حتى يثبت كل مفهوم. المرحلة الأخيرة تضيف AI vibe coding إلى طريقة عملك.",
  phases: [
    {
      title: "الأساسيات",
      weeksLabel: "الأسابيع 1–2",
      description:
        "عقلية البرمجة ومنصة الويب وGit والعادات التي تبقي المشروع حيًا.",
      topics: [
        "أساسيات JavaScript وTypeScript",
        "كيف يعمل الويب (HTTP والمتصفحات وواجهات البرمجة)",
        "Git وGitHub والتعاون النظيف",
        "بيئة التطوير وهيكل المشروع",
      ],
    },
    {
      title: "الواجهة الأمامية",
      weeksLabel: "الأسابيع 3–4",
      description:
        "ابنِ واجهات يستخدمها الناس فعلاً — مكوّنات React والحالة وهيكل التطبيق.",
      topics: [
        "مكوّنات React والتركيب",
        "Hooks والحالة وجلب البيانات",
        "النماذج والتحقق وصقل تجربة المستخدم",
        "تخطيطات متجاوبة وأساسيات نظام التصميم",
      ],
    },
    {
      title: "الخادم",
      weeksLabel: "الأسابيع 5–6",
      description:
        "ابنِ واجهة Express بمسارات واضحة وmiddleware ومصادقة.",
      topics: [
        "هندسة Express والتوجيه",
        "Middleware والأخطاء والتحقق",
        "أساسيات المصادقة (sessions / JWT)",
        "تصميم واجهات برمجة لعملاء حقيقيين",
      ],
    },
    {
      title: "قاعدة البيانات",
      weeksLabel: "الأسابيع 7–8",
      description:
        "نمذج البيانات بشكل صحيح في PostgreSQL واربطها نظيفًا بالـ API.",
      topics: [
        "النمذجة العلائقية والهجرات",
        "استعلامات SQL واضحة وقابلة للتوسع",
        "ربط Express ↔ PostgreSQL",
        "سلامة البيانات وأساسيات الأمان",
      ],
    },
    {
      title: "مشروع full-stack",
      weeksLabel: "الأسابيع 9–10",
      description:
        "اجمع التقنيات في منتج واحد: واجهة React وAPI Express وبيانات PostgreSQL — من البداية للنهاية.",
      topics: [
        "تخطيط الميزات والمعالم",
        "دمج الواجهة ↔ API ↔ قاعدة البيانات",
        "تدفقات المصادقة عبر الـ stack",
        "عروض أسبوعية وتحسين مستمر",
      ],
    },
    {
      title: "AI vibe coding والمسيرة المهنية",
      weeksLabel: "الأسابيع 11–12",
      description:
        "سلّم أسرع بمساعدة الذكاء الاصطناعي، حسّن المنتج، وتنافس على أحد ثلاثة تدريبات Optio المضمونة — حتى 31 ديسمبر.",
      topics: [
        "AI vibe coding — التوجيه والمراجعة والتسليم مع المساعدين",
        "الأداء وعقلية الاختبار وضمان الجودة",
        "النشر ودراسة حالة المحفظة ويوم العرض",
        "اختيار أفضل 3 لتدريب مدفوع لدى Optio Digital",
      ],
    },
  ],
  formatEyebrow: "الصيغة",
  formatTitle: "كيف تسير الأسابيع",
  formatItems: [
    {
      title: "المشروع أولاً",
      description:
        "كل مرحلة تغذي نفس المنتج. تغادر بشيء بنيته أنت — لا مجلد تمارين منفصلة.",
    },
    {
      title: "إرشاد كبار",
      description:
        "يوجّهك Enes ويزيل العوائق ويحافظ على معيار احترافي.",
    },
    {
      title: "إيقاع أسبوعي",
      description:
        "أهداف أسبوعية واضحة من أكتوبر حتى يوم العرض في 31 ديسمبر — ثلاثة أشهر مركّزة بلا حشو.",
    },
  ],
  internshipEyebrow: "التدريب",
  internshipTitle: "3 تدريبات مدفوعة — مضمونة",
  internshipBody:
    "أفضل 3 خريجين من OPTIO Bootcamp 2026 مضمون لهم تدريب مدفوع لدى Optio Digital. تكسبه بالحرفة والثبات والمسؤولية — ثم تعمل على مشاريع حقيقية بجانب الفريق الذي درّبك. خمسة وعشرون مقعدًا. ثلاثة عروض. نافس.",
  internshipHighlights: [
    "تدريب مدفوع مضمون لأفضل 3",
    "مشاريع حقيقية مع Optio Digital",
    "إرشاد يستمر بعد المعسكر",
    "25 مقعدًا فقط في الدفعة الأولى",
  ],
  faqEyebrow: "الأسئلة الشائعة",
  faqTitle: "قبل أن تقدّم",
  faqs: [
    {
      question: "لمن هذا البرنامج؟",
      answer:
        "للمبتدئين المتحمسين والمبتدئين المبكرين الذين يريدون مسارًا واضحًا لبناء تطبيق full-stack حقيقي — لا لمن يبحث عن دورة فيديو سلبية.",
    },
    {
      question: "ما المتطلبات المسبقة؟",
      answer:
        "فضول والتزام وحاسوب محمول. نبدأ من الصفر؛ الممارسة الأسبوعية أهم من الشهادات.",
    },
    {
      question: "كم تستمر المدة؟",
      answer:
        "ثلاثة أشهر إجمالاً — من أكتوبر حتى 31 ديسمبر 2026. ست مراحل، اثنا عشر أسبوعًا، منتج full-stack واحد.",
    },
    {
      question: "بأي لغة يُقدَّم المعسكر؟",
      answer:
        "الجلسات والمواد مصممة لكوسوفو والمنطقة — شرح واضح مع إنجليزية عملية للكود والأدوات.",
    },
    {
      question: "كم عدد المقاعد؟",
      answer:
        "25 مقعدًا لهذا المعسكر الأول — ليبقى الإرشاد حقيقيًا. عند امتلاء المقاعد تُغلق الطلبات لدفعة أكتوبر–ديسمبر 2026.",
    },
    {
      question: "كيف أقدّم؟",
      answer:
        "املأ نموذج الطلب في هذه الصفحة. أخبرنا من أنت ولماذا تريد OPTIO Bootcamp 2026 — نتابع معك بالخطوات التالية. يمكنك أيضًا مراسلتنا على Instagram.",
    },
    {
      question: "هل التدريب مضمون؟",
      answer:
        "نعم — لأفضل 3 خريجين. الأداء خلال الأشهر الثلاثة يحدد من يحصل على تدريب مدفوع لدى Optio Digital. الباقون يخرجون بمشروع full-stack حقيقي ومهارات تسليم بمساعدة الذكاء الاصطناعي.",
    },
    {
      question: "كم التكلفة؟",
      answer:
        "المعسكر ليس مجانيًا — الدفعة الأولى بخصم 50%. أرسل نموذج الطلب في هذه الصفحة وسنعود إليك بالأسعار وتفاصيل الدفع لدفعة أكتوبر–ديسمبر 2026.",
    },
  ],
  applyBandEyebrow: "قدّم",
  applyBandTitle: "25 مقعدًا. 3 تدريبات. قدّم الآن.",
  applyBandBody:
    "املأ النموذج أدناه. أخبرنا من أنت ولماذا تريد OPTIO Bootcamp 2026 — نكمل من هناك.",
  applyBandCta: "إرسال الطلب",
  seoTitle:
    "OPTIO Bootcamp 2026 — React وExpress وPostgreSQL | 3 تدريبات مضمونة",
  seoDescription:
    "معسكر OPTIO لمدة 3 أشهر (أكتوبر–31 ديسمبر 2026) بإشراف المهندس الأول Enes Shala. ابنِ مشروع full-stack حقيقيًا باستخدام React وExpress وPostgreSQL. أفضل 3 يحصلون على تدريب مدفوع مضمون لدى Optio Digital. 25 مقعدًا فقط.",
  applyUrl: INSTAGRAM_URL,
  gameUi: {
    season: "موسم 2026 · أكتوبر–ديسمبر",
    hudSeats: "25 مقعدًا",
    hudWeeks: "3 أشهر",
    hudQuests: "6 مهام",
    hudReward: "×3 تدريبات",
    xpLabel: "تقدم الحملة",
    xpLevels: "المستوى 0 → 12",
    startRun: "ابدأ الجولة",
    viewQuests: "عرض المهام",
    achievements: "الإنجازات",
    partyLead: "قائد الفريق",
    loadout: "عتادك",
    questBoard: "لوحة المهام",
    quest: "مهمة",
    xpGain: "XP",
    powerUps: "تعزيزات",
    legendary: "مكافأة أسطورية",
    joinRaid: "انضم للغارة",
    missionClear: "مهمة",
    spawnLabel: "جارٍ التحميل…",
  },
};

const bootcampZh: Bootcamp = {
  year: "2026",
  brandName: "OPTIO Bootcamp",
  cohortLabel: "10 月 – 12 月 31 日 2026",
  statusLabel: "正在接受申请",
  seatsLabel: "25 个名额",
  priceLabel: "联系我们",
  discountPercent: "−50%",
  discountLabel: "开营优惠",
  headline: "前三名毕业生获得保证带薪实习。",
  summary:
    "为期 3 个月的全栈训练营——从 10 月到 12 月 31 日——从入门到用 React、Express 和 PostgreSQL 交付真实产品。由资深工程师主导。首期仅 25 个名额。",
  promise:
    "一步步交付真实应用。出色完成，三个 Optio Digital 带薪实习名额之一就是你的。",
  applyCta: "在 Instagram 申请",
  curriculumCta: "查看课程",
  outcomesEyebrow: "成果",
  outcomesTitle: "你将交付什么",
  outcomes: [
    {
      title: "一个真实的全栈应用",
      description:
        "不是玩具教程——带有认证、数据、API 和精致 UI 的产品，你可以自信地展示。",
    },
    {
      title: "一套能找到工作的技术栈",
      description:
        "前端 React、API 用 Express、数据用 PostgreSQL——现代团队真正在用的工具。",
    },
    {
      title: "3 个保证的 Optio 实习",
      description:
        "前三名毕业生获得 Optio Digital 带薪实习——真实项目、真实指导，靠表现赢得。",
    },
  ],
  trainerEyebrow: "导师",
  trainerTitle: "向真正交付的人学习",
  trainer: {
    name: "Enes Shala",
    role: "资深软件工程师 · 首席导师",
    bio: "Enes 以生产级标准主持 OPTIO Bootcamp——清晰的基础、干净的架构与交付纪律。你将在资深指导下周复一周地构建，而不是独自看视频课。",
    linkedIn: TRAINER_LINKEDIN,
    initials: "ES",
  },
  stackEyebrow: "技术栈",
  stackTitle: "你将掌握的工具",
  stackDescription:
    "一套专注的技术栈。足够深入以变得强大——足够实用以真正交付。",
  stack: [
    {
      name: "React",
      description: "现代 UI、组件、状态与可上线的前端。",
    },
    {
      name: "Express.js",
      description: "REST API、中间件、认证模式与服务端工艺。",
    },
    {
      name: "PostgreSQL",
      description: "关系建模、查询与可信赖的数据。",
    },
  ],
  curriculumEyebrow: "课程",
  curriculumTitle: "3 个月。六个阶段。一个产品。",
  curriculumDescription:
    "从 10 月到 12 月 31 日，我们从零走到完整的全栈项目——按周推进，让每个概念扎实落地。最后阶段把 AI vibe coding 融入你的交付方式。",
  phases: [
    {
      title: "基础",
      weeksLabel: "第 1–2 周",
      description:
        "编程思维、Web 平台、Git，以及让项目持续运转的习惯。",
      topics: [
        "JavaScript 与 TypeScript 基础",
        "Web 如何工作（HTTP、浏览器、API）",
        "Git、GitHub 与干净协作",
        "开发环境与项目结构",
      ],
    },
    {
      title: "前端",
      weeksLabel: "第 3–4 周",
      description:
        "构建人们真正使用的界面——React 组件、状态与应用结构。",
      topics: [
        "React 组件与组合",
        "Hooks、状态与数据获取",
        "表单、校验与体验打磨",
        "响应式布局与设计系统基础",
      ],
    },
    {
      title: "后端",
      weeksLabel: "第 5–6 周",
      description:
        "搭建带有清晰路由、中间件与认证的 Express API。",
      topics: [
        "Express 架构与路由",
        "中间件、错误与校验",
        "认证基础（session / JWT）",
        "面向真实客户端的 API 设计",
      ],
    },
    {
      title: "数据库",
      weeksLabel: "第 7–8 周",
      description:
        "在 PostgreSQL 中正确建模数据，并干净地连接到 API。",
      topics: [
        "关系建模与迁移",
        "清晰可扩展的 SQL 查询",
        "连接 Express ↔ PostgreSQL",
        "数据完整性与安全基础",
      ],
    },
    {
      title: "全栈项目",
      weeksLabel: "第 9–10 周",
      description:
        "把技术栈串成一个产品：React 前端、Express API、PostgreSQL——端到端。",
      topics: [
        "功能规划与里程碑",
        "集成 UI ↔ API ↔ 数据库",
        "跨栈认证流程",
        "每周演示与迭代",
      ],
    },
    {
      title: "AI vibe coding 与职业",
      weeksLabel: "第 11–12 周",
      description:
        "用 AI 辅助编码更快交付，打磨产品，并竞争三个保证的 Optio 实习之一——在 12 月 31 日前收官。",
      topics: [
        "AI vibe coding——提示、审查与用 copilots 交付",
        "性能、测试思维与质量保障",
        "部署、作品集案例与演示日",
        "选拔前三名获得 Optio Digital 带薪实习",
      ],
    },
  ],
  formatEyebrow: "形式",
  formatTitle: "每周如何运转",
  formatItems: [
    {
      title: "项目优先",
      description:
        "每个阶段都服务于同一个产品。你带走的是自己构建的东西——不是一堆互不相关的练习。",
    },
    {
      title: "资深指导",
      description:
        "Enes 把控方向、帮你解卡，并维持专业质量标准。",
    },
    {
      title: "每周节奏",
      description:
        "从 10 月到 12 月 31 日演示日，每周目标清晰——三个月专注推进，没有水分。",
    },
  ],
  internshipEyebrow: "实习",
  internshipTitle: "3 个带薪实习——保证",
  internshipBody:
    "OPTIO Bootcamp 2026 前三名毕业生保证获得 Optio Digital 带薪实习。靠手艺、坚持与主人翁意识赢得——然后与培养你的团队一起做真实项目。二十五个名额。三个名额。来竞争。",
  internshipHighlights: [
    "前三名保证带薪实习",
    "与 Optio Digital 一起做真实项目",
    "训练营结束后继续指导",
    "首期仅 25 个名额",
  ],
  faqEyebrow: "常见问题",
  faqTitle: "申请之前",
  faqs: [
    {
      question: "适合谁？",
      answer:
        "想要清晰路径去交付真实全栈应用的动机型初学者和早期初级开发者——不是只想看被动视频课的人。",
    },
    {
      question: "有什么前置要求？",
      answer:
        "好奇心、投入和一台笔记本。我们从零开始；每周练习比学历更重要。",
    },
    {
      question: "持续多久？",
      answer:
        "总共三个月——从 2026 年 10 月到 12 月 31 日。六个阶段、十二周、一个全栈产品。",
    },
    {
      question: "训练营用什么语言？",
      answer:
        "课程与材料面向科索沃及地区——讲解清晰，代码与工具使用实用英语。",
    },
    {
      question: "有多少名额？",
      answer:
        "首期 25 个名额——确保指导真正到位。名额满后，2026 年 10–12 月批次申请关闭。",
    },
    {
      question: "如何申请？",
      answer:
        "填写本页申请表。告诉我们你是谁、为什么想参加 OPTIO Bootcamp 2026——我们会跟进下一步。也可以在 Instagram 私信我们。",
    },
    {
      question: "实习有保证吗？",
      answer:
        "有——给前三名。三个月的表现决定谁获得 Optio Digital 带薪实习。其他人同样带走真实全栈项目与 AI 辅助交付能力。",
    },
    {
      question: "费用多少？",
      answer:
        "训练营不是免费的——首期优惠 50%。提交本页申请表后，我们会跟进 2026 年 10–12 月批次的价格与付款细节。",
    },
  ],
  applyBandEyebrow: "申请",
  applyBandTitle: "25 个名额。3 个实习。立即申请。",
  applyBandBody:
    "填写下方表单。告诉我们你是谁、为什么想参加 OPTIO Bootcamp 2026——我们从那里继续。",
  applyBandCta: "提交申请",
  seoTitle:
    "OPTIO Bootcamp 2026 — React、Express 与 PostgreSQL | 3 个保证实习",
  seoDescription:
    "为期 3 个月的 OPTIO Bootcamp（2026 年 10 月–12 月 31 日），由资深工程师 Enes Shala 主导。用 React、Express 和 PostgreSQL 构建真实全栈项目。前三名获得 Optio Digital 保证带薪实习。仅 25 个名额。",
  applyUrl: INSTAGRAM_URL,
  gameUi: {
    season: "赛季 2026 · 10–12 月",
    hudSeats: "25 名额",
    hudWeeks: "3 个月",
    hudQuests: "6 个任务",
    hudReward: "×3 实习",
    xpLabel: "战役进度",
    xpLevels: "等级 0 → 12",
    startRun: "开始你的回合",
    viewQuests: "查看任务",
    achievements: "可解锁",
    partyLead: "队伍领袖",
    loadout: "你的装备",
    questBoard: "任务板",
    quest: "任务",
    xpGain: "XP",
    powerUps: "强化",
    legendary: "传奇奖励",
    joinRaid: "加入突袭",
    missionClear: "任务",
    spawnLabel: "加载中…",
  },
};

const bootcampsByLocale: Record<string, Bootcamp> = {
  en: bootcampEn,
  sq: bootcampSq,
  de: bootcampDe,
  fr: bootcampFr,
  sv: bootcampSv,
  ar: bootcampAr,
  zh: bootcampZh,
};

export function getBootcamp(year: string, lang: string): Bootcamp | undefined {
  const localeBootcamp = bootcampsByLocale[lang] || bootcampEn;
  if (localeBootcamp.year !== year) return undefined;
  return localeBootcamp;
}

export function getBootcampYears(): string[] {
  return [bootcampEn.year];
}
