import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizedHref } from "@/lib/i18n";
import type { Dictionary } from "@/lib/copy/types";

export function ThreePaths({
  locale,
  dict,
  compact = false,
}: {
  locale: Locale;
  dict: Dictionary;
  compact?: boolean;
}) {
  return (
    <section aria-labelledby="three-paths-title" className="mt-16">
      <div className="paper-rule mb-8" />
      <h2
        id="three-paths-title"
        className="font-display text-3xl text-gold tracking-wide"
      >
        {dict.pathsTitle}
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {dict.help.paths.map((path) => (
          <article
            key={path.id}
            id={path.id}
            className="border border-rule bg-paper-2/80 p-5"
          >
            <h3 className="font-display text-xl text-ink">{path.title}</h3>
            {(compact ? path.body.slice(0, 1) : path.body).map((p) => (
              <p key={p.slice(0, 24)} className="mt-3 text-sm leading-relaxed text-muted">
                {p}
              </p>
            ))}
            {compact ? (
              <Link
                href={`${localizedHref(locale, "/help")}#${path.id}`}
                className="mt-4 inline-block text-sm text-gold hover:underline"
              >
                {dict.nav.help}
              </Link>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
