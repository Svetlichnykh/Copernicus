"use client";

import * as React from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, Mail, MessageCircle, User } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Textarea } from "@/shared/ui/textarea";
import { cn } from "@/shared/lib/utils";
import { useLanguage, interpolate } from "@/shared/lib/i18n";
import type { Locale } from "@/shared/lib/i18n/locales";
import type { LeadKind } from "@/entities/lead";
import type { QuizAnswers, ResultDetails } from "@/entities/eligibility-answer";

import { useLeadSubmit } from "../model/useLeadSubmit";

export function LeadCaptureForm({
  locale,
  answers,
  details,
}: {
  locale: Locale;
  answers: QuizAnswers;
  details: ResultDetails;
}) {
  const { t } = useLanguage();
  const { status, submit } = useLeadSubmit({ locale, answers, details });
  const [kind, setKind] = React.useState<LeadKind>("info");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telegram, setTelegram] = React.useState("");
  const [instagram, setInstagram] = React.useState("");
  const [about, setAbout] = React.useState("");
  const [consent, setConsent] = React.useState(false);
  const honeypotRef = React.useRef<HTMLInputElement>(null);

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-2 rounded-xl border border-success/30 bg-success/10 px-6 py-6 text-center">
        <CheckCircle2 className="size-6 text-success" />
        <p className="font-medium text-foreground">{t.leadForm.successTitle}</p>
        <p className="text-sm text-muted-foreground">
          {interpolate(t.leadForm.successBody, { email })}
        </p>
      </div>
    );
  }

  return (
    <form
      className="mx-auto flex w-full max-w-sm flex-col gap-4 text-left"
      onSubmit={(e) => {
        e.preventDefault();
        void submit({
          kind,
          name,
          email,
          telegram,
          instagram,
          about,
          consent,
          company: honeypotRef.current?.value ?? "",
        });
      }}
    >
      <div className="space-y-1.5">
        <p className="text-sm font-medium text-foreground">{t.leadForm.title}</p>
        <p className="text-sm text-muted-foreground">{t.leadForm.subtitle}</p>
      </div>

      <div className="grid grid-cols-2 gap-2 rounded-full border border-border bg-background p-1">
        {(["info", "consultation"] as const).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setKind(option)}
            className={cn(
              "rounded-full px-3 py-2 text-xs font-medium transition-colors sm:text-sm",
              kind === option
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {option === "info" ? t.leadForm.kindInfoLabel : t.leadForm.kindConsultationLabel}
          </button>
        ))}
      </div>

      {kind === "consultation" && (
        <div className="space-y-1.5">
          <Label htmlFor="lead-name">{t.leadForm.nameLabel}</Label>
          <div className="relative">
            <User className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="lead-name"
              type="text"
              required
              placeholder={t.leadForm.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      )}

      <div className="space-y-1.5">
        <Label htmlFor="lead-email">{t.leadForm.emailLabel}</Label>
        <div className="relative">
          <Mail className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="lead-email"
            type="email"
            required
            placeholder={t.leadForm.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {kind === "consultation" && (
        <>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="lead-telegram">{t.leadForm.telegramLabel}</Label>
              <div className="relative">
                <MessageCircle className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="lead-telegram"
                  type="text"
                  placeholder={t.leadForm.telegramPlaceholder}
                  value={telegram}
                  onChange={(e) => setTelegram(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="lead-instagram">{t.leadForm.instagramLabel}</Label>
              <Input
                id="lead-instagram"
                type="text"
                placeholder={t.leadForm.instagramPlaceholder}
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="lead-about">{t.leadForm.aboutLabel}</Label>
            <Textarea
              id="lead-about"
              placeholder={t.leadForm.aboutPlaceholder}
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              rows={3}
            />
          </div>
        </>
      )}

      <input
        ref={honeypotRef}
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <Label className="flex cursor-pointer items-start gap-2.5 text-sm font-normal text-muted-foreground">
        <Checkbox
          checked={consent}
          onCheckedChange={(checked) => setConsent(checked === true)}
        />
        <span>
          {t.leadForm.consentLabel}{" "}
          <Link href="/privacy" className="text-accent underline underline-offset-2">
            {t.footer.privacyLinkLabel}
          </Link>
        </span>
      </Label>

      {status === "error" && (
        <p className="text-sm text-destructive">{t.leadForm.errorBody}</p>
      )}

      <Button
        type="submit"
        variant="accent"
        size="lg"
        disabled={!consent || status === "submitting"}
      >
        {status === "submitting" && <Loader2 className="size-4 animate-spin" />}
        {status === "submitting"
          ? t.leadForm.submittingLabel
          : kind === "consultation"
            ? t.leadForm.submitConsultationLabel
            : t.leadForm.submitLabel}
      </Button>
    </form>
  );
}
