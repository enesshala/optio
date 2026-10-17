import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";

const HeaderLinks = () => {
  const links = siteConfig.headerLinks;

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          aria-label={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="grid size-8 place-items-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-950/5 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white"
        >
          {link.icon &&
            React.createElement(link.icon, { className: "size-[15px]" })}
        </Link>
      ))}
    </>
  );
};
export default HeaderLinks;
