"use client";

import { collabPath } from "@/config/seo";
import { showcases } from "@/config/showcases";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Showcase = ({
  id,
  locale,
  langName = "en",
}: {
  id: string;
  locale: any;
  langName?: string;
}) => {
  const cards = [...showcases, ...showcases];

  return (
    <section id={id} className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[900px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(16_185_129/0.12),transparent)] dark:bg-[radial-gradient(closest-side,rgb(16_185_129/0.18),transparent)]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-400">
          <span aria-hidden className="h-px w-7 bg-emerald-600 dark:bg-emerald-400" />
          {locale.eyebrow ?? "Selected work"}
        </p>
        <h2 className="mt-6 max-w-2xl text-[2.25rem] font-medium leading-[1.05] tracking-[-0.04em] text-balance text-zinc-950 sm:text-5xl lg:text-[3.5rem] dark:text-zinc-50">
          {locale.titlePrefix ?? "Own ideas."}{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            {locale.titleAccent ?? "Real projects."}
          </span>
        </h2>
        <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-pretty text-zinc-600 dark:text-zinc-400">
          {locale.description}
        </p>
      </div>

      <div className="mt-12">
        <Marquee direction="left" pauseOnHover speed={34} gradient={false}>
          {cards.map((site, index) => {
            const hasCollab = Boolean(site.slug);
            const href =
              hasCollab && site.slug
                ? collabPath(langName, site.slug)
                : site.url;
            const number = String((index % showcases.length) + 1).padStart(
              2,
              "0",
            );

            return (
              <article
                key={`${site.url}-${index}`}
                className="mx-2.5 w-[min(88vw,400px)] shrink-0 sm:w-[420px]"
              >
                <Link
                  href={href}
                  {...(hasCollab
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  className="group block overflow-hidden rounded-[28px] bg-zinc-100 ring-1 ring-zinc-950/6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-32px_rgba(5,150,105,0.4)] dark:bg-zinc-900 dark:ring-white/10 dark:hover:shadow-[0_28px_60px_-32px_rgba(16,185,129,0.35)]"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={site.image}
                      alt={`${site.name} project preview`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="420px"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/75 via-zinc-950/20 to-transparent" />
                    <div className="absolute left-4 top-4 flex items-center gap-2">
                      <span className="rounded-md bg-white/95 px-2 py-1 text-[11px] font-bold tabular-nums text-zinc-800 backdrop-blur dark:bg-zinc-950/80 dark:text-zinc-100">
                        {number}
                      </span>
                      <span className="rounded-md border border-white/30 bg-black/40 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur">
                        {site.tag}
                      </span>
                    </div>
                    <span className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-xl border border-white/20 bg-black/35 text-white backdrop-blur transition-colors group-hover:border-emerald-400/50 group-hover:bg-emerald-600">
                      <ArrowUpRight className="size-5" />
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="text-[13px] font-medium text-emerald-200">
                        {locale.viewProject ?? "View project"}
                      </p>
                      <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">
                        {site.name}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-sm text-white/75">
                        {site.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
};

export default Showcase;
