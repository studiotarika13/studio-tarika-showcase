import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { WORK } from "@/data/work";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WorkGallery } from "./WorkGallery";

export function WorkSection({ index = "02", showFullLink = true }: { index?: string; showFullLink?: boolean }) {
  return (
    <section id="work" aria-labelledby="work-title" className="container-studio py-24 md:py-32">
      <Reveal>
        <SectionHeading
          index={index}
          eyebrow="Selected work"
          title={
            <span id="work-title">
              Stories, <em className="text-olive">frame</em> by frame.
            </span>
          }
          aside={
            <div className="space-y-4">
              <p className="max-w-xs leading-relaxed">
                {WORK.length} pieces — jewellery films, creator series, brand stories, long-form and AI creative.
              </p>
              {showFullLink && (
                <Link to="/work" className="label-sm link-line-static inline-flex items-center gap-2 pb-1 text-foreground">
                  Full portfolio <ArrowRight className="size-3.5" aria-hidden />
                </Link>
              )}
            </div>
          }
        />
      </Reveal>
      <WorkGallery className="mt-14" />
    </section>
  );
}
