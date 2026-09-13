"use client";

import * as React from "react";

import type { Locale } from "@/shared/lib/i18n/locales";
import type { LeadKind } from "@/entities/lead";
import type { QuizAnswers, ResultDetails } from "@/entities/eligibility-answer";

type Status = "idle" | "submitting" | "success" | "error";

export function useLeadSubmit(params: {
  locale: Locale;
  answers: QuizAnswers;
  details: ResultDetails;
}) {
  const [status, setStatus] = React.useState<Status>("idle");

  const submit = React.useCallback(
    async (input: {
      kind: LeadKind;
      name: string;
      email: string;
      telegram: string;
      instagram: string;
      about: string;
      consent: boolean;
      company: string;
    }) => {
      if (!input.consent) return;
      setStatus("submitting");
      try {
        const res = await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            kind: input.kind,
            name: input.name,
            email: input.email,
            telegram: input.telegram,
            instagram: input.instagram,
            about: input.about,
            locale: params.locale,
            answers: params.answers,
            resultCategory: params.details.category,
            recommendedScholarship: params.details.recommendedScholarship,
            points: params.details.points,
            consent: input.consent,
            company: input.company,
          }),
        });
        if (!res.ok) throw new Error("request failed");
        setStatus("success");
      } catch {
        setStatus("error");
      }
    },
    [params.answers, params.details, params.locale],
  );

  return { status, submit };
}
