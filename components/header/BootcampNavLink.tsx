"use client";

import { bootcampPath } from "@/config/seo";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function BootcampNavLink({
  lang,
  onNavigate,
  className = "",
}: {
  lang?: string | string[];
  onNavigate?: () => void;
  className?: string;
}) {
  const locale = Array.isArray(lang) ? lang[0] : lang;
  const href = bootcampPath(locale || "en", "2026");

  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
    >
      <Link
        href={href}
        aria-label="OPTIO Bootcamp 2026"
        title="OPTIO Bootcamp 2026"
        onClick={onNavigate}
        className="bootcamp-nav-link group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-emerald-400/40 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 px-3.5 py-1.5 text-sm font-semibold text-white shadow-[0_0_0_0_rgba(16,185,129,0.45)] transition-shadow hover:shadow-[0_0_20px_2px_rgba(16,185,129,0.35)]"
      >
        <span
          aria-hidden
          className="bootcamp-nav-shimmer pointer-events-none absolute inset-0"
        />
        <motion.span
          aria-hidden
          animate={{ rotate: [0, -12, 12, 0], scale: [1, 1.15, 1] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            repeatDelay: 1.2,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <Sparkles className="h-3.5 w-3.5" strokeWidth={2.25} />
        </motion.span>
        <span className="relative tracking-wide">Bootcamp</span>
        <motion.span
          aria-hidden
          animate={{ y: [0, -2, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative rounded-full bg-white/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm"
        >
          ×3
        </motion.span>
      </Link>
    </motion.div>
  );
}
