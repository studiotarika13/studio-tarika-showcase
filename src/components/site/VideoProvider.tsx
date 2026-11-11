import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

import type { WorkItem } from "@/data/work";
import { drivePreviewUrl, driveViewUrl, isAiCreative } from "@/lib/portfolio";
import { thumbFor } from "@/lib/thumbnails";
import { cn } from "@/lib/utils";

interface VideoContextValue {
  open: (items: WorkItem[], index: number) => void;
}

const VideoContext = createContext<VideoContextValue | null>(null);

export function useVideo() {
  const ctx = useContext(VideoContext);
  if (!ctx) throw new Error("useVideo must be used inside <VideoProvider>");
  return ctx;
}

export function VideoProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{ items: WorkItem[]; index: number } | null>(null);

  const open = useCallback((items: WorkItem[], index: number) => setState({ items, index }), []);
  const value = useMemo(() => ({ open }), [open]);

  const item = state ? state.items[state.index] : undefined;
  const total = state?.items.length ?? 0;
  const go = (delta: number) =>
    setState((s) => (s ? { ...s, index: (s.index + delta + s.items.length) % s.items.length } : s));

  return (
    <VideoContext.Provider value={value}>
      {children}
      <DialogPrimitive.Root open={Boolean(item)} onOpenChange={(o) => !o && setState(null)}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-[70] bg-veil backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
          <DialogPrimitive.Content
            className="fixed inset-0 z-[71] flex flex-col text-on-ink outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[0.98] data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
            onKeyDown={(e) => {
              if (total < 2) return;
              if (e.key === "ArrowRight") go(1);
              if (e.key === "ArrowLeft") go(-1);
            }}
          >
            {item && (
              <>
                <div className="container-studio flex items-center justify-between gap-4 py-4 md:py-6">
                  <div className="min-w-0">
                    <p className="eyebrow text-on-ink-muted">
                      {isAiCreative(item) ? "AI creative" : item.category}
                      <span className="mx-2 text-brass">·</span>
                      {String((state?.index ?? 0) + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </p>
                    <DialogPrimitive.Title className="font-display mt-1 truncate text-2xl md:text-3xl">
                      {item.title}
                    </DialogPrimitive.Title>
                    <DialogPrimitive.Description className="sr-only">
                      Video player for {item.title}. Use the arrow keys for the previous or next piece, Escape to close.
                    </DialogPrimitive.Description>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <a
                      href={driveViewUrl(item.id)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label-sm link-line hidden items-center gap-1 py-1 text-on-ink sm:inline-flex"
                    >
                      Open in Drive <ArrowUpRight className="size-3.5" aria-hidden />
                    </a>
                    <DialogPrimitive.Close
                      className="ml-3 grid size-11 place-items-center rounded-full border border-on-ink/30 transition-colors hover:bg-on-ink hover:text-ink"
                      aria-label="Close video"
                    >
                      <X className="size-5" aria-hidden />
                    </DialogPrimitive.Close>
                  </div>
                </div>

                <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4 md:px-20">
                  {total > 1 && (
                    <button
                      type="button"
                      onClick={() => go(-1)}
                      aria-label="Previous video"
                      className="absolute left-3 top-1/2 z-10 hidden size-12 -translate-y-1/2 place-items-center rounded-full border border-on-ink/25 transition-colors hover:bg-on-ink hover:text-ink md:grid lg:left-8"
                    >
                      <ArrowLeft className="size-5" aria-hidden />
                    </button>
                  )}
                  <div
                    key={item.id}
                    className={cn(
                      "relative overflow-hidden bg-ink shadow-frame",
                      item.format === "reel"
                        ? "aspect-[9/16] h-full max-h-[calc(100dvh-11rem)] max-w-full"
                        : "aspect-video w-full max-w-[min(72rem,calc((100dvh-11rem)*16/9))]",
                    )}
                  >
                    <img
                      src={thumbFor(item.id)}
                      alt=""
                      aria-hidden
                      className="absolute inset-0 size-full object-cover opacity-40 blur-sm"
                    />
                    <iframe
                      src={drivePreviewUrl(item.id)}
                      title={`${item.title} — video`}
                      allow="autoplay; fullscreen; encrypted-media"
                      allowFullScreen
                      className="absolute inset-0 size-full border-0"
                    />
                  </div>
                  {total > 1 && (
                    <button
                      type="button"
                      onClick={() => go(1)}
                      aria-label="Next video"
                      className="absolute right-3 top-1/2 z-10 hidden size-12 -translate-y-1/2 place-items-center rounded-full border border-on-ink/25 transition-colors hover:bg-on-ink hover:text-ink md:grid lg:right-8"
                    >
                      <ArrowRight className="size-5" aria-hidden />
                    </button>
                  )}
                </div>

                <div className="container-studio flex items-center justify-between gap-4 pb-5 md:hidden">
                  {total > 1 ? (
                    <div className="flex gap-2">
                      <button type="button" onClick={() => go(-1)} aria-label="Previous video" className="grid size-11 place-items-center rounded-full border border-on-ink/25">
                        <ArrowLeft className="size-5" aria-hidden />
                      </button>
                      <button type="button" onClick={() => go(1)} aria-label="Next video" className="grid size-11 place-items-center rounded-full border border-on-ink/25">
                        <ArrowRight className="size-5" aria-hidden />
                      </button>
                    </div>
                  ) : (
                    <span />
                  )}
                  <a
                    href={driveViewUrl(item.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label-sm inline-flex items-center gap-1 text-on-ink"
                  >
                    Open in Drive <ArrowUpRight className="size-3.5" aria-hidden />
                  </a>
                </div>
              </>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </VideoContext.Provider>
  );
}
