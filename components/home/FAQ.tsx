"use client";

import { ALL_FAQS } from "@/config/faqs";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, PlusIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const FAQ = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const FAQS = ALL_FAQS[`FAQS_${langName.toUpperCase()}`] ?? [];
  const reduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={id} className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-400">
            <span aria-hidden className="h-px w-7 bg-emerald-600" />
            FAQ
          </p>
          <h2 className="mt-6 text-[2.25rem] font-medium leading-[1.05] tracking-[-0.04em] text-balance text-zinc-950 sm:text-5xl xl:text-[3.5rem] dark:text-zinc-50">
            {locale.titlePrefix ?? "Common questions."}{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              {locale.titleAccent ?? "Clear answers."}
            </span>
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-pretty text-zinc-600 dark:text-zinc-400">
            {locale.description}
          </p>

          <div className="mt-10 rounded-[28px] bg-white/40 p-1.5 shadow-[0_2px_4px_rgb(9_9_11/0.04),0_30px_60px_-30px_rgb(5_150_105/0.35)] ring-1 ring-white/70 backdrop-blur-xl dark:bg-zinc-950/40 dark:ring-white/10">
            <div className="rounded-[22px] bg-white p-4 sm:p-6 dark:bg-zinc-950">
              <p className="text-[17px] font-semibold tracking-[-0.02em] text-zinc-950 dark:text-zinc-50">
                {locale.sideTitle ?? "Don’t see your question?"}
              </p>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                {locale.sideDescription ??
                  "Write us directly — you talk to the people who ship your project."}
              </p>
              <Link
                href="#Contact"
                className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-emerald-700 hover:text-emerald-800 dark:text-emerald-400"
              >
                {locale.sideCta ?? "Get in touch"}
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            const number = String(index + 1).padStart(2, "0");
            return (
              <div
                key={item.title}
                className="overflow-hidden rounded-2xl border border-zinc-950/8 bg-white dark:border-white/10 dark:bg-zinc-950/60"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-start gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="pt-0.5 font-mono text-[13px] text-emerald-700 dark:text-emerald-400">
                    {number}
                  </span>
                  <span className="flex-1 text-[16px] font-semibold tracking-[-0.02em] text-zinc-950 sm:text-[17px] dark:text-zinc-50">
                    {item.title}
                  </span>
                  <span
                    className={cn(
                      "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-transform dark:bg-zinc-800 dark:text-zinc-300",
                      isOpen && "rotate-45 bg-emerald-50 text-emerald-700",
                    )}
                  >
                    <PlusIcon className="size-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={
                        reduceMotion ? undefined : { height: 0, opacity: 0 }
                      }
                      transition={{
                        duration: 0.28,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 pl-[3.25rem] text-[15px] leading-relaxed text-zinc-600 sm:px-6 sm:pl-[3.75rem] dark:text-zinc-400">
                        {item.content}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
