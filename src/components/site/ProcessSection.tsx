import { PROCESS } from "@/data/services";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ProcessSection({ index = "05" }: { index?: string }) {
  return (
    <section id="process" aria-labelledby="process-title" className="container-studio py-24 md:py-36">
      <Reveal>
        <SectionHeading
          index={index}
          eyebrow="Process"
          title={
            <span id="process-title">
              Four steps, <em className="text-olive">every</em> month.
            </span>
          }
          aside={<p className="max-w-xs leading-relaxed">A simple rhythm that keeps the work moving and the conversation open.</p>}
        />
      </Reveal>

      <ol className="mt-16 grid gap-px overflow-hidden border border-foreground/15 bg-foreground/15 md:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map((step, i) => (
          <Reveal
            as="li"
            key={step.number}
            delay={i * 110}
            className="group flex min-h-[19rem] flex-col justify-between bg-background p-7 transition-colors duration-700 hover:bg-paper md:p-9"
          >
            <span className="font-display text-7xl italic text-foreground/15 transition-colors duration-700 group-hover:text-olive md:text-8xl">
              {step.number}
            </span>
            <div>
              <h3 className="font-display text-3xl">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Clearer presence, steadier output and stronger stories are the goals we work towards together — they are
        aims, not guaranteed results.
      </p>
    </section>
  );
}
