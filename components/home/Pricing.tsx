"use client";

import { siteConfig } from "@/config/site";
import { ALL_TIERS } from "@/config/tiers";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

const Pricing = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const TIERS = ALL_TIERS[`TIERS_${langName.toUpperCase()}`];

  return (
    <section id={id} className="relative w-full pt-20 pb-8">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-1/4 top-16 h-[22rem] w-[22rem] rounded-full bg-emerald-500/10 blur-[90px]" />
        <div className="absolute left-1/4 bottom-0 h-56 w-56 rounded-full bg-emerald-600/5 blur-[70px]" />
      </div>

      <div className="mx-auto flex w-[95%] max-w-6xl flex-col items-center">
        <div className="mb-12 flex max-w-2xl flex-col items-center gap-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-500">
            {locale.eyebrow ?? "Engagements"}
          </p>
          <h2 className="text-center text-white">
            <RoughNotation type="highlight" show={true} color="#059669">
              {locale.title}
            </RoughNotation>
          </h2>
          <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-emerald-950 dark:text-zinc-100">
            {locale.title2}
          </h3>
          <p className="text-large text-default-600">{locale.description}</p>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:items-stretch">
          {TIERS?.map((tier, index) => {
            const popular = Boolean(tier.mostPopular);

            return (
              <motion.div
                key={tier.key}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 sm:p-7 transition-all duration-500",
                  popular
                    ? "border-emerald-500 bg-gradient-to-b from-emerald-50 via-white to-white shadow-[0_28px_60px_-28px_rgba(5,150,105,0.35)] dark:border-emerald-500/60 dark:from-emerald-500/20 dark:via-zinc-950 dark:to-zinc-950 dark:shadow-[0_28px_60px_-28px_rgba(5,150,105,0.45)] lg:-translate-y-2"
                    : "border-zinc-200 bg-white shadow-sm hover:border-emerald-400/60 hover:shadow-[0_24px_50px_-30px_rgba(5,150,105,0.25)] dark:border-white/10 dark:bg-zinc-950/80 dark:shadow-none dark:hover:border-emerald-500/40"
                )}
              >
                {popular && (
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent dark:via-emerald-400" />
                )}

                <div className="mb-6 flex items-start justify-between gap-3">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-500">
                      {popular
                        ? (locale.mostChosen ?? "Most chosen")
                        : `0${index + 1}`}
                    </p>
                    <h4 className="text-2xl font-bold tracking-tight text-emerald-700 dark:text-emerald-400">
                      {tier.title}
                    </h4>
                  </div>
                  {popular && (
                    <span className="shrink-0 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-700 dark:border-emerald-400/40 dark:bg-emerald-500/15 dark:text-emerald-300">
                      {locale.popular ?? "Popular"}
                    </span>
                  )}
                </div>

                <p className="mb-6 min-h-[3.5rem] text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {tier.description}
                </p>

                <div className="mb-6">
                  <p className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    {tier.price}
                  </p>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    {locale.scopedAfter ?? "Scoped after discovery"}
                  </p>
                </div>

                <div className="mb-6 h-px w-full bg-gradient-to-r from-emerald-500/50 via-zinc-200 to-transparent dark:via-white/10" />

                <ul className="mb-8 flex flex-1 flex-col gap-3">
                  {tier.features?.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-500">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-sm leading-snug text-zinc-700 dark:text-zinc-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={cn(
                    "inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white transition-all duration-300",
                    popular
                      ? "bg-emerald-600 hover:bg-emerald-500 shadow-[0_10px_30px_-12px_rgba(5,150,105,0.55)] dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:shadow-[0_10px_30px_-12px_rgba(16,185,129,0.8)]"
                      : "bg-emerald-600 hover:bg-emerald-500"
                  )}
                >
                  {tier.buttonText}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-10 text-center text-default-600"
        >
          {locale.doYouLike}&nbsp;
          <Link
            href={siteConfig.authors[0].twitter as string}
            className="font-medium text-foreground underline underline-offset-4 decoration-emerald-500/60 hover:decoration-emerald-500"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {locale.follow}
          </Link>
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
