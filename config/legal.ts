import { normalizeLocale } from "@/lib/i18n";

export type LegalSection = {
  title: string;
  paragraphs: string[];
};

export type LegalDocument = {
  title: string;
  lastUpdatedLabel: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export type LegalLabels = {
  privacy: string;
  terms: string;
  backHome: string;
};

const CONTACT_EMAIL = "info@optio-digital.com";

const labelsEn: LegalLabels = {
  privacy: "Privacy Policy",
  terms: "Terms of Service",
  backHome: "Back to home",
};

const labelsSq: LegalLabels = {
  privacy: "Politika e privatësisë",
  terms: "Kushtet e shërbimit",
  backHome: "Kthehu në faqen kryesore",
};

const privacyEn: LegalDocument = {
  title: "Privacy Policy",
  lastUpdatedLabel: "Last updated",
  lastUpdated: "September 24, 2026",
  intro:
    "OPTIO Digital (“OPTIO”, “we”, “us”) respects your privacy. This policy explains what we collect when you use optio.digital, contact us, or apply to our bootcamp, and how we handle that information.",
  sections: [
    {
      title: "Who we are",
      paragraphs: [
        "OPTIO Digital provides digital agency services (websites, brand, software, and marketing) from Kosovo and works with clients worldwide.",
        `For privacy questions, contact us at ${CONTACT_EMAIL}.`,
      ],
    },
    {
      title: "Information we collect",
      paragraphs: [
        "Contact and application forms: name, email, phone number (when provided), message content, and optional fields such as background or package interest.",
        "Technical data: basic device and usage information through analytics (see below), and standard server logs from our hosting provider.",
        "We do not intentionally collect sensitive categories of personal data through this website.",
      ],
    },
    {
      title: "How we use information",
      paragraphs: [
        "To respond to inquiries, scope projects, and communicate about services or bootcamp applications.",
        "To improve our website, measure traffic, and understand how visitors use our pages.",
        "To protect the site against abuse and maintain security.",
      ],
    },
    {
      title: "Legal bases (where applicable)",
      paragraphs: [
        "We process form data based on your request to contact us or apply (steps prior to a contract) and our legitimate interest in operating and improving our business.",
        "Analytics are used based on legitimate interest; where required, we rely on your consent through cookie/analytics settings provided by your browser or applicable tools.",
      ],
    },
    {
      title: "Sharing and processors",
      paragraphs: [
        "We use trusted providers to run the site and deliver email, including hosting (e.g. Vercel), email delivery (Resend), and analytics (Google Analytics and Vercel Analytics when enabled). These providers process data on our instructions and for the purposes described here.",
        "We do not sell your personal information.",
      ],
    },
    {
      title: "Retention",
      paragraphs: [
        "We keep contact and application messages for as long as needed to respond, manage the relationship, or meet legal obligations, then delete or anonymize them when no longer required.",
      ],
    },
    {
      title: "Your rights",
      paragraphs: [
        "Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal data, and to object to certain processing.",
        `To exercise these rights, email ${CONTACT_EMAIL}. You may also lodge a complaint with your local data protection authority.`,
      ],
    },
    {
      title: "International transfers",
      paragraphs: [
        "Our providers may process data in countries outside your own. We choose reputable vendors and contractual safeguards where applicable.",
      ],
    },
    {
      title: "Changes",
      paragraphs: [
        "We may update this policy from time to time. The “Last updated” date at the top will change when we do.",
      ],
    },
  ],
};

const privacySq: LegalDocument = {
  title: "Politika e privatësisë",
  lastUpdatedLabel: "Përditësuar",
  lastUpdated: "24 shtator 2026",
  intro:
    "OPTIO Digital (“OPTIO”, “ne”) respekton privatësinë tuaj. Kjo politikë shpjegon çfarë mbledhim kur përdorni optio.digital, na kontaktoni ose aplikoni në bootcamp, dhe si i trajtojmë të dhënat.",
  sections: [
    {
      title: "Kush jemi",
      paragraphs: [
        "OPTIO Digital ofron shërbime agjencie dixhitale (website, markë, softuer dhe marketing) nga Kosova dhe punon me klientë në botë.",
        `Për pyetje rreth privatësisë: ${CONTACT_EMAIL}.`,
      ],
    },
    {
      title: "Të dhënat që mbledhim",
      paragraphs: [
        "Formularët e kontaktit dhe aplikimit: emri, emaili, telefoni (nëse jepet), mesazhi dhe fusha opsionale si background ose paketa.",
        "Të dhëna teknike: informacion bazë përmes analitikës dhe log-eve standarde të hostingut.",
        "Nuk mbledhim qëllimisht kategori të ndjeshme të dhënash personale përmes kësaj faqeje.",
      ],
    },
    {
      title: "Si i përdorim",
      paragraphs: [
        "Për t’iu përgjigjur kërkesave, për të faturuar ose komunikuar rreth shërbimeve dhe bootcamp-it.",
        "Për të përmirësuar faqen dhe të kuptuar trafikun.",
        "Për siguri dhe parandalim të abuzimit.",
      ],
    },
    {
      title: "Baza ligjore",
      paragraphs: [
        "Formularët bazohen në kërkesën tuaj për kontakt ose aplikim dhe interesin tonin legjitim për të operuar biznesin.",
        "Analitika përdoret sipas interesit legjitim; ku kërkohet, mbështetemi në pëlqimin tuaj përmes cilësimeve të shfletuesit ose mjeteve përkatëse.",
      ],
    },
    {
      title: "Ndarja me palë të treta",
      paragraphs: [
        "Përdorim ofrues të besueshëm: hosting (p.sh. Vercel), email (Resend) dhe analitikë (Google Analytics dhe Vercel Analytics kur aktivizohen). Ata procesojnë të dhëna sipas udhëzimeve tona.",
        "Nuk shesim të dhënat tuaja personale.",
      ],
    },
    {
      title: "Ruajtja",
      paragraphs: [
        "Ruajmë mesazhet aq sa duhet për t’iu përgjigjur, për marrëdhënien ose detyrimet ligjore, pastaj i fshijmë ose anonimizojmë.",
      ],
    },
    {
      title: "Të drejtat tuaja",
      paragraphs: [
        "Varësisht vendndodhjes, mund të keni të drejtë aksesi, korrigjimi, fshirjeje ose kufizimi të procesimit.",
        `Shkruani te ${CONTACT_EMAIL}. Mund të ankoheni te autoriteti lokal i mbrojtjes së të dhënave.`,
      ],
    },
    {
      title: "Ndryshime",
      paragraphs: [
        "Mund ta përditësojmë këtë politikë. Data “Përditësuar” ndryshon kur e bëjmë këtë.",
      ],
    },
  ],
};

const termsEn: LegalDocument = {
  title: "Terms of Service",
  lastUpdatedLabel: "Last updated",
  lastUpdated: "September 24, 2026",
  intro:
    "These terms apply to your use of optio.digital and to initial inquiries about OPTIO Digital services. Specific project work is governed by separate agreements or statements of work we agree with you in writing.",
  sections: [
    {
      title: "Services",
      paragraphs: [
        "OPTIO provides design, development, branding, marketing, and related digital services as described on this site or in a proposal.",
        "Package prices on the website are starting points or scopes; final fees, timelines, and deliverables are confirmed after discovery unless otherwise stated in writing.",
      ],
    },
    {
      title: "Your responsibilities",
      paragraphs: [
        "You provide accurate information in forms and communications, timely feedback, and materials (copy, assets, access) needed to deliver the work.",
        "You must have rights to any content you supply and must not use our services for unlawful purposes.",
      ],
    },
    {
      title: "Intellectual property",
      paragraphs: [
        "Unless a signed agreement says otherwise, ownership of final deliverables and license terms are defined in your project contract. Our site content, brand, and pre-existing tools remain OPTIO property.",
      ],
    },
    {
      title: "Website use",
      paragraphs: [
        "You may browse this site for lawful purposes. Do not attempt to disrupt, scrape excessively, or compromise the security of the site or our systems.",
      ],
    },
    {
      title: "Bootcamp",
      paragraphs: [
        "Bootcamp applications, fees, refunds, and participation rules are described on the relevant bootcamp page and in communications we send you. If there is a conflict, the bootcamp-specific information for your cohort prevails.",
      ],
    },
    {
      title: "Disclaimers and liability",
      paragraphs: [
        "This site and its content are provided “as is” for general information. We do not guarantee uninterrupted access.",
        "To the fullest extent permitted by law, OPTIO is not liable for indirect or consequential damages arising from use of this website. Liability for paid services is limited as set out in your project agreement.",
      ],
    },
    {
      title: "Changes and contact",
      paragraphs: [
        "We may update these terms; continued use after changes means you accept the updated version.",
        `Questions: ${CONTACT_EMAIL}. Location: Prishtina, Kosovo.`,
      ],
    },
  ],
};

const termsSq: LegalDocument = {
  title: "Kushtet e shërbimit",
  lastUpdatedLabel: "Përditësuar",
  lastUpdated: "24 shtator 2026",
  intro:
    "Këto kushte vlejnë për përdorimin e optio.digital dhe për kërkesat fillestare rreth shërbimeve të OPTIO Digital. Projekte specifike rregullohen me marrëveshje ose scope të veçantë me shkrim.",
  sections: [
    {
      title: "Shërbimet",
      paragraphs: [
        "OPTIO ofron dizajn, zhvillim, markë, marketing dhe shërbime të ngjashme dixhitale siç përshkruhen në faqe ose në propozim.",
        "Çmimet e paketave janë pika fillimi; tarifat, afatet dhe deliverables përfundimtarë konfirmohen pas discovery-t, përveç kur thuhet ndryshe me shkrim.",
      ],
    },
    {
      title: "Përgjegjësitë tuaja",
      paragraphs: [
        "Jepni informacion të saktë, feedback në kohë dhe materiale të nevojshme për punën.",
        "Duhet të keni të drejta mbi përmbajtjen që na jepni dhe të mos përdorni shërbimet për qëllime të paligjshme.",
      ],
    },
    {
      title: "Pronësia intelektuale",
      paragraphs: [
        "Përveç nëse marrëveshja me shkrim thotë ndryshe, pronësia mbi deliverables dhe licencat përcaktohen në kontratën e projektit. Përmbajtja e faqes dhe marka e OPTIO mbeten pronë e OPTIO.",
      ],
    },
    {
      title: "Përdorimi i faqes",
      paragraphs: [
        "Mund ta shfletoni faqen për qëllime ligjore. Mos e dëmtoni, mos e mbingarkoni me scraping ose mos e komprometoni sigurinë.",
      ],
    },
    {
      title: "Bootcamp",
      paragraphs: [
        "Aplikimet, çmimet, rimbursimet dhe rregullat e bootcamp-it janë në faqen përkatëse dhe në komunikimet tona. Në rast konflikti, vlen informacioni specifik për grupin tuaj.",
      ],
    },
    {
      title: "Përgjegjësi",
      paragraphs: [
        "Faqja ofrohet “siç është”. Nuk garantojmë akses të pandërprerë.",
        "Në masën e lejuar nga ligji, OPTIO nuk mban përgjegjësi për dëme indirekte nga përdorimi i faqes. Për shërbime me pagesë, kufizimet janë në marrëveshjen e projektit.",
      ],
    },
    {
      title: "Ndryshime dhe kontakt",
      paragraphs: [
        "Mund t’i përditësojmë këto kushte; vazhdimi i përdorimit pas ndryshimeve nënkupton pranimin.",
        `Pyetje: ${CONTACT_EMAIL}. Vendndodhja: Prishtinë, Kosovë.`,
      ],
    },
  ],
};

export function getLegalLabels(locale: string): LegalLabels {
  return normalizeLocale(locale) === "sq" ? labelsSq : labelsEn;
}

export function getPrivacyDocument(locale: string): LegalDocument {
  return normalizeLocale(locale) === "sq" ? privacySq : privacyEn;
}

export function getTermsDocument(locale: string): LegalDocument {
  return normalizeLocale(locale) === "sq" ? termsSq : termsEn;
}

export const LEGAL_CONTACT = {
  name: "OPTIO Digital",
  location: "Prishtina, Kosovo",
  email: CONTACT_EMAIL,
} as const;
