import type { ReactNode } from "react";

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="container-studio pt-32 md:pt-44">
      <p className="eyebrow animate-fade border-b border-foreground/15 pb-5 text-muted-foreground">{eyebrow}</p>
      <h1 className="display-xl animate-rise mt-10 max-w-[14ch]">{title}</h1>
      {children && (
        <div className="animate-rise mt-8 max-w-xl text-lg leading-relaxed text-foreground/80" style={{ animationDelay: "160ms" }}>
          {children}
        </div>
      )}
    </section>
  );
}
