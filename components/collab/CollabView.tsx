"use client";

import CTA from "@/components/home/CTA";
import type { Collab } from "@/config/collabs";
import { localePath } from "@/config/seo";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { RoughNotation } from "react-rough-notation";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

/** Opacity-only fade — RoughNotation mis-sizes when a parent uses transform. */
function SectionHeading({
  eyebrow,
  title,
  description,
  className = "mb-10 max-w-2xl",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className={className}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-500">
        {eyebrow}
      </p>
      <h2 className="!text-3xl text-white sm:!text-4xl">
        <RoughNotation
          type="highlight"
          show={inView}
          color="#059669"
          animationDuration={800}
          multiline
        >
          {title}
        </RoughNotation>
      </h2>
      {description ? (
        <p className="mt-4 text-large text-default-600">{description}</p>
      ) : null}
    </div>
  );
}

function HeroTitle({ title }: { title: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <h1
      ref={ref}
      className="!mb-0 !text-5xl text-white sm:!text-6xl lg:!text-7xl"
    >
      <RoughNotation
        type="highlight"
        show={inView}
        color="#059669"
        animationDuration={900}
        multiline
      >
        {title}
      </RoughNotation>
    </h1>
  );
}

function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute left-1/2 top-0 h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[100px]" />
      <div className="absolute -left-24 bottom-10 h-64 w-64 rounded-full bg-emerald-600/5 blur-[80px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] opacity-40 dark:opacity-30" />
    </div>
  );
}

function GalleryPlaceholder({ label }: { label: string }) {
  return (
    <div className="group relative flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 dark:border-white/15 dark:bg-zinc-950/80">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(5,150,105,0.08),_transparent_65%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] dark:opacity-50" />
      <ImageIcon
        className="relative mb-3 h-8 w-8 text-zinc-400 transition-colors group-hover:text-emerald-600 dark:text-zinc-500 dark:group-hover:text-emerald-500/80"
        strokeWidth={1.5}
      />
      <p className="relative max-w-[14rem] px-4 text-center text-xs font-medium leading-relaxed tracking-wide text-zinc-500 dark:text-zinc-500">
        {label}
      </p>
      <p className="relative mt-2 text-[10px] uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600">
        Coming soon
      </p>
    </div>
  );
}

export default function CollabView({
  collab,
  lang,
  ctaLocale,
  ctaSectionLocale,
}: {
  collab: Collab;
  lang: string;
  ctaLocale: any;
  ctaSectionLocale: any;
}) {
  const projectsHref = `${localePath(lang)}#Projects`;
  const hostname = collab.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className="relative w-full">
      <AmbientBackground />

      {/* Hero */}
      <section className="mx-auto w-[95%] max-w-7xl pb-16 pt-8 md:pt-12">
        <motion.div {...fadeUp}>
          <Link
            href={projectsHref}
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-emerald-700 dark:text-zinc-400 dark:hover:text-emerald-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </motion.div>

        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="flex flex-col gap-5">
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.06 }}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-500"
            >
              Collaboration
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.08 }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center rounded-md border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-700 backdrop-blur-md dark:border-white/15 dark:bg-black/40 dark:text-emerald-300">
                {collab.tag}
              </span>
              <span className="text-sm text-zinc-500 dark:text-zinc-500">{hostname}</span>
            </motion.div>
            {/* No transform parent — RoughNotation needs a stable box to paint the highlight */}
            <HeroTitle title={collab.name} />
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.14 }}
              className="max-w-xl text-lg leading-relaxed text-slate-700 dark:text-slate-300 sm:text-xl"
            >
              {collab.summary}
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.18 }}
              className="mt-2 flex flex-wrap items-center gap-3"
            >
              <Link
                href={collab.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
              >
                Visit site
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href={projectsHref}
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-transparent px-5 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:border-emerald-500/50 hover:text-emerald-800 dark:border-white/15 dark:text-zinc-300 dark:hover:border-emerald-500/40 dark:hover:text-white"
              >
                All projects
              </Link>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.12 }}
            className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.2)] dark:border-white/10 dark:bg-zinc-950 dark:shadow-[0_20px_50px_-28px_rgba(0,0,0,0.75)]"
          >
            <Image
              src={collab.coverImage}
              alt={`${collab.name} project preview`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(5,150,105,0.15),_transparent_55%)]" />
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto w-[95%] max-w-7xl py-16 md:py-20">
        <SectionHeading
          eyebrow="Overview"
          title="From brief to brand presence"
        />
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.06 }}
          >
            <h3 className="!mb-3 !text-xl text-emerald-700 sm:!text-2xl dark:text-emerald-300">
              Challenge
            </h3>
            <p className="text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
              {collab.challenge}
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.12 }}
          >
            <h3 className="!mb-3 !text-xl text-emerald-700 sm:!text-2xl dark:text-emerald-300">
              Approach
            </h3>
            <p className="text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
              {collab.approach}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto w-[95%] max-w-7xl py-16 md:py-20">
        <SectionHeading
          className="mb-12 max-w-2xl"
          eyebrow="Process"
          title="Idea to completion"
          description="A structured path from first conversation to a live, professional presence."
        />

        <ol className="relative space-y-0">
          {collab.process.map((step, index) => (
            <motion.li
              key={step.title}
              {...fadeUp}
              transition={{
                ...fadeUp.transition,
                delay: index * 0.06,
              }}
              className="relative flex gap-5 pb-10 last:pb-0 md:gap-8"
            >
              <div className="flex flex-col items-center">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-600/30 bg-emerald-500/10 text-sm font-bold text-emerald-700 dark:border-emerald-500/40 dark:text-emerald-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {index < collab.process.length - 1 && (
                  <span
                    aria-hidden
                    className="mt-2 w-px flex-1 bg-gradient-to-b from-emerald-500/50 to-transparent dark:from-emerald-500/40"
                  />
                )}
              </div>
              <div className="pb-2 pt-1.5">
                <h3 className="!mb-2 !text-xl text-emerald-950 sm:!text-2xl dark:text-zinc-100">
                  {step.title}
                </h3>
                <p className="max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* Gallery */}
      <section className="mx-auto w-[95%] max-w-7xl py-16 md:py-20">
        <SectionHeading
          eyebrow="Collaboration"
          title="In the studio"
          description="Moments from working together in the studio."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
          {collab.gallery.map((slot, index) => (
            <motion.div
              key={slot.id}
              {...fadeUp}
              transition={{
                ...fadeUp.transition,
                delay: index * 0.06,
              }}
            >
              {slot.src ? (
                <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10">
                  <Image
                    src={slot.src}
                    alt={slot.label}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/75 via-zinc-950/20 to-transparent p-4 pt-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm font-medium text-white">{slot.label}</p>
                  </div>
                </div>
              ) : (
                <GalleryPlaceholder label={slot.label} />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="mx-auto w-[95%] max-w-7xl py-16 md:py-20">
        <SectionHeading eyebrow="Deliverables" title="What we shipped" />
        <ul className="grid gap-3 sm:grid-cols-2">
          {collab.deliverables.map((item, index) => (
            <motion.li
              key={item}
              {...fadeUp}
              transition={{
                ...fadeUp.transition,
                delay: index * 0.04,
              }}
              className="flex items-start gap-3 border-b border-zinc-200 py-4 dark:border-white/10"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600 ring-4 ring-emerald-500/15 dark:bg-emerald-500 dark:ring-emerald-500/20" />
              <span className="text-base text-zinc-700 sm:text-lg dark:text-zinc-300">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Outcome */}
      <section className="mx-auto w-[95%] max-w-7xl py-16 md:py-20">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-2xl border border-emerald-200/80 bg-gradient-to-b from-emerald-50 via-white to-white px-6 py-10 shadow-sm dark:border-white/10 dark:bg-zinc-950/80 dark:from-transparent dark:via-transparent dark:to-transparent dark:shadow-none sm:px-10 sm:py-14"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(5,150,105,0.12),_transparent_55%)]"
          />
          <p className="relative mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-500">
            Outcome
          </p>
          <h2 className="relative !mb-5 !text-3xl text-emerald-950 sm:!text-4xl dark:text-white">
            The result
          </h2>
          <p className="relative max-w-3xl text-lg leading-relaxed text-zinc-700 sm:text-xl dark:text-zinc-300">
            {collab.outcome}
          </p>
          <Link
            href={collab.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            Explore {hostname}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>

      {/* Closing CTA — shared home component */}
      <CTA locale={ctaSectionLocale} CTALocale={ctaLocale} />
    </div>
  );
}
