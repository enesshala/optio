"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const WebsiteCard = ({
  title,
  description,
  tag,
  image,
  url,
  href,
  external = true,
  index = 0,
}: {
  title: string;
  description: string;
  tag: string;
  image: string;
  /** Live site hostname display source */
  url: string;
  /** Navigation target — collab page or live site */
  href: string;
  external?: boolean;
  index?: number;
}) => {
  const hostname = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="w-full group"
    >
      <Link
        href={href}
        title={title}
        aria-label={external ? `Visit ${title}` : `View ${title} collaboration`}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="block relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.75)] transition-[border-color,box-shadow,transform] duration-500 hover:border-emerald-500/50 hover:shadow-[0_28px_60px_-24px_rgba(5,150,105,0.35)] hover:-translate-y-1"
      >
        <div className="relative aspect-[16/11] overflow-hidden">
          <Image
            src={image}
            alt={`${title} project preview`}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/55 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(5,150,105,0.18),_transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center rounded-md border border-white/15 bg-black/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300 backdrop-blur-md">
              {tag}
            </span>
          </div>

          <div className="absolute top-4 right-4">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-black/35 text-white backdrop-blur-md transition-all duration-400 group-hover:border-emerald-400/60 group-hover:bg-emerald-500 group-hover:text-white group-hover:rotate-12">
              <ArrowUpRight className="h-5 w-5 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <p className="mb-2 text-xs font-medium tracking-wide text-emerald-300/90">
              {hostname}
            </p>
            <h3 className="mb-2 text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
              {title}
            </h3>
            <p className="max-w-md text-sm sm:text-base text-zinc-300 line-clamp-2 transition-all duration-500 group-hover:text-zinc-200">
              {description}
            </p>
            <div className="mt-4 h-px w-12 bg-emerald-500/70 transition-all duration-500 group-hover:w-24" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default WebsiteCard;
