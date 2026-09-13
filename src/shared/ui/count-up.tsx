"use client";

import * as React from "react";

import { useInView } from "@/shared/lib/useInView";

const DURATION_MS = 1400;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function CountUp({
  value,
  durationMs = DURATION_MS,
  className,
}: {
  value: string;
  durationMs?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [display, setDisplay] = React.useState<string>(value);

  const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? Number(match[2].replace(/,/g, "")) : null;
  const suffix = match?.[3] ?? "";

  React.useEffect(() => {
    if (!inView || target === null) return;

    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const current = Math.round(target * easeOutCubic(progress));
      setDisplay(`${prefix}${current.toLocaleString("en-US")}${suffix}`);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target, durationMs]);

  return (
    <span ref={ref} className={className}>
      {target === null ? value : display}
    </span>
  );
}
