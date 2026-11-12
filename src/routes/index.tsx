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
  staticData: { sitemap: true },
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
      { property: "og:url", content: "https://studio-tarika-showcase.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://studio-tarika-showcase.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Studio Tarika",
          url: "https://studio-tarika-showcase.lovable.app/",
          description:
            "Independent, founder-led creative and marketing studio: brand strategy, social media marketing, shoots, video editing & AI creative, graphic design and web development.",
          email: "tarikabhavishya@gmail.com",
          telephone: "+91 81939 33388",
          founder: { "@type": "Person", name: "Bhavishya Tarika", jobTitle: "Founder & Creative Lead" },
          knowsAbout: [
            "Brand strategy",
            "Social media marketing",
            "Video editing",
            "Jewellery videos",
            "AI creative",
            "Graphic design",
            "Web development",
          ],
        }),
      },
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
