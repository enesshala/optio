"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { Check, Send, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type BootcampSendButtonProps = {
  disabled?: boolean;
  isSubmitting: boolean;
  sent: boolean;
  label: string;
  submittingLabel: string;
  successLabel: string;
  className?: string;
};

const SPARKLES = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  x: Math.cos((i / 10) * Math.PI * 2) * (36 + (i % 3) * 14),
  y: Math.sin((i / 10) * Math.PI * 2) * (28 + (i % 2) * 16),
  delay: i * 0.025,
  size: 4 + (i % 3) * 2,
}));

const CONFETTI = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  x: (i % 2 === 0 ? -1 : 1) * (24 + (i % 5) * 18),
  y: -12 - (i % 4) * 22,
  rotate: (i % 7) * 52 - 26,
  color:
    i % 3 === 0
      ? "bg-emerald-300"
      : i % 3 === 1
        ? "bg-amber-300"
        : "bg-white/90",
}));

const labelVariants: Variants = {
  initial: { opacity: 0, y: 14, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -12, filter: "blur(4px)" },
};

export function BootcampSendButton({
  disabled,
  isSubmitting,
  sent,
  label,
  submittingLabel,
  successLabel,
  className,
}: BootcampSendButtonProps) {
  const reducedMotion = useReducedMotion();
  const [launching, setLaunching] = useState(false);

  useEffect(() => {
    if (isSubmitting && !sent) {
      setLaunching(true);
    }
    if (!isSubmitting && !sent) {
      setLaunching(false);
    }
  }, [isSubmitting, sent]);

  const phase = useMemo(() => {
    if (sent) return "success";
    if (isSubmitting || launching) return "sending";
    return "idle";
  }, [sent, isSubmitting, launching]);

  if (reducedMotion) {
    return (
      <button
        type="submit"
        disabled={disabled}
        className={cn(
          "relative inline-flex h-12 min-w-[220px] items-center justify-center gap-2 overflow-hidden rounded-xl bg-emerald-600 px-8 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 disabled:opacity-60",
          sent && "bg-emerald-700",
          className
        )}
      >
        {sent ? (
          <>
            <Check className="h-4 w-4" />
            {successLabel}
          </>
        ) : isSubmitting ? (
          submittingLabel
        ) : (
          label
        )}
      </button>
    );
  }

  return (
    <motion.button
      type="submit"
      disabled={disabled}
      aria-busy={isSubmitting}
      aria-live="polite"
      initial={false}
      animate={
        phase === "success"
          ? { scale: 1, boxShadow: "0 0 0 0 rgba(16,185,129,0)" }
          : phase === "sending"
            ? {
                scale: [1, 0.96, 1.02, 1],
                boxShadow: [
                  "0 0 0 0 rgba(16,185,129,0.35)",
                  "0 0 0 10px rgba(16,185,129,0)",
                  "0 0 0 0 rgba(16,185,129,0)",
                ],
              }
            : { scale: 1 }
      }
      whileHover={
        disabled
          ? undefined
          : {
              scale: 1.03,
              boxShadow: "0 12px 40px -12px rgba(16,185,129,0.65)",
            }
      }
      whileTap={disabled ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative inline-flex h-12 min-w-[240px] items-center justify-center overflow-hidden rounded-xl px-8 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70",
        phase === "success"
          ? "bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600"
          : "bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600",
        className
      )}
    >
      {/* Ambient shimmer */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        animate={
          phase === "idle"
            ? { backgroundPosition: ["0% 50%", "200% 50%"] }
            : { opacity: phase === "success" ? 0.35 : 0.8 }
        }
        transition={
          phase === "idle"
            ? { duration: 2.8, repeat: Infinity, ease: "linear" }
            : { duration: 0.3 }
        }
        style={{
          backgroundImage:
            "linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.35) 45%, transparent 70%)",
          backgroundSize: "200% 100%",
        }}
      />

      {/* Pulse ring on send */}
      <AnimatePresence>
        {phase === "sending" && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-emerald-200/70"
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 0, scale: 1.25 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* Spark burst */}
      <AnimatePresence>
        {phase === "sending" && (
          <>
            {SPARKLES.map((spark) => (
              <motion.span
                key={spark.id}
                aria-hidden
                className="pointer-events-none absolute rounded-full bg-amber-200 shadow-[0_0_10px_rgba(251,191,36,0.8)]"
                style={{ width: spark.size, height: spark.size }}
                initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                animate={{
                  x: spark.x,
                  y: spark.y,
                  opacity: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.65,
                  delay: spark.delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Success confetti */}
      <AnimatePresence>
        {phase === "success" &&
          CONFETTI.map((piece) => (
            <motion.span
              key={piece.id}
              aria-hidden
              className={cn(
                "pointer-events-none absolute h-2 w-2 rounded-[2px]",
                piece.color
              )}
              initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 0 }}
              animate={{
                x: piece.x,
                y: piece.y,
                opacity: 0,
                rotate: piece.rotate,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
                delay: piece.id * 0.03,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          ))}
      </AnimatePresence>

      {/* Flying plane */}
      <AnimatePresence>
        {phase === "sending" && (
          <>
            <motion.span
              aria-hidden
              className="pointer-events-none absolute left-[18%] top-1/2 -translate-y-1/2"
              initial={{ opacity: 1, x: 0, y: 0, rotate: -12, scale: 1 }}
              animate={{
                opacity: [1, 1, 0],
                x: [0, 28, 140],
                y: [0, -10, -48],
                rotate: [-12, -8, -28],
                scale: [1, 1.1, 0.85],
              }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <Send className="h-5 w-5 fill-white/20 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.65)]" />
            </motion.span>
            <motion.span
              aria-hidden
              className="pointer-events-none absolute left-[18%] top-1/2 h-0.5 w-16 -translate-y-1/2 rounded-full bg-gradient-to-r from-white/80 via-emerald-200/60 to-transparent"
              initial={{ opacity: 0.9, x: 0, scaleX: 0.2 }}
              animate={{ opacity: 0, x: 90, scaleX: 1.4 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Label stack */}
      <span className="relative z-10 flex items-center gap-2">
        <AnimatePresence mode="wait" initial={false}>
          {phase === "success" ? (
            <motion.span
              key="success"
              className="flex items-center gap-2"
              variants={labelVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35 }}
            >
              <motion.span
                initial={{ scale: 0, rotate: -40 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 420, damping: 16 }}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20"
              >
                <Check className="h-4 w-4" />
              </motion.span>
              <span>{successLabel}</span>
              <Sparkles className="h-4 w-4 text-amber-200" />
            </motion.span>
          ) : phase === "sending" ? (
            <motion.span
              key="sending"
              className="flex items-center gap-2"
              variants={labelVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <span>{submittingLabel}</span>
              <span className="flex gap-1">
                {[0, 1, 2].map((dot) => (
                  <motion.span
                    key={dot}
                    className="h-1.5 w-1.5 rounded-full bg-white/90"
                    animate={{ y: [0, -5, 0], opacity: [0.45, 1, 0.45] }}
                    transition={{
                      duration: 0.7,
                      repeat: Infinity,
                      delay: dot * 0.12,
                    }}
                  />
                ))}
              </span>
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              className="flex items-center gap-2"
              variants={labelVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <motion.span
                animate={{ x: [0, 2, 0], rotate: [0, -8, 0] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Send className="h-4 w-4" />
              </motion.span>
              <span>{label}</span>
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </motion.button>
  );
}
