import { createFileRoute } from "@tanstack/react-router";

import { ContactSection } from "@/components/site/ContactSection";

export const Route = createFileRoute("/contact")({
  staticData: { sitemap: true },
  validateSearch: (search: Record<string, unknown>): { service?: string } =>
    typeof search["service"] === "string" ? { service: search["service"] } : {},
  head: () => ({
    meta: [
      { title: "Contact — Studio Tarika" },
      {
        name: "description",
        content: "Start a conversation with Studio Tarika by email, phone or WhatsApp. Your message goes straight to Bhavishya.",
      },
      { property: "og:title", content: "Contact — Studio Tarika" },
      { property: "og:description", content: "Ready for your next chapter? Start a conversation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://studio-tarika-showcase.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://studio-tarika-showcase.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { service } = Route.useSearch();
  return (
    <div className="pt-16 md:pt-20">
      <ContactSection key={service ?? "none"} defaultService={service} index="01" />
    </div>
  );
}
