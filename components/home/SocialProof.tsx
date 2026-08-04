"use client";

import { Makers } from "@/config/makers";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const SocialProof = ({ locale }: { locale: any }) => {
  const count = locale.count ?? "50+";
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="flex flex-col items-center justify-center gap-20 pt-16">
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-center justify-center">
          {Makers.map((user, index) => {
            const isActive = active === index;

            return (
              <div
                key={user.name}
                className="relative"
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(index)}
                onBlur={() => setActive(null)}
              >
                <button
                  type="button"
                  aria-expanded={isActive}
                  aria-label={`${user.name}, ${user.role}`}
                  className="relative z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full"
                  style={{ zIndex: isActive ? 30 : 10 - index }}
                >
                  <motion.span
                    className="block"
                    animate={{
                      scale: isActive ? 1.12 : 1,
                      y: isActive ? -4 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 420, damping: 24 }}
                  >
                    <Image
                      src={user.image}
                      alt={user.name}
                      height={44}
                      width={44}
                      className={`rounded-full -mx-[6px] border-2 object-cover transition-[border-color,box-shadow] duration-300 ${
                        isActive
                          ? "border-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.25)]"
                          : "border-white dark:border-zinc-800"
                      }`}
                    />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      role="tooltip"
                      initial={{ opacity: 0, y: 12, scale: 0.88, rotate: -2 }}
                      animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, y: 8, scale: 0.92, rotate: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 22,
                      }}
                      className="absolute left-1/2 bottom-[calc(100%+14px)] z-50 w-56 -translate-x-1/2 pointer-events-none"
                    >
                      <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-zinc-950/95 p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl">
                        <div
                          aria-hidden
                          className="absolute -top-10 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-emerald-500/25 blur-2xl"
                        />
                        <div className="relative">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
                            {user.role}
                          </p>
                          <p className="mt-1 text-lg font-bold tracking-tight text-white">
                            {user.name}
                          </p>
                          <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                            {user.vibe}
                          </p>
                          <div className="mt-3 h-px w-10 bg-gradient-to-r from-emerald-400 to-transparent" />
                        </div>
                        <div
                          aria-hidden
                          className="absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-r border-b border-emerald-500/30 bg-zinc-950"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          <span className="text-primary font-semibold text-base">{count}</span>{" "}
          {locale.maker}
        </p>
      </div>
    </section>
  );
};

export default SocialProof;
