import type {
  CefrLevel,
  ConsiderationKey,
  QuizAnswers,
  ResultDetails,
  ScholarshipTier,
  StrengthKey,
} from "./types";
import { cefrOrder } from "./types";
import { eligibleCountries } from "@/shared/config/site";

const REQUIRED_LEVEL: CefrLevel = "b1";
const BONUS_LEVEL: CefrLevel = "a2";

function meetsLevel(value: string | undefined, threshold: CefrLevel): boolean {
  if (!value) return false;
  const idx = cefrOrder.indexOf(value as CefrLevel);
  return idx >= 0 && idx >= cefrOrder.indexOf(threshold);
}

export function computeQuizPoints(answers: QuizAnswers): number {
  let points = 0;

  if (answers.country && eligibleCountries.some((c) => c.name === answers.country)) {
    points += 2;
  }

  if (answers.academics === "yes") points += 2;
  else if (answers.academics === "somewhat") points += 1;

  if (answers.interest === "yes") points += 2;

  const englishOk = meetsLevel(answers.englishLevel, REQUIRED_LEVEL);
  const germanOk = meetsLevel(answers.germanLevel, REQUIRED_LEVEL);
  if (englishOk || germanOk) points += 2;
  if (
    (englishOk && meetsLevel(answers.germanLevel, BONUS_LEVEL)) ||
    (germanOk && meetsLevel(answers.englishLevel, BONUS_LEVEL))
  ) {
    points += 1;
  }

  return points;
}

function scholarshipFromAnswers(answers: QuizAnswers): ScholarshipTier {
  const value = answers.financialCapacity;
  if (value === "partial" || value === "partial_plus" || value === "full") return value;
  return "unsure";
}

export function buildResultDetails(answers: QuizAnswers): ResultDetails {
  const strengths: StrengthKey[] = [];
  const considerations: ConsiderationKey[] = [];

  if (answers.enrollment === "yes") strengths.push("enrolledStudent");
  else considerations.push("notEnrolledYet");

  if (answers.enrollment === "no") {
    return {
      category: "not_eligible",
      points: 0,
      strengths,
      considerations,
      recommendedScholarship: scholarshipFromAnswers(answers),
    };
  }

  if (answers.country && eligibleCountries.some((c) => c.name === answers.country)) {
    strengths.push("eligibleCountry");
  } else {
    considerations.push("countryNotListed");
  }

  if (answers.academics === "yes") strengths.push("strongAcademics");
  else if (answers.academics === "somewhat") strengths.push("decentAcademics");
  else considerations.push("confirmAcademics");

  if (answers.interest === "yes") strengths.push("genuineInterest");
  else considerations.push("lowInterest");

  const englishOk = meetsLevel(answers.englishLevel, REQUIRED_LEVEL);
  const germanOk = meetsLevel(answers.germanLevel, REQUIRED_LEVEL);
  if (englishOk || germanOk) {
    strengths.push("languageRequirementMet");
    if (
      (englishOk && meetsLevel(answers.germanLevel, BONUS_LEVEL)) ||
      (germanOk && meetsLevel(answers.englishLevel, BONUS_LEVEL))
    ) {
      strengths.push("secondLanguageBonus");
    }
  } else {
    considerations.push("languageBelowRequirement");
  }

  const points = computeQuizPoints(answers);
  const category = points >= 7 ? "strong_fit" : points >= 4 ? "possible_fit" : "explore_more";

  return {
    category,
    points,
    strengths,
    considerations,
    recommendedScholarship: scholarshipFromAnswers(answers),
  };
}

export function computeResultCategory(answers: QuizAnswers) {
  return buildResultDetails(answers).category;
}
