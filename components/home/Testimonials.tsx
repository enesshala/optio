"use client";

import { TestimonialsData } from "@/config/testimonials";
import { Star } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Testimonials = ({ id, locale }: { id: string; locale: any }) => {
  const rating = locale.rating ?? "5.0";
  const count = locale.count ?? String(TestimonialsData.length);

  const cards = [...TestimonialsData, ...TestimonialsData];

  return (
    <section
      id={id}
      className="group/reviews relative isolate overflow-hidden py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[1100px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(16_185_129/0.14),transparent)] dark:bg-[radial-gradient(closest-side,rgb(16_185_129/0.18),transparent)]"
      />

      <div className="mx-auto grid max-w-7xl items-end gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-2 pr-3.5 text-[13px] font-medium text-zinc-700 shadow-[0_1px_2px_rgb(9_9_11/0.05)] ring-1 ring-zinc-950/6 dark:bg-zinc-900 dark:text-zinc-300 dark:ring-white/10">
            <span className="flex gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" />
              ))}
            </span>
            {locale.badge ?? "Client reviews"}
          </span>
          <h2 className="mt-6 max-w-2xl text-[2.25rem] font-medium leading-[1.05] tracking-[-0.04em] text-balance text-zinc-950 sm:text-5xl lg:text-[3.5rem] dark:text-zinc-50">
            {locale.titlePrefix ?? `${count} reviews.`}{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              {locale.titleAccent ?? "All five stars."}
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-pretty text-zinc-600 dark:text-zinc-400">
            {locale.description1} {locale.description2}
            {locale.description3}
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-[22px] bg-white p-4 shadow-[0_1px_2px_rgb(9_9_11/0.04)] ring-1 ring-zinc-950/6 dark:bg-zinc-950 dark:ring-white/10">
          <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-b from-white to-emerald-50 text-emerald-600 dark:from-zinc-900 dark:to-emerald-950/40">
            <Star className="size-5 fill-current" />
          </span>
          <div>
            <p className="text-[28px] font-medium tracking-[-0.03em] tabular-nums text-zinc-950 dark:text-zinc-50">
              {rating}
              <span className="text-zinc-400">/5</span>
            </p>
            <p className="text-[13px] text-zinc-600 dark:text-zinc-400">
              {locale.ratingLabel ?? "from client feedback"}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <Marquee direction="left" pauseOnHover speed={32} gradient={false}>
          {cards.map((testimonial, index) => (
            <article
              key={`${testimonial.user.username}-${index}`}
              className="mx-2.5 flex w-[340px] shrink-0 flex-col gap-4 rounded-[24px] border border-zinc-950/6 bg-white p-5 shadow-[0_1px_2px_rgb(9_9_11/0.04)] sm:w-[380px] sm:p-6 dark:border-white/10 dark:bg-zinc-950"
            >
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
              <p className="flex-1 text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
                “{testimonial.content}”
              </p>
              <div className="flex items-center gap-3 border-t border-zinc-100 pt-4 dark:border-white/10">
                <Image
                  src={testimonial.user.image}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 rounded-full object-cover object-top"
                />
                <div>
                  <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                    {testimonial.user.name}
                  </p>
                  <p className="text-xs text-zinc-500">
                    {locale.reviewSource ?? "OPTIO client"}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
