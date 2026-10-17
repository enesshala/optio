"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useParams, usePathname, useRouter } from "next/navigation";

import {
  defaultLocale,
  localeNames,
  localesDisplayOrder,
} from "@/lib/i18n";

export const LangSwitcher = () => {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const langName = (params.lang as string) || defaultLocale;

  const handleSwitchLanguage = (value: string) => {
    const pathSegments = pathname
      .split("/")
      .filter((segment) => segment !== "");
    let newPath;

    if (pathSegments[0] === params.lang) {
      // Current path has a language code
      newPath = pathSegments.slice(1).join("/");
    } else {
      // Current path doesn't have a language code
      newPath = pathSegments.join("/");
    }

    if (value === defaultLocale) {
      router.push(`/${newPath}`);
    } else {
      router.push(`/${value}/${newPath}`);
    }
  };

  return (
    <Select value={langName as string} onValueChange={handleSwitchLanguage}>
      <SelectTrigger
        aria-label="Select language"
        className="h-8 w-fit cursor-pointer gap-1 rounded-full border-0 bg-transparent px-2.5 text-[13px] font-semibold uppercase tracking-wide text-zinc-600 shadow-none ring-offset-0 transition-colors hover:bg-zinc-950/5 hover:text-zinc-950 focus:ring-2 focus:ring-emerald-500/40 focus:ring-offset-0 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white [&>svg]:size-3.5"
      >
        <SelectValue placeholder="EN">{langName}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {localesDisplayOrder.map((key) => {
          const name = localeNames[key];
          return (
            <SelectItem className="cursor-pointer" key={key} value={key}>
              {name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
