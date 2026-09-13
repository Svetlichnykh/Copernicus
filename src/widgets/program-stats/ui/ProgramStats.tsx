"use client";

import { useLanguage } from "@/shared/lib/i18n";
import { programStats } from "@/shared/config/site";
import { Reveal } from "@/shared/ui/reveal";
import { CountUp } from "@/shared/ui/count-up";

export function ProgramStats() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-border/70 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wide text-accent uppercase">
            {t.stats.eyebrow}
          </p>
          <h2 className="font-display mt-2 text-3xl text-foreground sm:text-4xl">
            {t.stats.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{t.stats.subtitle}</p>
        </Reveal>

        <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {programStats.map((stat, index) => (
            <Reveal key={stat.key} delayMs={(index % 3) * 80} className="text-center sm:text-left">
              <dt className="font-display text-4xl font-bold text-accent">
                <CountUp value={stat.value} />
              </dt>
              <dd className="mt-1.5 text-sm text-muted-foreground">{t.stats.items[stat.key]}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
