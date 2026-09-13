"use client";

import { Check, TriangleAlert } from "lucide-react";

import { useLanguage } from "@/shared/lib/i18n";
import type { ResultDetails as ResultDetailsType } from "@/entities/eligibility-answer";

export function ResultDetails({ details }: { details: ResultDetailsType }) {
  const { t } = useLanguage();
  const d = t.resultDetails;

  return (
    <div className="w-full space-y-5 rounded-xl border border-border bg-background p-5 text-left">
      {details.strengths.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">{d.strengthsTitle}</p>
          <ul className="space-y-1.5">
            {details.strengths.map((key) => (
              <li key={key} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-success" />
                {d.strengths[key]}
              </li>
            ))}
          </ul>
        </div>
      )}

      {details.considerations.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">{d.considerationsTitle}</p>
          <ul className="space-y-1.5">
            {details.considerations.map((key) => (
              <li key={key} className="flex items-start gap-2 text-sm text-muted-foreground">
                <TriangleAlert className="mt-0.5 size-4 shrink-0 text-accent" />
                {d.considerations[key]}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="rounded-lg bg-secondary px-4 py-3">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {d.scholarshipTitle}
        </p>
        <p className="mt-1 font-display text-base font-semibold text-foreground">
          {d.scholarshipTiers[details.recommendedScholarship]}
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">{d.scholarshipNote}</p>
      </div>
    </div>
  );
}
