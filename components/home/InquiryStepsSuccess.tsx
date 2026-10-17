"use client";

import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { RotateCcw } from "lucide-react";

const PARTICLES = Array.from({ length: 12 }, (_, i) => {
  const angle = (i / 12) * Math.PI * 2;
  const distance = 54 + (i % 3) * 12;
  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    size: 5 + (i % 3) * 2,
    color: i % 2 === 0 ? "bg-emerald-400" : "bg-teal-300",
  };
});

type InquiryStepsSuccessProps = {
  title: string;
  body: string;
  againLabel: string;
  chips: string[];
  onReset: () => void;
};

export function InquiryStepsSuccess({
  title,
  body,
  againLabel,
  chips,
  onReset,
}: InquiryStepsSuccessProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      role="status"
      aria-live="polite"
      initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center py-4 text-center"
    >
      <div className="relative grid size-24 place-items-center">
        {!reduceMotion ? (
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full bg-emerald-400/25 dark:bg-emerald-400/20"
            initial={{ scale: 0.6, opacity: 0.8 }}
            animate={{ scale: [0.6, 1.35, 1.1], opacity: [0.8, 0, 0.35] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatDelay: 0.6,
              ease: "easeOut",
            }}
          />
        ) : null}

        {!reduceMotion
          ? PARTICLES.map((p, i) => (
              <motion.span
                key={i}
                aria-hidden
                className={`absolute rounded-full ${p.color}`}
                style={{ width: p.size, height: p.size }}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0.4 }}
                animate={{
                  x: p.x,
                  y: p.y,
                  opacity: [0, 1, 0],
                  scale: [0.4, 1, 0.6],
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.25 + (i % 4) * 0.03,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))
          : null}

        <span className="relative grid size-16 place-items-center rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 shadow-[0_12px_30px_-10px_rgb(16_185_129/0.75),inset_0_1px_0_rgb(255_255_255/0.35)]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-8"
            aria-hidden
          >
            <motion.path
              d="m5 12.5 4.5 4.5L19 7.5"
              initial={reduceMotion ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            />
          </svg>
        </span>
      </div>

      <motion.h3
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.4 }}
        className="mt-6 text-[22px] font-semibold tracking-[-0.03em] text-zinc-950 dark:text-zinc-50"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.4 }}
        className="mt-2 max-w-sm text-[14.5px] leading-relaxed text-zinc-600 dark:text-zinc-400"
      >
        {body}
      </motion.p>

      {chips.length ? (
        <motion.ul
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.4 }}
          className="mt-5 flex flex-wrap justify-center gap-2"
        >
          {chips.map((chip) => (
            <li
              key={chip}
              className="rounded-full bg-emerald-50 px-3 py-1 text-[12.5px] font-medium text-emerald-800 ring-1 ring-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-200 dark:ring-emerald-400/20"
            >
              {chip}
            </li>
          ))}
        </motion.ul>
      ) : null}

      <Button
        type="button"
        variant="ghost"
        onClick={onReset}
        className="mt-6 cursor-pointer gap-2 rounded-full text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        <RotateCcw className="size-4" />
        {againLabel}
      </Button>
    </motion.div>
  );
}
