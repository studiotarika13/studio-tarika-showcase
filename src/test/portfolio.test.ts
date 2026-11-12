import { describe, expect, it } from "vitest";
import { WORK } from "@/data/work";
import {
  INITIAL_VISIBLE,
  drivePreviewUrl,
  driveViewUrl,
  filterWork,
  isAiCreative,
  orderedWork,
} from "@/lib/portfolio";

describe("portfolio", () => {
  it("includes every supplied video", () => {
    expect(WORK).toHaveLength(42);
  });

  it("opens with the curated set of 8 led by ONS Necklace, TDR Teaser and Wine Educator", () => {
    expect(INITIAL_VISIBLE).toBe(8);
    const titles = orderedWork().slice(0, 8).map((w) => w.title);
    expect(titles.slice(0, 3)).toEqual(["ONS Necklace", "TDR Teaser", "Creator's Corner"]);
    expect(titles).toContain("Jaipur Watch");
    expect(titles).toContain("AI Necklace Showreel");
  });

  it("filters by category", () => {
    expect(filterWork("Long-form").map((w) => w.title)).toEqual([
      "Jaipur Watch",
      "Vlog 1",
      "Vlog 2",
      "Visual Precision",
      "Medical YouTube",
    ]);
    expect(filterWork("UGC")).toHaveLength(4);
    expect(filterWork("All")).toHaveLength(42);
  });

  it("labels AI films as AI creative only", () => {
    expect(WORK.filter(isAiCreative)).toHaveLength(6);
    expect(isAiCreative(WORK.find((w) => w.title === "ONS Necklace")!)).toBe(false);
  });

  it("builds Drive player and fallback links from the file ID", () => {
    expect(drivePreviewUrl("abc")).toBe("https://drive.google.com/file/d/abc/preview");
    expect(driveViewUrl("abc")).toBe("https://drive.google.com/file/d/abc/view");
  });
});
