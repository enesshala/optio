import CTAButton from "@/components/home/CTAButton";
import { RoughNotation } from "react-rough-notation";

const CTA = ({ locale, CTALocale }: { locale: any; CTALocale: any }) => {
  return (
    <section className="mx-auto flex w-full max-w-[88%] flex-col items-center justify-center gap-12 py-16">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-center">{locale.title}</h2>
        <p className="text-large text-slate-700 dark:text-slate-300">
          <RoughNotation type="box" color="#059669" show={true}>
            {locale.description1}
          </RoughNotation>{" "}
          {locale.description2}{" "}
          <RoughNotation type="box" color="#059669" show={true}>
            {locale.description3}
          </RoughNotation>{" "}
          {locale.description4}{" "}
          <RoughNotation type="box" color="#059669" show={true}>
            {locale.description5}
          </RoughNotation>
          {locale.description6}
        </p>
      </div>
      <CTAButton locale={CTALocale} />
    </section>
  );
};

export default CTA;
