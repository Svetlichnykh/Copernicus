"use client";

import * as React from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { useLanguage } from "@/shared/lib/i18n";

const STORAGE_KEY = "ies-cookie-consent";

export function CookieConsent() {
  const { t } = useLanguage();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const accept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card px-4 py-4 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="flex items-center gap-2 text-center text-sm text-muted-foreground sm:text-left">
          <Cookie className="size-4 shrink-0 text-accent" />
          {t.cookieConsent.message}{" "}
          <Link href="/privacy" className="text-accent underline underline-offset-2">
            {t.cookieConsent.privacyLinkLabel}
          </Link>
        </p>
        <Button size="sm" variant="accent" onClick={accept} className="shrink-0">
          {t.cookieConsent.accept}
        </Button>
      </div>
    </div>
  );
}
