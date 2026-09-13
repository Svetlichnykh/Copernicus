"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Reveal } from "@/shared/ui/reveal";
import { CountUp } from "@/shared/ui/count-up";
import { useLanguage } from "@/shared/lib/i18n";
import { siteConfig } from "@/shared/config/site";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-border/70 bg-primary text-primary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6 sm:py-28">
        <div className="space-y-8">
          <p className="text-sm font-medium tracking-wide text-accent uppercase">
            {t.hero.eyebrow}
          </p>
          <h1 className="font-display text-5xl leading-[0.98] font-extrabold tracking-tight sm:text-6xl lg:text-8xl xl:text-[128px]">
            {t.hero.title}
            <br />
            <span className="text-accent">{t.hero.titleHighlight}</span>
          </h1>
          <p className="max-w-xl text-base text-primary-foreground/80 sm:text-lg">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button size="lg" variant="accent" asChild>
              <a href="#eligibility">
                {t.hero.ctaPrimary}
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href={siteConfig.officialProgramUrl} target="_blank" rel="noreferrer">
                {t.hero.ctaSecondary}
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-primary-foreground/15 pt-10 sm:grid-cols-4">
          {t.hero.stats.map((stat, index) => (
            <Reveal key={stat.label} delayMs={index * 80}>
              <dt className="font-display text-5xl font-bold text-accent sm:text-6xl">
                <CountUp value={stat.value} />
              </dt>
              <dd className="mt-2 text-base text-primary-foreground/70">{stat.label}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
