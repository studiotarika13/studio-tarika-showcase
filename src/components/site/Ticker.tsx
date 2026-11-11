const WORDS = [
  "Brand strategy",
  "Social media",
  "Shoots & production",
  "Video editing",
  "AI creative",
  "Graphic design",
  "Web development",
];

export function Ticker() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="overflow-hidden border-y border-foreground/15 py-5" aria-hidden>
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-2xl italic text-foreground/80 md:text-3xl">{w}</span>
            <span className="text-brass">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
