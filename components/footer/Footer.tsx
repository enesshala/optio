import { FooterBrand } from "@/components/footer/FooterBrand";
import { features } from "@/config/features";
import { getLegalLabels, LEGAL_CONTACT } from "@/config/legal";
import { legalPath } from "@/config/seo";
import {
  localizedBootcampHref,
  localizedSectionHref,
} from "@/lib/footer-paths";
import {
  defaultLocale,
  localeNames,
  localesDisplayOrder,
  normalizeLocale,
} from "@/lib/i18n";
import { headers } from "next/headers";
import Link from "next/link";

type NavItem = { label: string; href: string; external?: boolean };

function FooterNavColumn({
  title,
  items,
}: {
  title: string;
  items: NavItem[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-white/40">
        {title}
      </h2>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item.href + item.label}>
            <Link
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="cursor-pointer text-sm text-zinc-600 transition-colors hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-white/70 dark:hover:text-white dark:focus-visible:ring-emerald-400"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Footer = async () => {
  const headersList = await headers();
  const lang = normalizeLocale(headersList.get("x-locale") || defaultLocale);
  const legalLabels = getLegalLabels(lang);
  const currentYear = new Date().getFullYear();

  const workLinks: NavItem[] = [
    ...(features.showProjects
      ? [
          {
            label: "Projects",
            href: localizedSectionHref(lang, "Projects"),
          },
        ]
      : []),
    { label: "Services", href: localizedSectionHref(lang, "Services") },
    { label: "Reviews", href: localizedSectionHref(lang, "Reviews") },
    { label: "Contact", href: localizedSectionHref(lang, "Contact") },
  ];

  const companyLinks: NavItem[] = [
    { label: "Bootcamp 2026", href: localizedBootcampHref(lang) },
    { label: "FAQs", href: localizedSectionHref(lang, "FAQ") },
    {
      label: "Instagram",
      href: "https://www.instagram.com/optio.digital/",
      external: true,
    },
  ];

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-white/10 dark:bg-zinc-950 dark:text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <FooterBrand />
            <h2 className="mt-10 text-[2.5rem] font-medium leading-[1] tracking-[-0.045em] text-zinc-950 sm:text-[3.5rem] dark:text-white">
              Good ideas.
              <span className="mt-1 block text-balance text-zinc-400 dark:text-white/40">
                Start with hello.
              </span>
            </h2>
            <Link
              href={`mailto:${LEGAL_CONTACT.email}`}
              className="mt-8 inline-flex items-center gap-2 text-[19px] font-medium tracking-[-0.02em] text-zinc-950 underline decoration-zinc-300 decoration-1 underline-offset-[10px] transition-[text-decoration-color] hover:decoration-emerald-500 sm:text-[22px] dark:text-white dark:decoration-white/20 dark:hover:decoration-emerald-400"
            >
              {LEGAL_CONTACT.email}
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <FooterNavColumn title="Work" items={workLinks} />
            <FooterNavColumn title="Company" items={companyLinks} />
            <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-white/40">
                Contact
              </h2>
              <div className="flex flex-col gap-2 text-sm leading-relaxed text-zinc-600 dark:text-white/70">
                <p className="font-medium text-zinc-950 dark:text-white">
                  {LEGAL_CONTACT.name}
                </p>
                <p>{LEGAL_CONTACT.location}</p>
                <Link
                  href={`mailto:${LEGAL_CONTACT.email}`}
                  className="w-fit cursor-pointer text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  {LEGAL_CONTACT.email}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-zinc-200 pt-8 dark:border-white/10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-xs text-zinc-500 dark:text-white/40">
              © {currentYear} {LEGAL_CONTACT.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <Link
                href={legalPath(lang, "privacy")}
                className="cursor-pointer text-xs text-zinc-500 transition-colors hover:text-zinc-950 dark:text-white/50 dark:hover:text-white"
              >
                {legalLabels.privacy}
              </Link>
              <Link
                href={legalPath(lang, "terms")}
                className="cursor-pointer text-xs text-zinc-500 transition-colors hover:text-zinc-950 dark:text-white/50 dark:hover:text-white"
              >
                {legalLabels.terms}
              </Link>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {localesDisplayOrder.map((localeKey) => {
              const isActive = localeKey === lang;
              return (
                <Link
                  key={localeKey}
                  href={localeKey === defaultLocale ? "/" : `/${localeKey}`}
                  className={
                    isActive
                      ? "cursor-pointer rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300"
                      : "cursor-pointer rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-800 dark:border-white/10 dark:text-white/50 dark:hover:border-white/20 dark:hover:text-white"
                  }
                  aria-current={isActive ? "page" : undefined}
                >
                  {localeNames[localeKey]}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
