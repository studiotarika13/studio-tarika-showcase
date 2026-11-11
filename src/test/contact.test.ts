import { describe, expect, it } from "vitest";
import { buildEnquiryMessage, mailtoUrl, whatsappUrl } from "@/lib/contact";

describe("contact", () => {
  it("sends WhatsApp enquiries to +91 81939 33388", () => {
    expect(whatsappUrl("Hi")).toBe("https://wa.me/918193933388?text=Hi");
  });

  it("emails tarikabhavishya@gmail.com", () => {
    expect(mailtoUrl().startsWith("mailto:tarikabhavishya@gmail.com?")).toBe(true);
  });

  it("builds the message from name, business, service and brief", () => {
    const msg = buildEnquiryMessage({
      name: "Asha",
      business: "Asha Jewels",
      service: "Shoots & production",
      brief: "Festive product shoot",
    });
    expect(msg).toContain("My name is Asha from Asha Jewels.");
    expect(msg).toContain("I'm interested in: Shoots & production.");
    expect(msg).toContain("Festive product shoot");
  });

  it("omits business and service when left empty", () => {
    const msg = buildEnquiryMessage({ name: "Asha", brief: "A website" });
    expect(msg).toContain("My name is Asha.");
    expect(msg).not.toContain("interested in");
  });
});
