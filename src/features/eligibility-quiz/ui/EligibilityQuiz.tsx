"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { Label } from "@/shared/ui/label";
import { Progress } from "@/shared/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";
import { useLanguage, interpolate } from "@/shared/lib/i18n";
import type { QuizAnswers, ResultDetails as ResultDetailsType } from "@/entities/eligibility-answer";

import { useEligibilityQuiz } from "../model/useEligibilityQuiz";
import { CountryPicker } from "./CountryPicker";
import { ResultDetails } from "./ResultDetails";

export function EligibilityQuiz({
  renderAfterResult,
}: {
  renderAfterResult: (args: {
    answers: QuizAnswers;
    details: ResultDetailsType;
    onRestart: () => void;
  }) => React.ReactNode;
}) {
  const { t } = useLanguage();
  const quiz = useEligibilityQuiz();

  if (quiz.resultDetails) {
    const resultCopy = t.result[quiz.resultDetails.category];
    return (
      <Card className="border-accent/30 bg-card">
        <CardContent className="flex flex-col gap-6 p-8 text-center sm:p-10">
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-accent/15 text-accent">
            <Sparkles className="size-6" />
          </div>
          <div className="space-y-2">
            <h3 className="font-display text-2xl text-foreground">{resultCopy.title}</h3>
            <p className="text-muted-foreground">{resultCopy.body}</p>
          </div>

          <ResultDetails details={quiz.resultDetails} />

          {renderAfterResult({
            answers: quiz.answers,
            details: quiz.resultDetails,
            onRestart: quiz.restart,
          })}
        </CardContent>
      </Card>
    );
  }

  const questionCopy = t.quiz.questions[quiz.step];
  const currentValue = quiz.answers[quiz.currentQuestionId] ?? "";
  const isCountryQuestion = quiz.currentQuestionId === "country";

  return (
    <Card className="border-border bg-card">
      <CardContent className="flex flex-col gap-6 p-8 sm:p-10">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            {interpolate(t.quiz.progressLabel, {
              current: quiz.step + 1,
              total: quiz.totalSteps,
            })}
          </p>
          <Progress value={((quiz.step + 1) / quiz.totalSteps) * 100} />
        </div>

        <h3 className="font-display text-xl text-foreground sm:text-2xl">
          {questionCopy.question}
        </h3>

        {isCountryQuestion ? (
          <CountryPicker
            value={currentValue}
            onChange={(value) => quiz.setAnswer("country", value)}
            otherLabel={t.quiz.otherCountryLabel}
          />
        ) : (
          <RadioGroup
            value={currentValue}
            onValueChange={(value) => quiz.setAnswer(quiz.currentQuestionId, value)}
            className="gap-3"
          >
            {questionCopy.options.map((option) => (
              <Label
                key={option.value}
                htmlFor={`${quiz.currentQuestionId}-${option.value}`}
                className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-foreground transition-colors has-[[data-state=checked]]:border-accent has-[[data-state=checked]]:bg-accent/10"
              >
                <RadioGroupItem
                  id={`${quiz.currentQuestionId}-${option.value}`}
                  value={option.value}
                />
                {option.label}
              </Label>
            ))}
          </RadioGroup>
        )}

        <div className="flex items-center justify-between pt-2">
          <Button
            variant="ghost"
            onClick={quiz.goBack}
            disabled={quiz.step === 0}
            className="text-muted-foreground"
          >
            <ArrowLeft className="size-4" />
            {t.quiz.backLabel}
          </Button>
          <Button variant="accent" onClick={quiz.goNext} disabled={!quiz.canGoNext}>
            {quiz.isLastStep ? t.quiz.seeResultLabel : t.quiz.nextLabel}
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
