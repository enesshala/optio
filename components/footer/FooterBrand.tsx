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

export function FooterBrand({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      <Link
        href="/"
        className="inline-flex w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        aria-label="OPTIO Digital home"
      >
        <Image
          src="/lightoptio.svg"
          alt="OPTIO"
          width={112}
          height={32}
          className="h-8 w-auto"
        />
      </Link>
      <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
        {siteConfig.description}
      </p>
      <div className="flex items-center gap-2">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            aria-label={link.name}
            className="flex size-10 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <link.icon className="size-[18px]" aria-hidden />
          </Link>
        ))}
      </div>
    </div>
  );
}
