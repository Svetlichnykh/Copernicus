import Image from "next/image";

import { cn } from "@/shared/lib/utils";

export function Logo({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  const img = (
    <Image
      src="/copernicus-full-logo.png"
      alt="Copernicus Berlin e.V."
      width={2048}
      height={520}
      priority
      className={cn("h-7 w-auto", className)}
    />
  );

  if (!onDark) return img;

  return <span className="inline-flex items-center rounded-md bg-white px-2 py-1.5">{img}</span>;
}
