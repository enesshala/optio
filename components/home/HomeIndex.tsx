import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Feature from "@/components/home/Feature";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import ScrollingLogos from "@/components/home/ScrollingLogos";
import Showcase from "@/components/home/Showcase";
import SocialProof from "@/components/home/SocialProof";
import Testimonials from "@/components/home/Testimonials";
import JsonLd from "@/components/JsonLd";
import { defaultLocale, getDictionary, normalizeLocale } from "@/lib/i18n";

export default async function HomeIndex({ lang }: { lang: string }) {
  const langName = normalizeLocale(lang || defaultLocale);
  const dict = await getDictionary(langName);

  return (
    <>
      <JsonLd lang={langName} />
      <Hero locale={dict.Hero} langName={langName} CTALocale={dict.CTAButton} />
      <SocialProof locale={dict.SocialProof} />
      <ScrollingLogos />
      <Showcase id="Projects" locale={dict.Showcase} />
      <Feature id="Services" locale={dict.Feature} langName={langName} />
      <Pricing id="Pricing" locale={dict.Pricing} langName={langName} />
      <Testimonials id="Testimonials" locale={dict.Testimonials} />
      <FAQ id="FAQ" locale={dict.FAQ} langName={langName} />
      <CTA locale={dict.CTA} CTALocale={dict.CTAButton} />
    </>
  );
}
