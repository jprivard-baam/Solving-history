"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import type { Dictionary } from "@/lib/copy/types";
import type { Locale } from "@/lib/i18n";
import { pathWithoutLocale } from "@/lib/i18n";

export function SiteChrome({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? "/";
  const path = pathWithoutLocale(pathname);

  return (
    <>
      <SiteHeader locale={locale} dict={dict} path={path} />
      <main className="relative z-0 isolate flex min-h-0 flex-1 flex-col">
        {children}
      </main>
      <SiteFooter dict={dict} />
    </>
  );
}
