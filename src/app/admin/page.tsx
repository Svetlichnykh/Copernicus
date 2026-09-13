import { cookies } from "next/headers";

import { ADMIN_SESSION_COOKIE, isValidAdminSession } from "@/shared/api/admin-auth";
import { fetchLeads } from "@/shared/api/leads";

import { AdminLoginForm } from "./AdminLoginForm";
import { AdminLeadsTable } from "./AdminLeadsTable";

export const metadata = {
  title: "IES Admin — Leads",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

  if (!isValidAdminSession(token)) {
    return <AdminLoginForm />;
  }

  const { leads, error } = await fetchLeads();

  return <AdminLeadsTable leads={leads} loadError={error} />;
}
