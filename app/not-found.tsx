import Link from "next/link";
import { headers } from "next/headers";
import { getDictionary } from "@/lib/copy/get-dictionary";

export default async function NotFound() {
  const locale = (await headers()).get("x-locale") === "fr" ? "fr" : "en";
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.22em] text-gold-dim">
        {dict.notFound.kicker}
      </p>
      <h1 className="font-display mt-2 text-4xl text-gold">{dict.notFound.title}</h1>
      <p className="mt-4 text-muted">{dict.notFound.body}</p>
      <Link href={locale === "fr" ? "/fr" : "/"} className="mt-8 inline-block text-gold hover:underline">
        {dict.notFound.back}
      </Link>
    </div>
  );
}
