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
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
        {title}
      </h2>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item.href + item.label}>
            <Link
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="cursor-pointer text-sm text-zinc-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
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
    { label: "Packages", href: localizedSectionHref(lang, "Pricing") },
    { label: "Testimonials", href: localizedSectionHref(lang, "Testimonials") },
  ];

  const companyLinks: NavItem[] = [
    { label: "Bootcamp 2026", href: localizedBootcampHref(lang) },
    { label: "FAQs", href: localizedSectionHref(lang, "FAQ") },
    { label: "Contact", href: localizedSectionHref(lang, "Contact") },
    {
      label: "Instagram",
      href: "https://www.instagram.com/optio.digital/",
      external: true,
    },
  ];

  return (
    <footer className="mt-16 border-t border-white/10 bg-zinc-950 text-zinc-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-8">
          <div className="lg:col-span-4">
            <FooterBrand />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            <FooterNavColumn title="Work" items={workLinks} />
            <FooterNavColumn title="Company" items={companyLinks} />
            <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Contact
              </h2>
              <div className="flex flex-col gap-2 text-sm leading-relaxed">
                <p className="font-medium text-zinc-200">{LEGAL_CONTACT.name}</p>
                <p className="text-zinc-400">{LEGAL_CONTACT.location}</p>
                <Link
                  href={`mailto:${LEGAL_CONTACT.email}`}
                  className="w-fit cursor-pointer text-emerald-400 transition-colors hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  {LEGAL_CONTACT.email}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-xs text-zinc-500">
              © {currentYear} {LEGAL_CONTACT.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <Link
                href={legalPath(lang, "privacy")}
                className="cursor-pointer text-xs text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                {legalLabels.privacy}
              </Link>
              <Link
                href={legalPath(lang, "terms")}
                className="cursor-pointer text-xs text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
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
                      ? "cursor-pointer rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300"
                      : "cursor-pointer rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400 transition-colors hover:border-white/20 hover:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
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
