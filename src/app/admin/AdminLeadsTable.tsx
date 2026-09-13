"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import type { AdminLeadRow } from "@/shared/api/leads";

const resultLabels: Record<string, string> = {
  strong_fit: "Strong fit",
  possible_fit: "Possible fit",
  explore_more: "Explore more",
  not_eligible: "Not eligible",
};

const scholarshipLabels: Record<string, string> = {
  full: "Full",
  partial_plus: "Partial Plus",
  partial: "Partial",
  unsure: "Unsure",
};

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleString("en-GB", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  } catch {
    return iso;
  }
}

type Filter = "all" | "consultation" | "info";

export function AdminLeadsTable({
  leads,
  loadError,
}: {
  leads: AdminLeadRow[];
  loadError?: string;
}) {
  const router = useRouter();
  const [expanded, setExpanded] = React.useState<string | null>(null);
  const [filter, setFilter] = React.useState<Filter>("all");

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  };

  const consultationCount = leads.filter((l) => l.kind === "consultation").length;
  const infoCount = leads.length - consultationCount;
  const visibleLeads = leads.filter((l) => filter === "all" || l.kind === filter);

  return (
    <div className="min-h-screen bg-secondary/30 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="font-display text-2xl text-foreground">IES Admin — Leads</h1>
            <p className="text-sm text-muted-foreground">
              {leads.length} entries · {consultationCount} consultation requests · {infoCount} info-only
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={logout}>
            <LogOut className="size-3.5" />
            Log out
          </Button>
        </div>

        <div className="mb-4 flex gap-2">
          {(["all", "consultation", "info"] as const).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              className={`rounded-full border px-3.5 py-1.5 text-sm capitalize transition-colors ${
                filter === value
                  ? "border-accent bg-accent/10 text-foreground"
                  : "border-border text-muted-foreground hover:bg-secondary"
              }`}
            >
              {value}
            </button>
          ))}
        </div>

        {loadError && (
          <div className="mb-6 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {loadError}
          </div>
        )}

        <div className="overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full min-w-[980px] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs text-muted-foreground uppercase">
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Telegram</th>
                <th className="px-4 py-3 font-medium">Instagram</th>
                <th className="px-4 py-3 font-medium">Lang</th>
                <th className="px-4 py-3 font-medium">Result</th>
                <th className="px-4 py-3 font-medium">Scholarship</th>
                <th className="px-4 py-3 font-medium">About</th>
              </tr>
            </thead>
            <tbody>
              {visibleLeads.map((lead) => (
                <tr key={lead.id} className="border-b border-border last:border-b-0">
                  <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">
                    {formatDate(lead.created_at)}
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={lead.kind === "consultation" ? "accent" : "outline"}>
                      {lead.kind === "consultation" ? "Consultation" : "Info"}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 font-medium text-foreground">{lead.name || "—"}</td>
                  <td className="px-4 py-3">
                    <a href={`mailto:${lead.email}`} className="text-primary hover:text-accent">
                      {lead.email}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{lead.telegram || "—"}</td>
                  <td className="px-4 py-3 text-muted-foreground">{lead.instagram || "—"}</td>
                  <td className="px-4 py-3 text-muted-foreground uppercase">{lead.locale}</td>
                  <td className="px-4 py-3">
                    <Badge variant={lead.result_category === "strong_fit" ? "success" : "outline"}>
                      {resultLabels[lead.result_category] ?? lead.result_category}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {scholarshipLabels[lead.recommended_scholarship] ?? lead.recommended_scholarship}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {lead.about ? (
                      <button
                        type="button"
                        onClick={() => setExpanded(expanded === lead.id ? null : lead.id)}
                        className="max-w-xs text-left underline decoration-dotted underline-offset-2"
                      >
                        {expanded === lead.id ? lead.about : `${lead.about.slice(0, 40)}${lead.about.length > 40 ? "…" : ""}`}
                      </button>
                    ) : (
                      "—"
                    )}
                  </td>
                </tr>
              ))}
              {visibleLeads.length === 0 && !loadError && (
                <tr>
                  <td colSpan={10} className="px-4 py-10 text-center text-muted-foreground">
                    No leads yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
