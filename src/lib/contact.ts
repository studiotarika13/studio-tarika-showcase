export const CONTACT = {
  email: "tarikabhavishya@gmail.com",
  phoneDisplay: "+91 81939 33388",
  phoneHref: "tel:+918193933388",
  whatsappNumber: "918193933388",
  founder: "Bhavishya Tarika",
} as const;

export const DEFAULT_ENQUIRY =
  "Hello Studio Tarika, I'd like to discuss a creative and marketing project for my brand. Could we find a time to talk?";

export const whatsappUrl = (text: string = DEFAULT_ENQUIRY) =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const mailtoUrl = (
  subject = "Project enquiry — Studio Tarika",
  body = "Hello Bhavishya,\n\nI'd like to discuss a project for my brand.\n\nBusiness:\nWhat we need:\nTimeline:\n\nThank you.",
) => `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export interface EnquiryInput {
  name: string;
  business?: string;
  service?: string;
  brief: string;
}

/** Builds the WhatsApp message from the contact form. Nothing is sent until the visitor presses send in WhatsApp. */
export function buildEnquiryMessage({ name, business, service, brief }: EnquiryInput): string {
  const lines = ["Hello Studio Tarika,", ""];
  const who = business?.trim() ? `${name.trim()} from ${business.trim()}` : name.trim();
  lines.push(`My name is ${who}.`);
  if (service?.trim()) lines.push(`I'm interested in: ${service.trim()}.`);
  lines.push("", "Brief:", brief.trim(), "", "Looking forward to speaking with you.");
  return lines.join("\n");
}
