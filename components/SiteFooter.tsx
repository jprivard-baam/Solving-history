import type { Dictionary } from "@/lib/copy/types";

export function SiteFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer className="mt-auto shrink-0 border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-8 text-xs tracking-wide text-muted sm:px-6">
        <p>{dict.footer.line}</p>
        <p>
          {dict.meta.notLive} · {dict.footer.robots}
        </p>
        <p>{dict.footer.copyright}</p>
      </div>
    </footer>
  );
}
