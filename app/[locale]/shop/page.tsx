import { redirect } from "next/navigation";
import { isLocale, localizedHref } from "@/lib/i18n";

export default async function ShopRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(localizedHref(isLocale(locale) ? locale : "en", "/help"));
}
