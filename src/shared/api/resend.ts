import "server-only";

import { Resend } from "resend";

import { dictionaries } from "@/shared/lib/i18n/dictionaries";
import type { Locale } from "@/shared/lib/i18n/locales";
import type { ResultCategory } from "@/entities/eligibility-answer";
import type { LeadKind } from "@/entities/lead";
import { siteConfig } from "@/shared/config/site";

let resendClient: Resend | null | undefined;

function getResendClient() {
  if (resendClient !== undefined) return resendClient;
  const apiKey = process.env.RESEND_API_KEY;
  resendClient = apiKey ? new Resend(apiKey) : null;
  return resendClient;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderEmailHtml(
  locale: Locale,
  name: string,
  resultCategory: ResultCategory,
  kind: LeadKind,
) {
  const t = dictionaries[locale];
  const result = t.result[resultCategory];
  const safeName = escapeHtml(name);

  return `
  <div style="font-family: 'Poppins', Arial, sans-serif; background:#f4f5f8; padding:32px 16px;">
    <div style="max-width:560px; margin:0 auto; background:#ffffff; border-radius:16px; overflow:hidden; border:1px solid #e3e5ec;">
      <div style="background:#19213d; color:#ffffff; padding:28px 32px;">
        <p style="margin:0; font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:#ef7b23;">Copernicus Berlin</p>
        <h1 style="margin:8px 0 0; font-size:22px; line-height:1.3;">${t.meta.title}</h1>
      </div>
      <div style="padding:28px 32px; color:#19213d;">
        <p style="font-size:15px; margin:0 0 16px;">${safeName ? `${safeName},` : ""}</p>
        <h2 style="font-size:18px; margin:0 0 12px;">${result.title}</h2>
        <p style="font-size:15px; line-height:1.6; color:#3a3f52;">${result.body}</p>
        ${kind === "consultation" ? `<p style="font-size:15px; line-height:1.6; color:#3a3f52;">${t.leadForm.consultationNote}</p>` : ""}
        <div style="margin:28px 0; text-align:center;">
          <a href="${siteConfig.officialApplicationUrl}" style="display:inline-block; background:#ef7b23; color:#ffffff; text-decoration:none; font-weight:600; padding:12px 24px; border-radius:999px; font-size:14px;">
            ${t.footer.applicationLinkLabel}
          </a>
        </div>
        <p style="font-size:13px; line-height:1.6; color:#5c6377;">
          <a href="${siteConfig.officialProgramUrl}" style="color:#19213d;">${t.footer.officialLinkLabel}</a>
        </p>
        <hr style="border:none; border-top:1px solid #e3e5ec; margin:24px 0;" />
        <p style="font-size:12px; line-height:1.6; color:#8b93a3;">${t.footer.disclaimer}</p>
      </div>
    </div>
  </div>`;
}

export async function sendLeadEmail(params: {
  to: string;
  name: string;
  kind: LeadKind;
  locale: Locale;
  resultCategory: ResultCategory;
}) {
  const client = getResendClient();
  if (!client) {
    console.warn("[resend] RESEND_API_KEY not set — skipping email send for", params.to);
    return { skipped: true as const };
  }

  const t = dictionaries[params.locale];
  const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  const { error } = await client.emails.send({
    from: `Copernicus Berlin IES <${from}>`,
    to: params.to,
    subject: t.leadForm.successTitle + " — " + t.result[params.resultCategory].title,
    html: renderEmailHtml(params.locale, params.name, params.resultCategory, params.kind),
  });

  if (error) {
    console.error("[resend] failed to send lead email", error);
    return { skipped: false as const, error };
  }

  return { skipped: false as const };
}
