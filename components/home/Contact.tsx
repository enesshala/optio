"use client";

import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/config/site";
import { ArrowRight, Check, Star } from "lucide-react";
import Link from "next/link";

const Contact = ({
  id,
  locale,
  privacyHref = "/privacy",
}: {
  id: string;
  locale: any;
  privacyHref?: string;
}) => {
  return (
    <>
      <section className="relative overflow-hidden bg-zinc-100 px-5 py-24 text-center sm:px-8 sm:py-32 dark:bg-zinc-950">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(16_185_129/0.12),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,rgb(16_185_129/0.22),transparent_55%)]"
        />
        <div className="relative mx-auto max-w-4xl">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[14px] text-zinc-600 dark:text-white/70">
            <li className="inline-flex items-center gap-2">
              <span className="grid size-5 place-items-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                <Check className="size-3" strokeWidth={3} />
              </span>
              {locale.ctaChip1 ?? "50+ projects shipped"}
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="grid size-5 place-items-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                <Check className="size-3" strokeWidth={3} />
              </span>
              {locale.ctaChip2 ?? "Reply within 24h"}
            </li>
          </ul>
          <h2 className="mt-8 text-[2.6rem] font-medium leading-[1] tracking-[-0.045em] text-balance text-zinc-500 sm:text-6xl lg:text-[4.75rem] dark:text-white/55">
            {locale.ctaTitlePrefix ?? "Let’s build"}{" "}
            <span className="text-emerald-600 dark:text-emerald-300">
              {locale.ctaTitleAccent ?? "something big."}
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-pretty text-zinc-600 sm:text-lg dark:text-white/75">
            {locale.ctaDescription ?? locale.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#anfrage"
              className="group relative isolate inline-flex h-13 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-[linear-gradient(180deg,#3f3f46_0%,#18181b_48%,#09090b_100%)] px-6 text-[15px] font-medium text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.2),0_0_0_1px_#09090b] transition-[scale,box-shadow] hover:shadow-[0_12px_28px_-8px_rgb(16_185_129/0.55)] active:scale-[0.97] dark:ring-1 dark:ring-white/10"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(75%_110%_at_50%_130%,rgb(16_185_129/0.75),transparent_70%)] opacity-0 transition-opacity group-hover:opacity-100"
              />
              {locale.ctaButton ?? "Start a project"}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href={siteConfig.authors[0].url as string}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 items-center justify-center rounded-full border border-zinc-300 bg-white px-6 text-[15px] font-medium text-zinc-800 transition-colors hover:bg-zinc-50 dark:border-white/15 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10"
            >
              Instagram
            </Link>
          </div>
          <div className="mt-10 inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-white/60">
            <Star className="size-4 fill-amber-400 text-amber-400" />
            <span>
              {locale.rating ?? "5.0"} ·{" "}
              {locale.ratingLabel ?? "client feedback"}
            </span>
          </div>
        </div>
      </section>

      <section
        id={id}
        className="scroll-mt-28 bg-white px-5 py-20 sm:px-8 dark:bg-zinc-900"
      >
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
              {locale.eyebrow}
            </p>
            <h2 className="mt-3 text-[2rem] font-medium tracking-[-0.04em] text-zinc-950 dark:text-zinc-50">
              {locale.title}
            </h2>
            <p className="mt-3 text-[16px] text-zinc-600 dark:text-zinc-400">
              {locale.description}
            </p>
          </div>
          <div className="rounded-[28px] border border-zinc-200 bg-zinc-50/80 p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950 sm:p-8">
            <ContactForm variant="home" locale={locale.form} />
            <p className="mt-4 text-center text-xs text-zinc-500 dark:text-zinc-400">
              {locale.privacyNoticePrefix ??
                "By sending this message, you agree to our"}{" "}
              <Link
                href={privacyHref}
                className="font-medium text-emerald-600 underline underline-offset-4 hover:text-emerald-700 dark:text-emerald-400"
              >
                {locale.privacyNoticeLink ?? "Privacy Policy"}
              </Link>
              .
            </p>
            <p className="mt-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
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
        </div>
      </section>
    </>
  );
};

export default Contact;
