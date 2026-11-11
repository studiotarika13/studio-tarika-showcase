import { ArrowUpRight } from "lucide-react";
import { COLLABORATIONS } from "@/data/services";
import { Reveal } from "./Reveal";

export function Collaborations() {
  return (
    <section aria-labelledby="collab-title" className="container-studio py-20 md:py-28">
      <Reveal className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-3">
          <h2 id="collab-title" className="eyebrow text-muted-foreground">
            Selected creative collaborations
          </h2>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Brands and creators we've made work with. The scope of each collaboration varied.
          </p>
        </div>
        <ul className="md:col-span-9">
          {COLLABORATIONS.map((c, i) => (
            <li key={c.handle} className="border-b border-foreground/15 first:border-t">
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between gap-4 py-4 md:py-5"
                aria-label={`${c.name} on Instagram (opens in a new tab)`}
              >
                <span className="flex min-w-0 items-baseline gap-4 md:gap-6">
                  <span className="eyebrow w-6 shrink-0 text-muted-foreground">0{i + 1}</span>
                  <span className="font-display truncate text-3xl transition-all duration-700 ease-studio group-hover:translate-x-2 group-hover:italic group-hover:text-olive md:text-5xl">
                    {c.name}
                  </span>
                </span>
                <span className="label-sm flex shrink-0 items-center gap-1 text-muted-foreground transition-colors group-hover:text-foreground">
                  <span className="hidden sm:inline">@{c.handle}</span>
                  <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
