import { z } from "zod";

import { locales } from "@/shared/lib/i18n/locales";

export const leadKinds = ["info", "consultation"] as const;
export type LeadKind = (typeof leadKinds)[number];

export const leadPayloadSchema = z
  .object({
    kind: z.enum(leadKinds),
    name: z.string().trim().max(120).default(""),
    email: z.string().trim().email().max(254),
    telegram: z.string().trim().max(120).default(""),
    instagram: z.string().trim().max(120).default(""),
    about: z.string().trim().max(1000).default(""),
    locale: z.enum(locales),
    answers: z.record(z.string(), z.string()).default({}),
    resultCategory: z.enum(["strong_fit", "possible_fit", "explore_more", "not_eligible"]),
    recommendedScholarship: z.enum(["full", "partial_plus", "partial", "unsure"]),
    points: z.number().int().min(0).max(20),
    consent: z.literal(true),
    company: z.string().max(0).optional().or(z.literal("")),
  })
  .refine((data) => data.kind !== "consultation" || data.name.length > 0, {
    message: "Name is required for a consultation request",
    path: ["name"],
  });

export type LeadPayload = z.infer<typeof leadPayloadSchema>;
