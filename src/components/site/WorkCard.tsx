import { ArrowUpRight, Play } from "lucide-react";
import { useState } from "react";

import type { WorkItem } from "@/data/work";
import { driveViewUrl, isAiCreative } from "@/lib/portfolio";
import { thumbFor } from "@/lib/thumbnails";
import { cn } from "@/lib/utils";

interface WorkCardProps {
  item: WorkItem;
  number?: number;
  onPlay: () => void;
  className?: string;
  /** Frame-only variant for the hero collage (no caption). */
  bare?: boolean;
  sizes?: string;
  eager?: boolean;
}

export function PlayMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "grid place-items-center rounded-full border border-on-ink/60 bg-ink/25 text-on-ink backdrop-blur-md transition-all duration-700 ease-studio group-hover:scale-110 group-hover:border-on-ink group-hover:bg-on-ink group-hover:text-ink",
        className,
      )}
    >
      <Play className="ml-0.5 size-[38%] fill-current" strokeWidth={0} />
    </span>
  );
}

export function WorkCard({ item, number, onPlay, className, bare, eager }: WorkCardProps) {
  const [failed, setFailed] = useState(false);
  const ai = isAiCreative(item);
  const label = ai ? "AI creative" : item.category;

  return (
    <figure className={cn("group relative", className)}>
      <button
        type="button"
        onClick={onPlay}
        aria-label={`Play ${item.title} — ${label}`}
        className={cn(
          "relative block w-full overflow-hidden bg-stone text-left",
          item.format === "reel" ? "aspect-[9/16]" : "aspect-video",
        )}
      >
        {failed ? (
          <span className="absolute inset-0 flex flex-col justify-between bg-paper p-5">
            <span className="eyebrow text-olive">{label}</span>
            <span className="font-display text-3xl leading-tight text-foreground">{item.title}</span>
            <span className="label-sm text-muted-foreground">Press to watch</span>
          </span>
        ) : (
          <img
            src={thumbFor(item.id)}
            alt={`${item.title} — ${label} video thumbnail`}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            width={item.format === "reel" ? 720 : 1280}
            height={item.format === "reel" ? 1280 : 720}
            onError={() => setFailed(true)}
            className="absolute inset-0 size-full object-cover transition-transform duration-[1400ms] ease-studio group-hover:scale-[1.045]"
          />
        )}
        {!failed && <span aria-hidden className="bg-scrim absolute inset-0 opacity-60 transition-opacity duration-700 group-hover:opacity-90" />}
        <span className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          <span
            className={cn(
              "eyebrow rounded-full px-2.5 py-1 text-[0.625rem] backdrop-blur-md",
              ai ? "bg-brass text-ink" : "bg-paper/85 text-ink",
            )}
          >
            {label}
          </span>
        </span>
        <span className="absolute inset-0 grid place-items-center">
          <PlayMark className={bare ? "size-12" : "size-14 opacity-90"} />
        </span>
      </button>

      {!bare && (
        <figcaption className="mt-3 flex items-baseline justify-between gap-3 border-t border-foreground/15 pt-3">
          <span className="min-w-0">
            {number !== undefined && (
              <span className="eyebrow mr-2 text-muted-foreground">{String(number).padStart(2, "0")}</span>
            )}
            <span className="font-display text-lg leading-snug md:text-xl">{item.title}</span>
          </span>
          {failed ? (
            <a
              href={driveViewUrl(item.id)}
              target="_blank"
              rel="noopener noreferrer"
              className="label-sm inline-flex shrink-0 items-center gap-1 text-olive"
            >
              Watch <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          ) : (
            <span className="label-sm shrink-0 text-muted-foreground">{item.format === "reel" ? "9:16" : "16:9"}</span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
