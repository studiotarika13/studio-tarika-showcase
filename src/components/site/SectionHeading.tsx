import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  aside?: ReactNode;
  className?: string;
  tone?: "paper" | "ink";
}

export function SectionHeading({ index, eyebrow, title, aside, className, tone = "paper" }: SectionHeadingProps) {
  const muted = tone === "ink" ? "text-on-ink-muted" : "text-muted-foreground";
  return (
    <div className={cn("grid gap-8 md:grid-cols-12 md:items-end", className)}>
      <div className="md:col-span-8">
        <p className={cn("eyebrow flex items-center gap-3", muted)}>
          <span className={tone === "ink" ? "text-brass" : "text-olive"}>({index})</span>
          <span aria-hidden className="h-px w-10 bg-current opacity-40" />
          {eyebrow}
        </p>
        <h2 className="display-lg mt-6">{title}</h2>
      </div>
      {aside && <div className={cn("md:col-span-4 md:pb-3", muted)}>{aside}</div>}
    </div>
  );
}
