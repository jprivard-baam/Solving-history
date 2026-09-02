import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizedHref, switchLocaleHref } from "@/lib/i18n";
import type { Dictionary } from "@/lib/copy/types";

const navKeys = ["atlas", "mission", "method", "shop", "help"] as const;

const navHrefs: Record<(typeof navKeys)[number], string> = {
  atlas: "/",
  mission: "/mission",
  method: "/method",
  shop: "/boutique",
  help: "/help",
};

export function SiteHeader({
  locale,
  dict,
  path,
}: {
  locale: Locale;
  dict: Dictionary;
  path: string;
}) {
  return (
    <header className="sticky top-0 z-[1100] border-b border-rule/80 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={localizedHref(locale, "/")} className="text-gold" aria-label="Solving History">
          <img src="/wordmark.svg" alt="" className="h-[28px] w-auto" />
        </Link>
        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1 text-sm tracking-[0.12em] uppercase text-muted"
        >
          {navKeys.map((key) => {
            const href = localizedHref(locale, navHrefs[key]);
            const current =
              (key === "atlas" && path === "/") ||
              path === navHrefs[key] ||
              (key !== "atlas" && path.startsWith(`${navHrefs[key]}/`));
            return (
              <Link
                key={key}
                href={href}
                className={
                  key === "atlas"
                    ? "text-gold"
                    : "transition-colors hover:text-ink"
                }
                aria-current={current ? "page" : undefined}
              >
                {dict.nav[key]}
              </Link>
            );
          })}
          <Link
            href={switchLocaleHref(locale, path)}
            hrefLang={locale === "en" ? "fr" : "en"}
            className="border border-gold-dim px-2 py-0.5 text-[0.7rem] text-gold hover:bg-paper-3"
          >
            {dict.language.switchTo}
          </Link>
        </nav>
      </div>
    </header>
  );
}
