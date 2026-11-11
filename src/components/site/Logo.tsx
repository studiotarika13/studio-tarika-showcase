import wordmark from "@/assets/brand/wordmark.png.asset.json";
import monogram from "@/assets/brand/monogram.png.asset.json";
import { cn } from "@/lib/utils";

// Original artwork, background removed; intrinsic sizes keep the true aspect ratios.
export function Wordmark({ className }: { className?: string }) {
  return (
    <img
      src={wordmark.url}
      alt="Studio Tarika"
      width={1680}
      height={258}
      className={cn("block h-auto select-none", className)}
      draggable={false}
    />
  );
}

export function Monogram({ className, alt = "Studio Tarika monogram" }: { className?: string; alt?: string }) {
  return (
    <img
      src={monogram.url}
      alt={alt}
      width={728}
      height={943}
      className={cn("block h-auto select-none", className)}
      draggable={false}
    />
  );
}
