import { createFileRoute } from "@tanstack/react-router";

import { Collaborations } from "@/components/site/Collaborations";
import { ContactSection } from "@/components/site/ContactSection";
import { PageIntro } from "@/components/site/PageIntro";
import { ProcessSection } from "@/components/site/ProcessSection";
import { StudioSection } from "@/components/site/StudioSection";

export const Route = createFileRoute("/studio")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Studio — Studio Tarika" },
      {
        name: "description",
        content:
          "Studio Tarika is founder-led by Bhavishya Tarika, Founder & Creative Lead, working directly with clients alongside specialist freelance collaborators.",
      },
      { property: "og:title", content: "Studio — Studio Tarika" },
      { property: "og:description", content: "Founder-led. Directly involved. One creative lead from brief to review." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://studio-tarika-showcase.lovable.app/studio" },
    ],
    links: [{ rel: "canonical", href: "https://studio-tarika-showcase.lovable.app/studio" }],
  }),
  component: StudioPage,
});

function StudioPage() {
  return (
    <>
      <PageIntro eyebrow="The studio" title={<>Small by <em className="text-olive">design.</em></>}>
        <p>One creative lead, the right specialists for each brief, and a direct line throughout.</p>
      </PageIntro>
      <div className="mt-20">
        <StudioSection index="01" />
      </div>
      <Collaborations />
      <ProcessSection index="02" />
      <ContactSection index="03" />
    </>
  );
}
