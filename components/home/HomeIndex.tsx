import Contact from "@/components/home/Contact";
import FAQ from "@/components/home/FAQ";
import Feature from "@/components/home/Feature";
import Hero from "@/components/home/Hero";
import ScrollingLogos from "@/components/home/ScrollingLogos";
import Showcase from "@/components/home/Showcase";
import Testimonials from "@/components/home/Testimonials";
import JsonLd from "@/components/JsonLd";
import { features } from "@/config/features";
import { legalPath } from "@/config/seo";
import { defaultLocale, getDictionary, normalizeLocale } from "@/lib/i18n";

export default async function HomeIndex({ lang }: { lang: string }) {
  const langName = normalizeLocale(lang || defaultLocale);
  const dict = await getDictionary(langName);

  return (
    <>
      <JsonLd lang={langName} />
      <Hero
        locale={dict.Hero}
        langName={langName}
        inquiryLocale={dict.Inquiry as any}
      />
      <ScrollingLogos locale={dict.Logos as any} />
      <Testimonials id="Reviews" locale={dict.Testimonials} />
      {features.showProjects ? (
        <Showcase id="Projects" locale={dict.Showcase} langName={langName} />
      ) : null}
      <Feature id="Services" locale={dict.Feature} langName={langName} />
      <FAQ id="FAQ" locale={dict.FAQ} langName={langName} />
      <Contact
        id="Contact"
        locale={dict.Contact}
        privacyHref={legalPath(langName, "privacy")}
      />
    </>
  );
}
