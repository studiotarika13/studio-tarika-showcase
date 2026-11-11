import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { DRIVE_FOLDER_URL } from "@/data/work";
import { INITIAL_VISIBLE, LOAD_STEP, WORK_FILTERS, filterWork, type WorkFilter } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { useVideo } from "./VideoProvider";
import { WorkCard } from "./WorkCard";

export function WorkGallery({ className }: { className?: string }) {
  const [filter, setFilter] = useState<WorkFilter>("All");
  const [visible, setVisible] = useState(INITIAL_VISIBLE);
  const { open } = useVideo();

  const items = useMemo(() => filterWork(filter), [filter]);
  const shown = items.slice(0, visible);
  const allWide = shown.length > 0 && shown.every((i) => i.format === "wide");
  const remaining = items.length - shown.length;

  return (
    <div className={className}>
      <div
        role="group"
        aria-label="Filter work by category"
        className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:px-0"
      >
        {WORK_FILTERS.map((f) => (
          <Button
            key={f}
            type="button"
            variant="chip"
            size="chip"
            aria-pressed={filter === f}
            onClick={() => {
              setFilter(f);
              setVisible(INITIAL_VISIBLE);
            }}
            className="shrink-0"
          >
            {f}
            <span className="ml-1 text-[0.6875rem] opacity-60">{filterWork(f).length}</span>
          </Button>
        ))}
      </div>

      <p className="label-sm mt-6 text-muted-foreground" aria-live="polite">
        Showing {shown.length} of {items.length} {filter === "All" ? "pieces" : `· ${filter}`}
      </p>

      <ul
        className={cn(
          "mt-6 grid gap-x-4 gap-y-10 md:gap-x-5",
          allWide ? "grid-cols-1 md:grid-cols-2" : "grid-flow-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        )}
      >
        {shown.map((item, i) => (
          <li
            key={item.id}
            className={cn(
              "animate-rise",
              !allWide && item.format === "wide" && "col-span-2 md:col-span-3",
            )}
            style={{ animationDelay: `${(i % LOAD_STEP) * 60}ms` }}
          >
            <WorkCard item={item} number={i + 1} onPlay={() => open(shown, i)} />
          </li>
        ))}
      </ul>

      <div className="mt-14 flex flex-col items-center gap-4 border-t border-foreground/15 pt-10 text-center">
        {remaining > 0 ? (
          <Button
            type="button"
            variant="line"
            size="pill"
            onClick={() => setVisible((v) => v + LOAD_STEP)}
          >
            Load more · {Math.min(LOAD_STEP, remaining)} of {remaining} remaining
          </Button>
        ) : (
          <p className="font-display text-2xl italic text-muted-foreground">That's everything in this collection.</p>
        )}
        <a
          href={DRIVE_FOLDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="label-sm link-line inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
        >
          Browse the full Drive folder <ArrowUpRight className="size-3.5" aria-hidden />
        </a>
      </div>
    </div>
  );
}
