"use client";

import { RotateCcw } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Separator } from "@/shared/ui/separator";
import { useLanguage } from "@/shared/lib/i18n";
import { EligibilityQuiz } from "@/features/eligibility-quiz";
import { LeadCaptureForm } from "@/features/lead-capture-form";

export function EligibilityWidget() {
  const { locale, t } = useLanguage();

  return (
    <section id="eligibility" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <div className="mb-10 text-center">
        <p className="text-sm font-medium tracking-wide text-accent uppercase">
          {t.quiz.eyebrow}
        </p>
        <h2 className="font-display mt-2 text-3xl text-foreground sm:text-4xl">{t.quiz.title}</h2>
        <p className="mt-3 text-muted-foreground">{t.quiz.subtitle}</p>
      </div>
      <EligibilityQuiz
        renderAfterResult={({ answers, details, onRestart }) => (
          <div className="flex w-full flex-col items-center gap-6 pt-2">
            <Separator className="w-full" />
            <LeadCaptureForm locale={locale} answers={answers} details={details} />
            <Button variant="ghost" size="sm" onClick={onRestart} className="text-muted-foreground">
              <RotateCcw className="size-3.5" />
              {t.result.restartLabel}
            </Button>
          </div>
        )}
      />
    </section>
  );
}
