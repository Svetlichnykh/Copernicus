"use client";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Logo } from "@/shared/ui/logo";
import { useLanguage } from "@/shared/lib/i18n";
import { siteConfig } from "@/shared/config/site";
import { LanguageSwitcher } from "@/features/language-switcher";

export function SiteHeader() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-2.5">
          <Logo className="h-6 sm:h-7" />
          <span className="hidden h-5 w-px bg-border sm:inline-block" />
          <span className="font-display hidden text-sm font-semibold text-accent sm:inline">
            IES
          </span>
        </div>

        <nav className="flex shrink-0 items-center gap-1 sm:gap-2">
          <LanguageSwitcher />
          <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
            <a href={siteConfig.officialProgramUrl} target="_blank" rel="noreferrer">
              {t.nav.officialSite}
              <ArrowUpRight className="size-3.5" />
            </a>
          </Button>
          <Button size="sm" variant="accent" asChild className="px-3.5 sm:px-6">
            <a href="#eligibility">{t.nav.checkEligibility}</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
