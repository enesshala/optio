"use client";

import { TestimonialsData } from "@/config/testimonials";
import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Testimonials = ({ id, locale }: { id: string; locale: any }) => {
  const rating = locale.rating ?? "5.0";
  const count = locale.count ?? String(TestimonialsData.length);
  const reduceMotion = useReducedMotion();

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

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
          className="group/rating relative isolate w-fit"
        >
          <div
            aria-hidden
            className="absolute -inset-3 -z-10 rounded-[28px] bg-[radial-gradient(closest-side,rgb(16_185_129/0.35),transparent_70%)] opacity-70 blur-md transition-opacity duration-300 group-hover/rating:opacity-100 dark:bg-[radial-gradient(closest-side,rgb(16_185_129/0.45),transparent_70%)]"
          />
          <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-white via-white to-emerald-50/80 p-[1px] shadow-[0_1px_2px_rgb(9_9_11/0.04),0_18px_40px_-20px_rgb(5_150_105/0.55)] ring-1 ring-emerald-500/15 dark:from-zinc-900 dark:via-zinc-950 dark:to-emerald-950/50 dark:shadow-[0_18px_40px_-18px_rgb(16_185_129/0.45)] dark:ring-emerald-400/20">
            <div className="relative flex items-center gap-3.5 rounded-[21px] bg-white/90 px-4 py-3.5 backdrop-blur-xl dark:bg-zinc-950/90">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent"
              />
              <span className="relative grid size-12 place-items-center overflow-hidden rounded-xl bg-gradient-to-b from-emerald-50 to-emerald-100/80 text-emerald-600 shadow-[inset_0_1px_0_white,0_0_0_1px_rgb(16_185_129/0.12),0_8px_16px_-8px_rgb(16_185_129/0.55)] dark:from-emerald-500/20 dark:to-emerald-950/60 dark:text-emerald-300 dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(16_185_129/0.25)]">
                <motion.span
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          rotate: [0, -8, 8, 0],
                          scale: [1, 1.12, 1],
                        }
                  }
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    repeatDelay: 1.6,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <Star className="size-5 fill-current drop-shadow-[0_0_8px_rgb(16_185_129/0.55)]" />
                </motion.span>
              </span>
              <div className="pr-1">
                <div className="mb-1 flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={reduceMotion ? false : { opacity: 0, y: 4 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.08 * i, duration: 0.3 }}
                    >
                      <Star className="size-3 fill-current" />
                    </motion.span>
                  ))}
                </div>
                <p className="text-[28px] font-semibold leading-none tracking-[-0.03em] tabular-nums text-zinc-950 dark:text-zinc-50">
                  {rating}
                  <span className="text-[18px] font-medium text-zinc-400 dark:text-zinc-500">
                    /5
                  </span>
                </p>
                <p className="mt-1 text-[13px] text-zinc-600 dark:text-zinc-400">
                  {locale.ratingLabel ?? "from client feedback"}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
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
