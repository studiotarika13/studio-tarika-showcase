import { createFileRoute } from "@tanstack/react-router";

import { Collaborations } from "@/components/site/Collaborations";
import { ContactSection } from "@/components/site/ContactSection";
import { Hero } from "@/components/site/Hero";
import { ProcessSection } from "@/components/site/ProcessSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { StudioSection } from "@/components/site/StudioSection";
import { Ticker } from "@/components/site/Ticker";
import { WorkSection } from "@/components/site/WorkSection";

// The home route ships no og:image, so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Tarika — Creative & Marketing Agency" },
      {
        name: "description",
        content:
          "Make your brand impossible to overlook. Studio Tarika is an independent creative & marketing studio for strategy, social, shoots, design, web, video and AI creative.",
      },
      { property: "og:title", content: "Studio Tarika — Creative & Marketing Agency" },
      {
        property: "og:description",
        content: "Strategy, stories and digital experiences. Thoughtfully made for brands ready for their next chapter.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <div className="mt-16 md:mt-24">
        <Ticker />
      </div>
      <Collaborations />
      <WorkSection />
      <ServicesSection />
      <StudioSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
