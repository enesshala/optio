import { ALL_FAQS } from "@/config/faqs";
import { SITE_URL } from "@/config/seo";
import { siteConfig } from "@/config/site";

type JsonLdProps = {
  lang: string;
};

export default function JsonLd({ lang }: JsonLdProps) {
  const faqs =
    ALL_FAQS[`FAQS_${lang.toUpperCase()}`] || ALL_FAQS.FAQS_EN;

  const organization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: "OPTIO",
    alternateName: "OPTIO Digital",
    url: SITE_URL,
    logo: `${SITE_URL}/lightoptio.svg`,
    email: "info@optio-digital.com",
    sameAs: [siteConfig.authors[0]?.url].filter(Boolean),
    areaServed: [
      {
        "@type": "Country",
        name: "Kosovo",
      },
      {
        "@type": "City",
        name: "Prishtina",
      },
      {
        "@type": "Place",
        name: "Worldwide",
      },
    ],
    description: siteConfig.description,
    knowsLanguage: ["en", "sq"],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.content,
      },
    })),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "OPTIO",
    url: SITE_URL,
    inLanguage: lang === "sq" ? "sq" : lang || "en",
    publisher: {
      "@type": "Organization",
      name: "OPTIO",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
