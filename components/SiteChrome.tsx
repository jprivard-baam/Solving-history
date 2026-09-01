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
      <main className="flex-1">{children}</main>
      <SiteFooter dict={dict} />
    </>
  );
}
