import Link from "next/link";
import type { ReactNode } from "react";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <Link href="/" className="text-sm text-accent hover:underline">
          ← Back to the IES self-check
        </Link>

        <h1 className="font-display mt-6 text-3xl text-foreground sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {updated}</p>

        <div className="mt-6 rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-foreground">
          This is a template for a small, independent web project, filled in with example
          details — not legal advice for your specific situation. Replace the example details
          with your own and have it reviewed by a licensed lawyer in your jurisdiction before
          relying on it.
        </div>

        <article className="mt-10 space-y-6 text-[15px] leading-relaxed text-foreground/90">
          {children}
        </article>
      </div>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="font-display text-xl text-foreground">{title}</h2>
      {children}
    </section>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
