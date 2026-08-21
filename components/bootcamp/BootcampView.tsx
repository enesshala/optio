"use client";

import BootcampRobot from "@/components/bootcamp/BootcampRobot";
import BootcampRobotGuide from "@/components/bootcamp/BootcampRobotGuide";
import CTA from "@/components/home/CTA";
import type { Bootcamp } from "@/config/bootcamps";
import { localePath } from "@/config/seo";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Crosshair,
  Flame,
  Gamepad2,
  Shield,
  Sparkles,
  Swords,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { FaLinkedin } from "react-icons/fa";
import { RoughNotation } from "react-rough-notation";

/** Mobile-only robot (desktop uses BootcampRobotGuide). */
function BootcampRobotMobile({ spawnLabel }: { spawnLabel: string }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setActive(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (!active) return null;
  return <BootcampRobot spawnLabel={spawnLabel} />;
}

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

const PHASE_XP = [400, 600, 800, 900, 1200, 1500];
const OUTCOME_ICONS = [Trophy, Zap, Award];
const FORMAT_ICONS = [Target, Shield, Flame];
const STACK_ICONS = [Crosshair, Swords, Sparkles];

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
      <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-500">
        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
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
      <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-teal-500/5 blur-[90px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] opacity-40 dark:opacity-30" />
    </div>
  );
}

function XpBar({ label, levels }: { label: string; levels: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="w-full max-w-md">
      <div className="mb-2 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-400">
        <span className="inline-flex items-center gap-1.5">
          <Gamepad2 className="h-3.5 w-3.5" />
          {label}
        </span>
        <span>{levels}</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full border border-emerald-500/30 bg-zinc-200/80 dark:bg-zinc-900">
        <motion.div
          className="bootcamp-xp-fill h-full rounded-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-teal-300"
          initial={{ width: "0%" }}
          animate={inView ? { width: "18%" } : { width: "0%" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
      </div>
    </div>
  );
}

function HudChip({
  children,
  accent,
}: {
  children: ReactNode;
  accent?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] backdrop-blur-md ${
        accent
          ? "bootcamp-nav-link border-emerald-400/50 bg-emerald-500/20 text-emerald-800 dark:text-emerald-200"
          : "border-zinc-300/80 bg-white/50 text-zinc-600 dark:border-white/15 dark:bg-black/40 dark:text-zinc-300"
      }`}
    >
      {children}
    </span>
  );
}

export default function BootcampView({
  bootcamp,
  lang,
  ctaLocale,
  ctaSectionLocale,
}: {
  bootcamp: Bootcamp;
  lang: string;
  ctaLocale: any;
  ctaSectionLocale: any;
}) {
  const homeHref = localePath(lang);
  const { gameUi } = bootcamp;
  const trackRef = useRef<HTMLDivElement>(null);
  const spawnLabel = lang === "sq" ? "Duke u ngarkuar…" : "Spawning…";

  return (
    <div className="relative w-full">
      <AmbientBackground />

      <div ref={trackRef} className="relative mx-auto w-[95%] max-w-7xl">
        <BootcampRobotGuide trackRef={trackRef} spawnLabel={spawnLabel} />

        <div className="relative z-10">
          {/* Hero — leave room on the right for the robot at scroll start */}
          <section className="pb-10 pt-8 md:min-h-[70vh] md:pb-16 md:pt-12">
            <motion.div {...fadeUp}>
              <Link
                href={homeHref}
                className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-emerald-700 dark:text-zinc-400 dark:hover:text-emerald-400"
              >
                OPTIO
              </Link>
            </motion.div>

            <div className="flex max-w-xl flex-col gap-5 lg:max-w-2xl">
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.04 }}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-500"
              >
                <Sparkles className="h-3.5 w-3.5" />
                {bootcamp.brandName} · {gameUi.season}
              </motion.p>

              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.06 }}
                className="flex flex-wrap items-center gap-2"
              >
                <HudChip accent>{bootcamp.statusLabel}</HudChip>
                <HudChip>{gameUi.hudSeats}</HudChip>
                <HudChip>{gameUi.hudWeeks}</HudChip>
                <HudChip>{gameUi.hudQuests}</HudChip>
                <HudChip accent>
                  <Trophy className="h-3 w-3" />
                  {gameUi.hudReward}
                </HudChip>
              </motion.div>

              <HeroTitle title={bootcamp.headline} />

              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.12 }}
                className="max-w-xl text-lg leading-relaxed text-slate-700 dark:text-slate-300 sm:text-xl"
              >
                {bootcamp.summary}
              </motion.p>

              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.14 }}
                className="max-w-xl text-base font-semibold leading-relaxed text-emerald-800 dark:text-emerald-300"
              >
                {bootcamp.promise}
              </motion.p>

              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.16 }}
              >
                <XpBar label={gameUi.xpLabel} levels={gameUi.xpLevels} />
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.18 }}
                className="mt-2 flex flex-wrap items-center gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    href={bootcamp.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bootcamp-nav-link group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_-4px_rgba(16,185,129,0.55)]"
                  >
                    <span
                      aria-hidden
                      className="bootcamp-nav-shimmer pointer-events-none absolute inset-0"
                    />
                    <Sparkles className="relative h-4 w-4" />
                    <span className="relative">{gameUi.startRun}</span>
                    <ArrowUpRight className="relative h-4 w-4" />
                  </Link>
                </motion.div>
                <a
                  href="#curriculum"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-transparent px-5 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:border-emerald-500/50 hover:text-emerald-800 dark:border-white/15 dark:text-zinc-300 dark:hover:border-emerald-500/40 dark:hover:text-white"
                >
                  <Swords className="h-4 w-4" />
                  {gameUi.viewQuests}
                </a>
              </motion.div>
            </div>
          </section>

          <div className="mb-8 h-[22rem] sm:h-[26rem] lg:hidden">
            <BootcampRobotMobile spawnLabel={spawnLabel} />
          </div>

          {/* Outcomes / Achievements */}
          <section className="py-16 md:py-20">
        <SectionHeading
          eyebrow={gameUi.achievements}
          title={bootcamp.outcomesTitle}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {bootcamp.outcomes.map((outcome, index) => {
            const Icon = OUTCOME_ICONS[index] || Trophy;
            return (
              <motion.div
                key={outcome.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-white/90 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-zinc-950/85 dark:shadow-none"
              >
                <div
                  aria-hidden
                  className="bootcamp-nav-shimmer pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="relative mb-4 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-400">
                    +{(index + 1) * 500} {gameUi.xpGain}
                  </span>
                </div>
                <h3 className="relative !mb-3 !text-xl text-emerald-950 sm:!text-2xl dark:text-zinc-100">
                  {outcome.title}
                </h3>
                <p className="relative text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {outcome.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Trainer / Party lead */}
      <section className="py-16 md:py-20">
        <SectionHeading
          eyebrow={gameUi.partyLead}
          title={bootcamp.trainerTitle}
        />
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-white/90 p-6 shadow-sm backdrop-blur-sm dark:bg-zinc-950/85 dark:shadow-none sm:p-8"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(5,150,105,0.12),_transparent_55%)]"
          />
          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
            <div className="relative shrink-0">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(16,185,129,0.35)",
                    "0 0 0 12px rgba(16,185,129,0)",
                    "0 0 0 0 rgba(16,185,129,0)",
                  ],
                }}
                transition={{ duration: 2.6, repeat: Infinity }}
                className="flex h-24 w-24 items-center justify-center rounded-2xl border border-emerald-500/40 bg-emerald-500/15 text-2xl font-bold tracking-wide text-emerald-700 dark:text-emerald-400"
              >
                {bootcamp.trainer.initials}
              </motion.div>
              <span className="absolute -bottom-2 -right-2 rounded-full border border-emerald-400/40 bg-emerald-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                Lv. ∞
              </span>
            </div>
            <div className="max-w-2xl">
              <h3 className="!mb-1 !text-2xl text-emerald-950 sm:!text-3xl dark:text-white">
                {bootcamp.trainer.name}
              </h3>
              <p className="mb-4 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                {bootcamp.trainer.role}
              </p>
              <p className="mb-5 text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
                {bootcamp.trainer.bio}
              </p>
              <Link
                href={bootcamp.trainer.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                <FaLinkedin className="h-4 w-4" />
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stack / Loadout */}
      <section className="py-16 md:py-20">
        <SectionHeading
          eyebrow={gameUi.loadout}
          title={bootcamp.stackTitle}
          description={bootcamp.stackDescription}
        />
        <div className="grid gap-5 sm:grid-cols-3">
          {bootcamp.stack.map((item, index) => {
            const Icon = STACK_ICONS[index] || Sparkles;
            return (
              <motion.div
                key={item.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-zinc-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-zinc-950/85 dark:shadow-none"
              >
                <div className="mb-3 flex items-center justify-between">
                  <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-700/80 dark:text-emerald-500">
                    Slot 0{index + 1}
                  </span>
                </div>
                <h3 className="!mb-2 !text-xl text-emerald-950 dark:text-zinc-100">
                  {item.name}
                </h3>
                <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Curriculum / Quest board */}
      <section
        id="curriculum"
        className="scroll-mt-24 py-16 md:py-20"
      >
        <SectionHeading
          className="mb-12 max-w-2xl"
          eyebrow={gameUi.questBoard}
          title={bootcamp.curriculumTitle}
          description={bootcamp.curriculumDescription}
        />

        <ol className="relative space-y-0">
          {bootcamp.phases.map((phase, index) => {
            const xp = PHASE_XP[index] ?? 500;
            return (
              <motion.li
                key={phase.title}
                {...fadeUp}
                transition={{
                  ...fadeUp.transition,
                  delay: index * 0.05,
                }}
                className="relative flex gap-5 pb-10 last:pb-0 md:gap-8"
              >
                <div className="flex flex-col items-center">
                  <motion.span
                    whileInView={{ scale: [0.85, 1.08, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/25 to-emerald-600/10 text-sm font-bold text-emerald-800 shadow-[0_0_18px_-6px_rgba(16,185,129,0.6)] dark:text-emerald-300"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.span>
                  {index < bootcamp.phases.length - 1 && (
                    <span
                      aria-hidden
                      className="mt-2 w-px flex-1 bg-gradient-to-b from-emerald-500/60 via-emerald-500/25 to-transparent"
                    />
                  )}
                </div>
                <motion.div
                  className="flex-1 rounded-2xl border border-transparent px-3 py-3 md:px-4"
                  initial={false}
                  whileHover={{
                    y: -2,
                    backgroundColor: "rgba(16, 185, 129, 0.04)",
                    borderColor: "rgba(16, 185, 129, 0.22)",
                    transition: {
                      type: "spring",
                      stiffness: 280,
                      damping: 24,
                      mass: 0.6,
                    },
                  }}
                >
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-400">
                      {gameUi.quest} {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                      {phase.weeksLabel}
                    </span>
                    <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
                      <Zap className="h-3 w-3" />+{xp} {gameUi.xpGain}
                    </span>
                  </div>
                  <h3 className="!mb-2 !text-xl text-emerald-950 sm:!text-2xl dark:text-zinc-100">
                    {phase.title}
                  </h3>
                  <p className="mb-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {phase.description}
                  </p>
                  <ul className="max-w-2xl space-y-2">
                    {phase.topics.map((topic, ti) => (
                      <motion.li
                        key={topic}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: ti * 0.04 }}
                        className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400 sm:text-base"
                      >
                        <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-emerald-500/40 bg-emerald-500/10 text-[9px] font-bold text-emerald-600 dark:text-emerald-400">
                          ✓
                        </span>
                        {topic}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.li>
            );
          })}
        </ol>
      </section>

      {/* Format / Power-ups */}
      <section className="py-16 md:py-20">
        <SectionHeading
          eyebrow={gameUi.powerUps}
          title={bootcamp.formatTitle}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {bootcamp.formatItems.map((item, index) => {
            const Icon = FORMAT_ICONS[index] || Flame;
            return (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl border border-zinc-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-zinc-950/85 dark:shadow-none"
              >
                <Icon className="mb-3 h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="!mb-3 !text-xl text-emerald-950 sm:!text-2xl dark:text-zinc-100">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Internship / Legendary */}
      <section className="py-16 md:py-20">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-2xl border border-emerald-300/60 bg-gradient-to-b from-emerald-50 via-white to-white px-6 py-10 shadow-sm dark:border-emerald-500/30 dark:bg-zinc-950/80 dark:from-transparent dark:via-transparent dark:to-transparent dark:shadow-none sm:px-10 sm:py-14"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(5,150,105,0.16),_transparent_55%)]"
          />
          <div
            aria-hidden
            className="bootcamp-nav-shimmer pointer-events-none absolute inset-0 opacity-40"
          />
          <div className="relative mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
            <Trophy className="h-3.5 w-3.5" />
            {gameUi.legendary}
          </div>
          <h2 className="relative !mb-5 !text-3xl text-emerald-950 sm:!text-4xl dark:text-white">
            {bootcamp.internshipTitle}
          </h2>
          <p className="relative mb-8 max-w-3xl text-lg leading-relaxed text-zinc-700 sm:text-xl dark:text-zinc-300">
            {bootcamp.internshipBody}
          </p>
          <ul className="relative grid gap-3 sm:grid-cols-2">
            {bootcamp.internshipHighlights.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex items-start gap-3 rounded-xl border border-emerald-500/15 bg-white/50 px-3 py-3 text-base text-zinc-700 dark:border-white/10 dark:bg-black/20 dark:text-zinc-300"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-500/15 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                  {index + 1}
                </span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <SectionHeading
          eyebrow={bootcamp.faqEyebrow}
          title={bootcamp.faqTitle}
        />
        <div className="mx-auto max-w-3xl divide-y divide-zinc-200 dark:divide-white/10">
          {bootcamp.faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.04 }}
              className="py-6"
            >
              <h3 className="!mb-2 !text-lg text-emerald-950 sm:!text-xl dark:text-zinc-100">
                {faq.question}
              </h3>
              <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Apply / Join raid */}
      <section className="py-16 md:py-20">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-2xl border border-emerald-500/30 px-6 py-10 sm:px-10 sm:py-14"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(5,150,105,0.18),_transparent_55%)]"
          />
          <p className="relative mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-500">
            <Flame className="h-3.5 w-3.5" />
            {gameUi.joinRaid}
          </p>
          <h2 className="relative !mb-4 !text-3xl text-emerald-950 sm:!text-4xl dark:text-white">
            {bootcamp.applyBandTitle}
          </h2>
          <p className="relative mb-8 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {bootcamp.applyBandBody}
          </p>
          <motion.div
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="relative inline-flex"
          >
            <Link
              href={bootcamp.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bootcamp-nav-link relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 px-6 py-3 text-sm font-semibold text-white"
            >
              <span
                aria-hidden
                className="bootcamp-nav-shimmer pointer-events-none absolute inset-0"
              />
              <Sparkles className="relative h-4 w-4" />
              <span className="relative">{bootcamp.applyBandCta}</span>
              <ArrowUpRight className="relative h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
        </div>
      </div>

      <CTA locale={ctaSectionLocale} CTALocale={ctaLocale} />
    </div>
  );
}
