import { NextResponse } from "next/server";

import { leadPayloadSchema } from "@/entities/lead";
import { getSupabaseServerClient } from "@/shared/api/supabase-server";
import { sendLeadEmail } from "@/shared/api/resend";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = leadPayloadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { company, ...lead } = parsed.data;
  if (company) {
    return NextResponse.json({ ok: true });
  }

  const supabase = getSupabaseServerClient();
  if (supabase) {
    const { error } = await supabase.from("leads").insert({
      kind: lead.kind,
      name: lead.name,
      email: lead.email,
      telegram: lead.telegram,
      instagram: lead.instagram,
      about: lead.about,
      locale: lead.locale,
      answers: lead.answers,
      result_category: lead.resultCategory,
      recommended_scholarship: lead.recommendedScholarship,
      points: lead.points,
    });
    if (error) {
      console.error("[api/lead] supabase insert failed", error);
    }
  } else {
    console.warn("[api/lead] Supabase not configured — skipping persistence for", lead.email);
  }

  try {
    await sendLeadEmail({
      to: lead.email,
      name: lead.name,
      kind: lead.kind,
      locale: lead.locale,
      resultCategory: lead.resultCategory,
    });
  } catch (error) {
    console.error("[api/lead] failed to send email", error);
  }

  return NextResponse.json({ ok: true });
}
