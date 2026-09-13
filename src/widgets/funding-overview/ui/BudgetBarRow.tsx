"use client";

import { useInView } from "@/shared/lib/useInView";
import { CountUp } from "@/shared/ui/count-up";

export function BudgetBarRow({
  label,
  amountEur,
  widthPercent,
}: {
  label: string;
  amountEur: number;
  widthPercent: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="flex items-center gap-3">
      <span className="w-40 shrink-0 truncate text-sm text-foreground sm:w-56">{label}</span>
      <div className="h-3 flex-1 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-1000 ease-out"
          style={{ width: inView ? `${widthPercent}%` : "0%" }}
        />
      </div>
      <span className="w-20 shrink-0 text-right text-sm tabular-nums text-muted-foreground">
        <CountUp value={`€${amountEur.toLocaleString("en-US")}`} />
      </span>
    </div>
  );
}
