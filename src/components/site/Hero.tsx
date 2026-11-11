import { Link } from "@tanstack/react-router";
import { ArrowDownRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HERO_IDS, WORK, type WorkItem } from "@/data/work";
import { findWork } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { useVideo } from "./VideoProvider";
import { WorkCard } from "./WorkCard";

const pick = (id: string) => findWork(id) as WorkItem;

export function Hero() {
  const { open } = useVideo();
  const reel = [pick(HERO_IDS.tdr), pick(HERO_IDS.ons), pick(HERO_IDS.jaipur), pick(HERO_IDS.wine), pick(HERO_IDS.ai)];
  const play = (i: number) => open(reel, i);

  // Desktop stagger for a cinematic, off-grid strip.
  const frame = [
    "w-[42vw] sm:w-[30vw] lg:w-auto lg:mt-28",
    "w-[56vw] sm:w-[38vw] lg:w-auto",
    "w-[80vw] sm:w-[56vw] lg:w-auto lg:mt-12",
    "w-[42vw] sm:w-[30vw] lg:w-auto lg:mt-16",
    "w-[42vw] sm:w-[30vw] lg:w-auto lg:mt-40",
  ];

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="container-studio">
        <div className="animate-fade flex items-center justify-between gap-6 border-b border-foreground/15 pb-5">
          <p className="eyebrow text-foreground">Independent creative & marketing studio</p>
          <p className="eyebrow hidden text-muted-foreground md:block">Founder-led · Strategy to screen</p>
        </div>

        <h1 id="hero-title" className="display-xl mt-10 md:mt-14">
          <span className="block overflow-hidden pb-[0.06em]">
            <span className="animate-mask block" style={{ animationDelay: "120ms" }}>Make your brand</span>
          </span>
          <span className="block overflow-hidden pb-[0.06em] pl-[8vw]">
            <span className="animate-mask block italic text-olive" style={{ animationDelay: "260ms" }}>impossible</span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <span className="animate-mask block" style={{ animationDelay: "400ms" }}>to overlook.</span>
          </span>
        </h1>

        <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-12 md:items-end">
          <p
            className="animate-rise max-w-md text-lg leading-relaxed text-foreground/80 md:col-span-5 md:col-start-8 md:text-xl"
            style={{ animationDelay: "600ms" }}
          >
            Strategy, stories and digital experiences. Thoughtfully made for brands ready for their next chapter.
          </p>
          <div
            className="animate-rise flex flex-wrap gap-3 md:col-span-6 md:col-start-1 md:row-start-1"
            style={{ animationDelay: "700ms" }}
          >
            <Button asChild variant="ink" size="pill">
              <Link to="/" hash="work">
                View our work <ArrowDownRight aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="line" size="pill">
              <Link to="/" hash="contact">Start a conversation</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-20">
        <ul
          aria-label="Featured work"
          className="no-scrollbar container-studio flex snap-x snap-mandatory scroll-px-5 md:scroll-px-10 items-start gap-3 overflow-x-auto pb-4 md:gap-4 lg:grid lg:grid-cols-[2.2fr_3fr_4.2fr_2.6fr_2fr] lg:gap-5 lg:overflow-visible"
        >
          {reel.map((item, i) => (
            <li
              key={item.id}
              className={cn("animate-rise shrink-0 snap-start", frame[i])}
              style={{ animationDelay: `${780 + i * 110}ms` }}
            >
              <WorkCard item={item} onPlay={() => play(i)} bare eager className="shadow-frame" />
              {i === 2 ? (
                <div className="mt-6 hidden lg:block">
                  <p className="eyebrow text-muted-foreground">Selected work</p>
                  <p className="font-display mt-3 text-2xl leading-snug">
                    {WORK.length} pieces across reels, long-form films and AI creative.
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">Press any frame to play.</p>
                </div>
              ) : (
                <p className="mt-3 flex flex-col gap-1">
                  <span className="truncate font-display text-base md:text-lg">{item.title}</span>
                  <span className="eyebrow text-[0.625rem] text-muted-foreground">
                    {item.category === "AI films" ? "AI creative" : item.category}
                  </span>
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
