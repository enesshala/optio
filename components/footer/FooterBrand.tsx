"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { SiInstagram } from "react-icons/si";

const socialLinks = [
  {
    name: "Instagram",
    href: siteConfig.authors[0]?.url ?? "https://www.instagram.com/optio.digital/",
    icon: SiInstagram,
    external: true,
  },
  {
    name: "Email",
    href: "mailto:info@optio-digital.com",
    icon: Mail,
    external: true,
  },
] as const;

export function FooterBrand({
  className,
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <div className={cn("flex flex-col gap-5", className)}>
      <Link
        href="/"
        className="inline-flex w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        aria-label="OPTIO Digital home"
      >
        {isDark ? (
          <Image
            src="/lightoptio.svg"
            alt="OPTIO"
            width={112}
            height={32}
            className="h-8 w-auto"
          />
        ) : (
          <>
            <Image
              src="/darkoptio.svg"
              alt="OPTIO"
              width={112}
              height={32}
              className="h-8 w-auto dark:hidden"
            />
            <Image
              src="/lightoptio.svg"
              alt="OPTIO"
              width={112}
              height={32}
              className="hidden h-8 w-auto dark:block"
            />
          </>
        )}
      </Link>
      {!isDark ? (
        <p className="max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {siteConfig.description}
        </p>
      ) : null}
      <div className="flex items-center gap-2">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            aria-label={link.name}
            className={cn(
              "flex size-10 cursor-pointer items-center justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
              isDark
                ? "border border-white/10 bg-white/5 text-white/80 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-white"
                : "border border-zinc-200 bg-white text-zinc-600 hover:border-emerald-500/40 hover:bg-emerald-50 hover:text-emerald-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300",
            )}
          >
            <link.icon className="size-[18px]" aria-hidden />
          </Link>
        ))}
      </div>
    </div>
  );
}
