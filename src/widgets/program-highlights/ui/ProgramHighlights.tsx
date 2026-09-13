"use client";

import { GraduationCap, Handshake, PiggyBank, Users } from "lucide-react";

import { Card, CardContent } from "@/shared/ui/card";
import { Reveal } from "@/shared/ui/reveal";
import { useLanguage } from "@/shared/lib/i18n";

const icons = [GraduationCap, Handshake, PiggyBank, Users];

export function ProgramHighlights() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium tracking-wide text-accent uppercase">
          {t.highlights.eyebrow}
        </p>
        <h2 className="font-display mt-2 text-3xl text-foreground sm:text-4xl">
          {t.highlights.title}
        </h2>
        <p className="mt-3 text-muted-foreground">{t.highlights.subtitle}</p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {t.highlights.items.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Reveal key={item.title} delayMs={index * 80}>
              <Card className="bg-card">
                <CardContent className="flex gap-4 p-6">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="font-medium text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
