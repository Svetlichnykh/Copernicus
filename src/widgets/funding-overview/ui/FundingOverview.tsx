"use client";

import { Check, X } from "lucide-react";

import { Card, CardContent } from "@/shared/ui/card";
import { Reveal } from "@/shared/ui/reveal";
import { useLanguage, interpolate } from "@/shared/lib/i18n";
import {
  fullScholarshipTotalEur,
  scholarshipBudgetLineItems,
} from "@/shared/config/site";

import { BudgetBarRow } from "./BudgetBarRow";

const tierOrder = ["full", "partial_plus", "partial"] as const;

export function FundingOverview() {
  const { t } = useLanguage();

  const sortedLineItems = [...scholarshipBudgetLineItems].sort(
    (a, b) => b.amountEur - a.amountEur,
  );
  const maxAmount = sortedLineItems[0]?.amountEur ?? 1;

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium tracking-wide text-accent uppercase">
          {t.funding.eyebrow}
        </p>
        <h2 className="font-display mt-2 text-3xl text-foreground sm:text-4xl">
          {t.funding.title}
        </h2>
        <p className="mt-3 text-muted-foreground">
          {interpolate(t.funding.subtitleTemplate, {
            amount: fullScholarshipTotalEur.toLocaleString("en-US"),
          })}
        </p>
      </Reveal>

      <div className="mx-auto mt-10 max-w-2xl space-y-2.5">
        {sortedLineItems.map((item) => (
          <BudgetBarRow
            key={item.key}
            label={t.funding.lineItems[item.key]}
            amountEur={item.amountEur}
            widthPercent={(item.amountEur / maxAmount) * 100}
          />
        ))}
      </div>

      <h3 className="font-display mt-20 text-center text-2xl text-foreground sm:text-3xl">
        {t.funding.tiersTitle}
      </h3>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {tierOrder.map((tier, index) => {
          const tierCopy = t.funding.tiers[tier];
          return (
            <Reveal key={tier} delayMs={index * 100}>
              <Card className="h-full bg-card">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <h4 className="font-display text-lg text-foreground">{tierCopy.name}</h4>
                  <ul className="space-y-2.5">
                    {tierCopy.covered.map((line) => (
                      <li key={line} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-success" />
                        {line}
                      </li>
                    ))}
                    {tierCopy.notCovered.map((line) => (
                      <li key={line} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
