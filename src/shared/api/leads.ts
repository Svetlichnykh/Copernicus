import "server-only";

import { getSupabaseServerClient } from "./supabase-server";

export type AdminLeadRow = {
  id: string;
  kind: string;
  name: string;
  email: string;
  telegram: string;
  instagram: string;
  about: string;
  locale: string;
  result_category: string;
  recommended_scholarship: string;
  points: number;
  created_at: string;
};

export async function fetchLeads(): Promise<{ leads: AdminLeadRow[]; error?: string }> {
  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return { leads: [], error: "Supabase is not configured (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY)." };
  }

  const { data, error } = await supabase
    .from("leads")
    .select(
      "id, kind, name, email, telegram, instagram, about, locale, result_category, recommended_scholarship, points, created_at",
    )
    .order("created_at", { ascending: false })
    .limit(500);

  if (error) {
    return { leads: [], error: error.message };
  }

  return { leads: data ?? [] };
}
