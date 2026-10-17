"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { TECH_STACK } from "@/config/techStack";
import { useReducedMotion } from "framer-motion";
import Marquee from "react-fast-marquee";

type TechStackLocale = {
  eyebrow?: string;
  titlePrefix?: string;
  titleAccent?: string;
  description?: string;
  aiLabel?: string;
};

const pillClass =
  "whitespace-nowrap rounded-full bg-white px-4 py-2 text-[14px] font-medium text-zinc-700 shadow-[0_1px_2px_rgb(9_9_11/0.04)] ring-1 ring-zinc-950/[0.07] transition-colors hover:text-emerald-700 hover:ring-emerald-500/30 dark:bg-white/[0.04] dark:text-zinc-300 dark:shadow-none dark:ring-white/10 dark:hover:text-emerald-300 dark:hover:ring-emerald-400/30";

function MarqueeRow({
  items,
  direction,
  reduceMotion,
}: {
  items: string[];
  direction: "left" | "right";
  reduceMotion: boolean;
}) {
  if (reduceMotion) {
    return (
      <ul className="flex flex-wrap justify-center gap-3">
        {items.map((item) => (
          <li key={item} className={pillClass}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <Marquee
        direction={direction}
        autoFill
        pauseOnHover
        speed={30}
        gradient={false}
        className="py-1.5"
      >
        {items.map((item) => (
          <span key={item} className={`mx-1.5 inline-block ${pillClass}`}>
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

const TechStack = ({ locale }: { locale?: TechStackLocale }) => {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="tech"
      className="relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 mx-auto h-[360px] max-w-[900px] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(16_185_129/0.12),transparent)] dark:bg-[radial-gradient(closest-side,rgb(16_185_129/0.18),transparent)]"
      />

      <div className="mx-auto max-w-7xl">
        <FadeIn className="mb-14 text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            {locale?.eyebrow ?? "Technology"}
          </p>
          <h2 className="mt-4 text-[2.25rem] font-medium leading-[1.05] tracking-[-0.04em] text-balance text-zinc-950 sm:text-5xl dark:text-zinc-50">
            {locale?.titlePrefix ?? "Built with the"}{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              {locale?.titleAccent ?? "right tools"}
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[16px] leading-relaxed text-pretty text-zinc-600 dark:text-zinc-400">
            {locale?.description ??
              "These are the tools we use most, not a fixed list. We work in your stack, or pick the one that fits the project."}
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.08} className="flex flex-col gap-1.5">
        <MarqueeRow
          items={TECH_STACK.apps}
          direction="left"
          reduceMotion={reduceMotion}
        />
        <MarqueeRow
          items={TECH_STACK.infra}
          direction="right"
          reduceMotion={reduceMotion}
        />
      </FadeIn>

      <FadeIn delay={0.16}>
        <div className="mx-auto mt-12 flex max-w-[900px] flex-col items-center gap-4 rounded-2xl border border-zinc-950/[0.07] bg-white/60 px-6 py-6 backdrop-blur sm:flex-row sm:px-8 dark:border-white/10 dark:bg-white/[0.02]">
          <div className="flex shrink-0 items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.2em] text-zinc-900 dark:text-white">
            <span aria-hidden className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-emerald-500/60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {locale?.aiLabel ?? "AI"}
          </div>
          <span
            aria-hidden
            className="hidden h-6 w-px bg-zinc-950/10 sm:block dark:bg-white/10"
          />
          <ul className="flex flex-wrap justify-center gap-2.5 sm:justify-start">
            {TECH_STACK.ai.map((item) => (
              <li key={item} className={pillClass}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </section>
  );
};

export default TechStack;
