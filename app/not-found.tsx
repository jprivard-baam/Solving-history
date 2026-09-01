import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.22em] text-gold-dim">404</p>
      <h1 className="font-display mt-2 text-4xl text-gold">Solving History</h1>
      <p className="mt-4 text-muted">This file is not on the atlas.</p>
      <Link href="/" className="mt-8 inline-block text-gold hover:underline">
        Atlas
      </Link>
    </div>
  );
}
