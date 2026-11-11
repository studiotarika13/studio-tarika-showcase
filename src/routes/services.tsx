import { createFileRoute } from "@tanstack/react-router";

import { ContactSection } from "@/components/site/ContactSection";
import { PageIntro } from "@/components/site/PageIntro";
import { ProcessSection } from "@/components/site/ProcessSection";
import { ServicesSection } from "@/components/site/ServicesSection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Studio Tarika" },
      {
        name: "description",
        content:
          "Brand strategy, social media management, shoots, video editing & AI creative, graphic design and web development — one founder-led studio.",
      },
      { property: "og:title", content: "Services — Studio Tarika" },
      { property: "og:description", content: "Six services, one creative lead, from first brief to monthly review." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="Services" title={<>What we <em className="text-olive">make.</em></>}>
        <p>A full-service creative and marketing studio — planned, produced and published as one joined-up effort.</p>
      </PageIntro>
      <ServicesSection index="01" />
      <ProcessSection index="02" />
      <ContactSection index="03" />
    </>
  );
}
