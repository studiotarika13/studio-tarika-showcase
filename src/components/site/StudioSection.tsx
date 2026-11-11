import { CONTACT } from "@/lib/contact";
import { Monogram } from "./Logo";
import { Reveal } from "./Reveal";

const PRINCIPLES = [
  { title: "Thoughtful storytelling", text: "Every piece starts with what your audience should feel and remember." },
  { title: "Clean editing", text: "Rhythm, restraint and detail — nothing in the frame without a reason." },
  { title: "Consistent execution", text: "A steady calendar and a visual language that holds together over time." },
  { title: "Direct communication", text: "You speak with the person leading the work, not a chain of messages." },
];

export function StudioSection({ index = "04" }: { index?: string }) {
  return (
    <section id="studio" aria-labelledby="studio-title" className="bg-stone/60 py-24 md:py-36">
      <div className="container-studio grid gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <div className="relative flex aspect-[4/5] items-center justify-center bg-paper shadow-soft">
            <span className="eyebrow absolute left-5 top-5 text-muted-foreground">Studio Tarika</span>
            <span className="eyebrow absolute right-5 top-5 text-muted-foreground">Monogram</span>
            <Monogram className="w-[46%]" />
            <span className="absolute inset-x-5 bottom-5 flex items-center justify-between border-t border-foreground/15 pt-4">
              <span className="eyebrow text-muted-foreground">Founder-led</span>
              <span className="eyebrow text-olive">S · T</span>
            </span>
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-muted-foreground">
              <span className="text-olive">({index})</span>
              <span aria-hidden className="h-px w-10 bg-current opacity-40" />
              The studio
            </p>
            <h2 id="studio-title" className="display-lg mt-6">
              Founder-led. <em className="text-olive">Directly</em> involved.
            </h2>
          </Reveal>

          <Reveal delay={120} className="mt-10 space-y-5 text-[1.0625rem] leading-relaxed text-foreground/80">
            <p>
              Studio Tarika is led by {CONTACT.founder}, Founder & Creative Lead. Bhavishya's background is in creating
              reels, ads and brand videos for agencies and businesses — a craft that now sits at the centre of a broader
              studio for strategy, social, shoots, design and web.
            </p>
            <p>
              You work with Bhavishya directly. For each project, specialist freelance collaborators are brought in
              around the agreed scope, so the team fits the work — and one creative lead stays with you from the first
              brief to the monthly review.
            </p>
          </Reveal>

          <Reveal delay={200} className="mt-10 flex items-center gap-5 border-y border-foreground/15 py-6">
            <span className="font-display text-5xl italic text-olive">B.</span>
            <span>
              <span className="font-display block text-2xl">{CONTACT.founder}</span>
              <span className="label-sm text-muted-foreground">Founder & Creative Lead</span>
            </span>
          </Reveal>

          <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 90} className="border-t border-foreground/20 pt-5">
                <p className="eyebrow text-olive">0{i + 1}</p>
                <h3 className="font-display mt-3 text-2xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
