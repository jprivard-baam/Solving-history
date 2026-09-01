export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizedHref(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) {
    return normalized;
  }
  if (normalized === "/") {
    return "/fr";
  }
  return `/fr${normalized}`;
}

export function switchLocaleHref(current: Locale, path: string): string {
  const other: Locale = current === "en" ? "fr" : "en";
  return localizedHref(other, path);
}

export function pathWithoutLocale(pathname: string): string {
  if (pathname === "/fr" || pathname.startsWith("/fr/")) {
    const stripped = pathname.slice(3);
    return stripped.length === 0 ? "/" : stripped;
  }
  return pathname || "/";
}
