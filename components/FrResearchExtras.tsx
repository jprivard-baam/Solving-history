import type { FrResearchPayload } from "@/lib/copy/fr-payload";

const FIELD_LABELS = {
  help: "Qui peut aider",
  sources: "Sources",
} as const;

export function FrResearchExtras({ research }: { research: FrResearchPayload }) {
  return (
    <div className="mt-12 space-y-10">
      <section aria-labelledby="fr-help-roles">
        <h2 id="fr-help-roles" className="font-display text-2xl text-gold">
          {FIELD_LABELS.help}
        </h2>
        <ul className="mt-4 space-y-4">
          {research.help.map((item) => (
            <li key={item.role} className="border border-rule bg-paper-2 p-4">
              <h3 className="font-display text-lg text-ink">{item.role}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.ask}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="fr-sources">
        <h2 id="fr-sources" className="font-display text-2xl text-gold">
          {FIELD_LABELS.sources}
        </h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-muted">
          {research.sources.map((s) => (
            <li key={s.cite}>
              {s.url ? (
                <a
                  href={s.url}
                  className="text-gold hover:underline"
                  rel="nofollow noreferrer"
                >
                  {s.cite}
                </a>
              ) : (
                s.cite
              )}
            </li>
          ))}
        </ol>
      </section>

      <p className="border-l border-gold-dim pl-5 text-[1.05rem] leading-relaxed text-ink/90">
        {research.xLine}
      </p>
    </div>
  );
}
