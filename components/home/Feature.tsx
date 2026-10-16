"use client";

import { ALL_FEATURES } from "@/config/feature";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const GROUP_KEYS = ["platforms", "automation", "commerce"] as const;

const DEFAULT_GROUPS = {
  platforms: {
    title: "Platforms & apps",
    description: "Custom systems and customer-facing products.",
    indices: [0, 4],
  },
  automation: {
    title: "Automation & systems",
    description: "AI workflows and reliable integrations.",
    indices: [1, 5],
  },
  commerce: {
    title: "Commerce & growth",
    description: "Stores, funnels, and acquisition systems.",
    indices: [2, 3],
  },
};

const Feature = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const FEATURES = ALL_FEATURES[`FEATURES_${langName.toUpperCase()}`] ?? [];
  const groupsLocale = locale.groups ?? {};

  return (
    <section id={id} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <div>
            <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-400">
              <span aria-hidden className="h-px w-7 bg-emerald-600" />
              {locale.eyebrow ?? "Services"}
            </p>
            <h2 className="mt-5 max-w-2xl text-[2.25rem] font-medium leading-[1.05] tracking-[-0.045em] text-balance text-zinc-950 sm:text-5xl lg:text-[3.5rem] dark:text-zinc-50">
              {locale.titlePrefix ?? "What we"}{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                {locale.titleAccent ?? "deliver."}
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-pretty text-zinc-600 dark:text-zinc-400">
              {locale.description ??
                "Six capabilities, grouped the way growth teams actually buy."}
            </p>
          </div>
          <Link
            href="#Contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-zinc-950 px-5 py-3 text-[14px] font-medium text-white transition-[background-color,scale] hover:bg-emerald-700 active:scale-[0.98] dark:bg-white dark:text-zinc-950 dark:hover:bg-emerald-100"
          >
            {locale.allCta ?? "Start with a service"}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-12 border-t border-zinc-950/15 sm:mt-16 dark:border-white/10">
          {GROUP_KEYS.map((key, groupIndex) => {
            const defaults = DEFAULT_GROUPS[key];
            const groupMeta = groupsLocale[key] ?? {};
            const items = defaults.indices
              .map((i) => FEATURES[i])
              .filter(Boolean);
            const number = String(groupIndex + 1).padStart(2, "0");

            return (
              <div
                key={key}
                className="grid gap-7 border-b border-zinc-950/15 py-8 lg:grid-cols-[minmax(0,0.37fr)_minmax(0,1fr)] lg:gap-12 lg:py-10 dark:border-white/10"
              >
                <div className="flex items-start gap-5 lg:gap-7">
                  <span className="pt-1 font-mono text-[13px] text-emerald-700 dark:text-emerald-400">
                    {number}
                  </span>
                  <div>
                    <h3 className="text-[1.5rem] font-semibold tracking-[-0.03em] text-zinc-950 sm:text-[1.75rem] dark:text-zinc-50">
                      {groupMeta.title ?? defaults.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {groupMeta.description ?? defaults.description}
                    </p>
                  </div>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {items.map((feature) => (
                    <li key={feature.title}>
                      <div className="flex h-full items-start gap-3 rounded-2xl bg-zinc-50/80 p-4 ring-1 ring-zinc-950/5 transition-colors hover:bg-white hover:ring-emerald-500/20 dark:bg-zinc-900/50 dark:ring-white/10 dark:hover:bg-zinc-900">
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-emerald-600 shadow-sm ring-1 ring-zinc-950/6 dark:bg-zinc-950 dark:text-emerald-400 dark:ring-white/10">
                          {feature.icon && typeof feature.icon === "string" ? (
                            <span className="text-lg">{feature.icon}</span>
                          ) : (
                            React.createElement(feature.icon, {
                              className: "size-5",
                            })
                          )}
                        </span>
                        <div>
                          <p className="font-semibold tracking-[-0.01em] text-zinc-950 dark:text-zinc-50">
                            {feature.title}
                          </p>
                          <p className="mt-1 text-[14px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                            {feature.content}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;
