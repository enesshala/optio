"use client";

import BootcampNavLink from "@/components/header/BootcampNavLink";
import HeaderLinks from "@/components/header/HeaderLinks";
import { LangSwitcher } from "@/components/header/LangSwitcher";
import { ThemedButton } from "@/components/ThemedButton";
import { ALL_FEATURES } from "@/config/feature";
import { features } from "@/config/features";
import { localizedSectionHref } from "@/lib/footer-paths";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronDown, MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  ...(features.showProjects
    ? [{ label: "Projects", href: "Projects" }]
    : []),
  { label: "Reviews", href: "Reviews" },
  { label: "FAQ", href: "FAQ" },
];

const SERVICE_GROUPS = [
  {
    key: "platforms",
    title: "Platforms & apps",
    indices: [0, 4],
  },
  {
    key: "automation",
    title: "Automation & systems",
    indices: [1, 5],
  },
  {
    key: "commerce",
    title: "Commerce & growth",
    indices: [2, 3],
  },
] as const;

function homeHref(lang: string | string[] | undefined, section: string) {
  const segment = Array.isArray(lang) ? lang[0] : lang;
  return localizedSectionHref(segment || "en", section);
}

const Header = () => {
  const params = useParams();
  const lang = params.lang;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const serviceItems =
    ALL_FEATURES.FEATURES_EN ?? [];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 border-b border-transparent bg-[rgb(245_245_245/0.72)] backdrop-blur-[12px] transition-[opacity,border-color] duration-300 dark:bg-[rgb(9_9_11/0.72)]",
          scrolled
            ? "border-zinc-950/6 opacity-100 dark:border-white/10"
            : "opacity-0",
        )}
      />
      <nav
        aria-label="Main"
        className="relative mx-auto grid h-[67px] max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8"
      >
        <Link
          href="/"
          aria-label="OPTIO Digital"
          className="flex items-center justify-self-start"
        >
          <Image
            alt="OPTIO"
            src="/darkoptio.svg"
            width={100}
            height={32}
            className="h-8 w-auto dark:hidden"
          />
          <Image
            alt="OPTIO"
            src="/lightoptio.svg"
            width={100}
            height={32}
            className="hidden h-8 w-auto dark:block"
          />
        </Link>

        <div className="hidden items-center lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              className="cursor-pointer rounded-md px-3.5 py-4 text-[16px] font-semibold tracking-[-0.01em] text-[#171717] transition-colors hover:text-[#a1a1a1] dark:text-zinc-100"
            >
              Services
            </button>
            <div
              className={cn(
                "absolute left-0 top-full pt-[18px] transition-[opacity,transform,visibility] duration-150",
                servicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0",
              )}
            >
              <div className="rounded-lg border border-black/5 bg-[rgb(251_251_251/0.85)] py-6 pl-6 pr-14 backdrop-blur-[20px] dark:border-white/10 dark:bg-zinc-950/90">
                <div className="flex gap-12">
                  {SERVICE_GROUPS.map((group) => (
                    <div key={group.key}>
                      <p className="mb-2.5 text-[14px] font-medium text-[#737373]">
                        {group.title}
                      </p>
                      <ul>
                        {group.indices.map((idx) => {
                          const item = serviceItems[idx];
                          if (!item) return null;
                          return (
                            <li key={item.title}>
                              <Link
                                href={homeHref(lang, "Services")}
                                className="flex items-center gap-2 rounded-md py-[7px] text-[16px] font-semibold tracking-[-0.01em] text-[#171717] transition-opacity hover:opacity-75 dark:text-zinc-100"
                                onClick={() => setServicesOpen(false)}
                              >
                                {item.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
                <Link
                  href={homeHref(lang, "Services")}
                  className="mt-5 flex items-center gap-1 border-t border-black/5 pt-4 text-[14px] font-semibold text-[#171717] dark:border-white/10 dark:text-zinc-100"
                  onClick={() => setServicesOpen(false)}
                >
                  All services
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
          {NAV.map((link) => (
            <Link
              key={link.label}
              href={homeHref(lang, link.href)}
              className="cursor-pointer rounded-md px-3.5 py-4 text-[16px] font-semibold tracking-[-0.01em] text-[#171717] transition-colors hover:text-[#a1a1a1] dark:text-zinc-100"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="col-start-3 flex items-center justify-self-end gap-1">
          <Link
            href={homeHref(lang, "Contact")}
            className="hidden cursor-pointer rounded-md px-3.5 py-4 text-[16px] font-semibold tracking-[-0.01em] text-[#171717] opacity-50 transition-opacity hover:opacity-100 sm:block dark:text-zinc-100"
          >
            Contact
          </Link>
          <Link
            href={homeHref(lang, "anfrage")}
            className="group relative isolate hidden h-10 shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-[linear-gradient(180deg,#3f3f46_0%,#18181b_48%,#09090b_100%)] px-4 text-[14px] font-medium text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.2),0_0_0_1px_#09090b,0_4px_12px_-2px_rgb(9_9_11/0.28)] transition-[scale,box-shadow] duration-200 hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.26),0_0_0_1px_#09090b,0_12px_28px_-8px_rgb(16_185_129/0.55)] active:scale-[0.97] lg:inline-flex"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(75%_110%_at_50%_130%,rgb(16_185_129/0.75),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            Start a project
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <div className="ml-1 hidden items-center gap-1 lg:flex">
            <HeaderLinks />
            <ThemedButton />
            <LangSwitcher />
          </div>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className={cn(
              "ml-2 grid size-10 cursor-pointer place-items-center rounded-full bg-white shadow-[0_1px_2px_rgb(9_9_11/0.06)] ring-1 ring-zinc-950/10 transition-[scale,background-color] lg:hidden dark:bg-zinc-900",
              isMenuOpen && "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950",
            )}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <X className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </nav>

      {isMenuOpen ? (
        <div className="fixed inset-x-0 bottom-0 top-[67px] z-50 flex flex-col bg-white lg:hidden dark:bg-zinc-950">
          <nav className="flex-1 overflow-y-auto px-2 pb-6 pt-3 sm:px-5">
            <ul className="space-y-0.5">
              <li>
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between rounded-2xl px-3 py-3.5 text-left text-[22px] font-semibold tracking-[-0.025em] text-zinc-950 dark:text-zinc-50"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                >
                  Services
                  <span
                    className={cn(
                      "grid size-9 place-items-center rounded-full bg-zinc-100 transition-colors dark:bg-zinc-800",
                      mobileServicesOpen && "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950",
                    )}
                  >
                    <ChevronDown
                      className={cn(
                        "size-[18px] transition-transform",
                        mobileServicesOpen && "rotate-180",
                      )}
                    />
                  </span>
                </button>
                {mobileServicesOpen ? (
                  <div className="space-y-4 px-3 pb-4 pt-1">
                    {SERVICE_GROUPS.map((group) => (
                      <div key={group.key}>
                        <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-zinc-500">
                          {group.title}
                        </p>
                        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {group.indices.map((idx) => {
                            const item = serviceItems[idx];
                            if (!item) return null;
                            return (
                              <li key={item.title}>
                                <Link
                                  href={homeHref(lang, "Services")}
                                  className="flex items-center rounded-2xl bg-zinc-50 p-3 text-[14.5px] font-semibold ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
              </li>
              {NAV.map((link) => (
                <li key={link.label}>
                  <Link
                    href={homeHref(lang, link.href)}
                    className="block rounded-2xl px-3 py-3.5 text-[22px] font-semibold tracking-[-0.025em] text-zinc-950 dark:text-zinc-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <BootcampNavLink
                  lang={lang}
                  onNavigate={() => setIsMenuOpen(false)}
                  className="px-3 py-2"
                />
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-zinc-100 px-3 pt-4 dark:border-white/10">
              <HeaderLinks />
              <ThemedButton />
              <LangSwitcher />
            </div>
            <Link
              href={homeHref(lang, "anfrage")}
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-zinc-950 text-[15px] font-medium text-white dark:bg-white dark:text-zinc-950"
            >
              Start a project
              <ArrowRight className="size-4" />
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
