"use client";

import WebsiteCard from "@/components/WebsiteCard";
import { collabPath } from "@/config/seo";
import { showcases } from "@/config/showcases";
import { RoughNotation } from "react-rough-notation";

const Showcase = ({
  id,
  locale,
  langName = "en",
}: {
  id: string;
  locale: any;
  langName?: string;
}) => {
  return (
    <section
      id={id}
      className="relative w-full pt-20 pb-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[100px]" />
        <div className="absolute -left-24 bottom-10 h-64 w-64 rounded-full bg-emerald-600/5 blur-[80px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] opacity-40 dark:opacity-30" />
      </div>

      <div className="mx-auto flex w-[95%] max-w-7xl flex-col items-center">
        <div className="mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-500">
            {locale.eyebrow ?? "Selected work"}
          </p>
          <h2 className="text-center text-white">
            <RoughNotation type="highlight" show={true} color="#059669">
              {locale.title}
            </RoughNotation>
          </h2>
          <p className="text-large text-default-600">{locale.description}</p>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {showcases.map((site, index) => {
            const hasCollab = Boolean(site.slug);
            return (
              <WebsiteCard
                key={site.url}
                title={site.name}
                description={site.description}
                tag={site.tag}
                image={site.image}
                url={site.url}
                href={
                  hasCollab && site.slug
                    ? collabPath(langName, site.slug)
                    : site.url
                }
                external={!hasCollab}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
