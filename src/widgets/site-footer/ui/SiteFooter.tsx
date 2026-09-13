"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Logo } from "@/shared/ui/logo";
import { useLanguage } from "@/shared/lib/i18n";
import { siteConfig } from "@/shared/config/site";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/70 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-3">
            <Logo onDark className="h-6" />
            <div>
              <p className="font-display text-sm font-medium text-accent">IES</p>
              <p className="text-xs text-primary-foreground/60">{t.footer.madeFor}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <a
              href={siteConfig.officialProgramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-primary-foreground/85 hover:text-accent"
            >
              {t.footer.officialLinkLabel}
              <ArrowUpRight className="size-3.5" />
            </a>
            <a
              href={siteConfig.officialApplicationUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-primary-foreground/85 hover:text-accent"
            >
              {t.footer.applicationLinkLabel}
              <ArrowUpRight className="size-3.5" />
            </a>
            <Link href="/privacy" className="text-primary-foreground/85 hover:text-accent">
              {t.footer.privacyLinkLabel}
            </Link>
            <Link href="/terms" className="text-primary-foreground/85 hover:text-accent">
              {t.footer.termsLinkLabel}
            </Link>
          </div>
        </div>

        <p className="mt-8 max-w-2xl border-t border-primary-foreground/15 pt-6 text-xs leading-relaxed text-primary-foreground/55">
          {t.footer.disclaimer}
        </p>
      </div>
    </footer>
  );
}
