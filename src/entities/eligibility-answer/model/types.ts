export type QuestionId =
  | "enrollment"
  | "country"
  | "academics"
  | "interest"
  | "englishLevel"
  | "germanLevel"
  | "financialCapacity";

export type QuizAnswers = Partial<Record<QuestionId, string>>;

export type ResultCategory = "strong_fit" | "possible_fit" | "explore_more" | "not_eligible";

export type ScholarshipTier = "full" | "partial_plus" | "partial" | "unsure";

export type CefrLevel = "a1" | "a2" | "b1" | "b2" | "c1" | "c2";

export const cefrOrder: CefrLevel[] = ["a1", "a2", "b1", "b2", "c1", "c2"];

export type StrengthKey =
  | "enrolledStudent"
  | "eligibleCountry"
  | "strongAcademics"
  | "decentAcademics"
  | "genuineInterest"
  | "languageRequirementMet"
  | "secondLanguageBonus";

export type ConsiderationKey =
  | "notEnrolledYet"
  | "countryNotListed"
  | "confirmAcademics"
  | "lowInterest"
  | "languageBelowRequirement";

export type ResultDetails = {
  category: ResultCategory;
  points: number;
  strengths: StrengthKey[];
  considerations: ConsiderationKey[];
  recommendedScholarship: ScholarshipTier;
};

export const questionOrder: QuestionId[] = [
  "enrollment",
  "country",
  "academics",
  "interest",
  "englishLevel",
  "germanLevel",
  "financialCapacity",
];
