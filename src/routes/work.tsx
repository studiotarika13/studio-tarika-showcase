import { createFileRoute } from "@tanstack/react-router";

import { PageIntro } from "@/components/site/PageIntro";
import { WorkGallery } from "@/components/site/WorkGallery";
import { ContactSection } from "@/components/site/ContactSection";
import { WORK } from "@/data/work";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Studio Tarika" },
      {
        name: "description",
        content:
          "The full Studio Tarika portfolio: jewellery films, creator series, UGC, brand stories, long-form video, trading education and AI creative.",
      },
      { property: "og:title", content: "Work — Studio Tarika" },
      { property: "og:description", content: "Reels, long-form films and AI creative by Studio Tarika." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <PageIntro eyebrow="Portfolio · All work" title={<>The <em className="text-olive">work.</em></>}>
        <p>
          {WORK.length} pieces made for brands and creators — filter by category, press any frame to play. AI pieces are
          labelled as AI creative.
        </p>
      </PageIntro>
      <section aria-label="Portfolio" className="container-studio pb-24 pt-16 md:pb-32">
        <WorkGallery />
      </section>
      <ContactSection index="02" />
    </>
  );
}
