"use client";

import { cn } from "@/shared/lib/utils";
import { eligibleCountries } from "@/shared/config/site";

export function CountryPicker({
  value,
  onChange,
  otherLabel,
}: {
  value: string;
  onChange: (value: string) => void;
  otherLabel: string;
}) {
  return (
    <div className="grid max-h-80 grid-cols-2 gap-2 overflow-y-auto rounded-xl border border-border bg-background p-2 sm:grid-cols-3">
      {eligibleCountries.map((country) => (
        <button
          key={country.name}
          type="button"
          onClick={() => onChange(country.name)}
          aria-pressed={value === country.name}
          className={cn(
            "flex items-center gap-2 rounded-lg border border-transparent px-3 py-2.5 text-left text-sm text-foreground transition-colors hover:bg-secondary",
            value === country.name && "border-accent bg-accent/10",
          )}
        >
          <span className="text-lg leading-none" aria-hidden>
            {country.flag}
          </span>
          <span className="truncate">{country.name}</span>
        </button>
      ))}
      <button
        type="button"
        onClick={() => onChange("__other__")}
        aria-pressed={value === "__other__"}
        className={cn(
          "flex items-center gap-2 rounded-lg border border-dashed border-border px-3 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:bg-secondary",
          value === "__other__" && "border-accent bg-accent/10 text-foreground",
        )}
      >
        <span className="text-lg leading-none" aria-hidden>
          🌍
        </span>
        <span className="truncate">{otherLabel}</span>
      </button>
    </div>
  );
}
