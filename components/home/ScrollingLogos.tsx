"use client";

import { LOGOS } from "@/config/logos";
import { useTheme } from "next-themes";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ScrollingLogos = ({ locale }: { locale?: { title?: string } }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section className="relative overflow-hidden border-y border-zinc-950/5 bg-white/40 py-10 dark:border-white/5 dark:bg-zinc-950/40">
      <p className="sr-only">{locale?.title ?? "Built with modern stacks"}</p>
      <Marquee direction="left" autoFill pauseOnHover speed={36}>
        {LOGOS.map((image, index) => (
          <div
            className="mx-10 flex items-center opacity-50 transition-opacity hover:opacity-100"
            key={`${image.name}-${index}`}
          >
            <Image
              src={image.image}
              alt={image.name}
              width={48}
              height={48}
              className={`h-9 w-9 object-contain ${
                isDark ? "invert grayscale" : "grayscale"
              }`}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ScrollingLogos;
