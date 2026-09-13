"use client";

import * as React from "react";

import {
  buildResultDetails,
  questionOrder,
  type QuizAnswers,
  type ResultDetails,
} from "@/entities/eligibility-answer";

export function useEligibilityQuiz() {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<QuizAnswers>({});
  const [resultDetails, setResultDetails] = React.useState<ResultDetails | null>(null);

  const currentQuestionId = questionOrder[step];
  const isLastStep = step === questionOrder.length - 1;
  const canGoNext = Boolean(answers[currentQuestionId]);

  const setAnswer = React.useCallback((questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }, []);

  const goNext = React.useCallback(() => {
    if (!canGoNext) return;
    if (isLastStep) {
      setResultDetails(buildResultDetails(answers));
      return;
    }
    setStep((s) => Math.min(s + 1, questionOrder.length - 1));
  }, [answers, canGoNext, isLastStep]);

  const goBack = React.useCallback(() => {
    setStep((s) => Math.max(s - 1, 0));
  }, []);

  const restart = React.useCallback(() => {
    setStep(0);
    setAnswers({});
    setResultDetails(null);
  }, []);

  return {
    step,
    totalSteps: questionOrder.length,
    currentQuestionId,
    answers,
    setAnswer,
    isLastStep,
    canGoNext,
    goNext,
    goBack,
    resultDetails,
    restart,
  };
}
