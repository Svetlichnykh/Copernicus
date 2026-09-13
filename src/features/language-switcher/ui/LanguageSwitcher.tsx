"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { useLanguage, locales, localeMeta, type Locale } from "@/shared/lib/i18n";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <Select value={locale} onValueChange={(value) => setLocale(value as Locale)}>
      <SelectTrigger
        aria-label={t.languageSwitcher.label}
        className="h-9 w-auto gap-1.5 border-none bg-transparent px-2.5 shadow-none hover:bg-secondary"
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end">
        {locales.map((code) => (
          <SelectItem key={code} value={code}>
            <span className="mr-1.5">{localeMeta[code].flag}</span>
            {localeMeta[code].nativeLabel}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
