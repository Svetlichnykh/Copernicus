export type {
  QuestionId,
  QuizAnswers,
  ResultCategory,
  ScholarshipTier,
  StrengthKey,
  ConsiderationKey,
  ResultDetails,
  CefrLevel,
} from "./model/types";
export { questionOrder, cefrOrder } from "./model/types";
export { computeResultCategory, computeQuizPoints, buildResultDetails } from "./model/scoring";
