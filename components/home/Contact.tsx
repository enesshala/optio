import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

const Contact = ({ id, locale }: { id: string; locale: any }) => {
  return (
    <section
      id={id}
      className="mx-auto flex w-[95%] max-w-2xl flex-col items-center pt-16 pb-8"
    >
      <div className="mb-10 flex max-w-xl flex-col items-center gap-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-500">
          {locale.eyebrow}
        </p>
        <h2 className="text-center text-white">
          <RoughNotation type="highlight" show={true} color="#059669">
            {locale.title}
          </RoughNotation>
        </h2>
        <p className="text-large text-default-600">{locale.description}</p>
      </div>

      <div className="w-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950/80 sm:p-8">
        <ContactForm variant="home" locale={locale.form} />
        <p className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
          {locale.orInstagram}{" "}
          <Link
            href={siteConfig.authors[0].url as string}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-emerald-600 underline underline-offset-4 hover:text-emerald-700 dark:text-emerald-400"
          >
            @optio.digital
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Contact;
