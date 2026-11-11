import * as Accordion from "@radix-ui/react-accordion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Plus } from "lucide-react";

import { SERVICES } from "@/data/services";
import { Reveal } from "./Reveal";

export function ServicesSection({ index = "03" }: { index?: string }) {
  return (
    <section id="services" aria-labelledby="services-title" className="container-studio py-24 md:py-36">
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow flex items-center gap-3 text-muted-foreground">
              <span className="text-olive">({index})</span>
              <span aria-hidden className="h-px w-10 bg-current opacity-40" />
              Services
            </p>
            <h2 id="services-title" className="display-lg mt-6">
              One studio, <em className="text-olive">every</em> part of the story.
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
              From the first plan to the final post — strategy, social, shoots, design, web and film, run as one
              joined-up effort with one creative lead.
            </p>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-8" delay={120}>
          <Accordion.Root type="single" collapsible defaultValue="strategy" className="border-t border-foreground/20">
            {SERVICES.map((s) => (
              <Accordion.Item key={s.slug} value={s.slug} className="group/item border-b border-foreground/20">
                <Accordion.Header>
                  <Accordion.Trigger className="group grid w-full grid-cols-[2.5rem_minmax(0,1fr)_auto] items-start gap-3 py-7 text-left md:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,14rem)_auto] md:gap-6 md:py-9">
                    <span className="eyebrow pt-3 text-olive md:pt-4">{s.number}</span>
                    <span className="font-display text-[1.75rem] leading-[1.1] transition-colors duration-500 group-hover:text-olive md:text-[2.6rem]">
                      {s.title}
                    </span>
                    <span className="hidden pt-3 text-sm leading-relaxed text-muted-foreground md:block">{s.summary}</span>
                    <span
                      aria-hidden
                      className="mt-1 grid size-10 place-items-center rounded-full border border-foreground/25 transition-all duration-500 group-hover:border-foreground group-data-[state=open]:rotate-45 group-data-[state=open]:bg-ink group-data-[state=open]:text-on-ink md:size-12"
                    >
                      <Plus className="size-4" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="grid gap-8 pb-10 md:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,1fr)] md:gap-6">
                    <span className="hidden md:block" />
                    <div>
                      <p className="font-display text-xl italic text-foreground/85 md:hidden">{s.summary}</p>
                      <p className="mt-3 max-w-lg text-[1.0625rem] leading-relaxed text-foreground/80 md:mt-0">{s.description}</p>
                      <Link
                        to="/contact"
                        search={{ service: s.slug }}
                        className="label-sm link-line-static mt-6 inline-flex items-center gap-2 pb-1"
                      >
                        Enquire about this <ArrowRight className="size-3.5" aria-hidden />
                      </Link>
                    </div>
                    <div>
                      <p className="eyebrow text-muted-foreground">Includes</p>
                      <ul className="mt-4 divide-y divide-foreground/10 border-y border-foreground/10">
                        {s.includes.map((inc) => (
                          <li key={inc} className="flex items-center gap-3 py-2.5 text-[0.95rem]">
                            <span aria-hidden className="h-px w-3 bg-brass" />
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}
