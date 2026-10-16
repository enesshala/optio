"use client";

import InquirySteps from "@/components/home/InquirySteps";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Clock, FolderKanban, Star } from "lucide-react";
import { useEffect, useState } from "react";

const DEFAULT_KEYWORDS = [
  "Platforms",
  "Automation & AI",
  "E-commerce",
  "Digital Growth",
  "Web Apps",
  "Integrations",
];

const Hero = ({
  locale,
  langName,
  inquiryLocale,
}: {
  locale: any;
  langName: string;
  inquiryLocale?: any;
}) => {
  const keywords: string[] = locale.keywords?.length
    ? locale.keywords
    : DEFAULT_KEYWORDS;
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion || keywords.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % keywords.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [keywords.length, reduceMotion]);

  const stats = [
    {
      value: locale.statProjects ?? "50+",
      label: locale.statProjectsLabel ?? "Projects shipped",
      icon: FolderKanban,
    },
    {
      value: locale.statRating ?? "5.0/5",
      label: locale.statRatingLabel ?? "Client rating",
      icon: Star,
    },
    {
      value: locale.statReply ?? "24h",
      label: locale.statReplyLabel ?? "Response time",
      icon: Clock,
    },
  ];

  return (
    <section
      lang={langName}
      className="relative isolate overflow-hidden px-5 pb-16 pt-[calc(67px+2.5rem)] sm:px-8 sm:pb-20 sm:pt-[calc(67px+3.5rem)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[1100px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(16_185_129/0.14),transparent)] dark:bg-[radial-gradient(closest-side,rgb(16_185_129/0.2),transparent)]"
      />

      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 xl:gap-20">
        <div className="min-w-0">
          <a
            href="#anfrage"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-3 pr-3 text-[13px] font-medium text-zinc-700 shadow-[0_1px_2px_rgb(10_10_11/0.05)] ring-1 ring-zinc-950/6 transition-shadow hover:shadow-[0_4px_12px_-4px_rgb(9_9_11/0.15)] dark:bg-zinc-900 dark:text-zinc-200 dark:ring-white/10"
          >
            <span className="relative flex size-2">
              <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-60 motion-safe:animate-ping" />
              <span className="relative size-2 rounded-full bg-emerald-500" />
            </span>
            {locale.eyebrow ?? "Open capacity for new projects"}
          </a>

          <h1 className="mt-7 text-[2.6rem] font-medium leading-[1.02] tracking-[-0.045em] text-balance text-zinc-950 sm:text-6xl sm:leading-[1] lg:text-[4.1rem] xl:text-[4.75rem] dark:text-zinc-50">
            <span className="sr-only">
              {locale.titlePrefix ?? "Growth through"}{" "}
              {keywords.join(", ")}
            </span>
            <span aria-hidden className="block">
              {locale.titlePrefix ?? "Growth through"}
            </span>
            <span
              aria-hidden
              className="relative mt-1 block min-h-[1.05em] text-emerald-600 dark:text-emerald-400"
            >
              {reduceMotion ? (
                keywords[0]
              ) : (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={keywords[index]}
                    initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block whitespace-nowrap"
                  >
                    {keywords[index]}
                  </motion.span>
                </AnimatePresence>
              )}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-pretty text-zinc-600 sm:text-lg dark:text-zinc-400">
            {locale.description}
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-5 min-[400px]:grid-cols-3 sm:gap-6">
            {stats.map((stat) => (
              <li
                key={stat.label}
                className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row xl:items-center"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-b from-white to-emerald-50 text-emerald-600 shadow-[inset_0_1px_0_white,0_0_0_1px_rgb(9_9_11/0.07),0_4px_12px_-4px_rgb(16_185_129/0.35)] dark:from-zinc-900 dark:to-emerald-950/40 dark:text-emerald-400">
                  <stat.icon className="size-5" />
                </span>
                <p className="flex min-w-0 flex-col gap-1">
                  <span className="text-[18px] font-medium leading-tight tracking-[-0.03em] text-zinc-950 tabular-nums sm:text-[24px] dark:text-zinc-50">
                    {stat.value}
                  </span>
                  <span className="text-[13px] leading-snug text-zinc-700 dark:text-zinc-400">
                    {stat.label}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div
          id="anfrage"
          className="mx-auto w-full min-w-0 max-w-[480px] scroll-mt-28 lg:mx-0 lg:justify-self-end"
        >
          <InquirySteps locale={inquiryLocale} embedded />
        </div>
      </div>
    </section>
  );
};

export default Hero;
