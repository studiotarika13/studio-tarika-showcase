export interface Service {
  slug: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  includes: string[];
  note?: string;
}

export const SERVICES: Service[] = [
  {
    slug: "strategy",
    number: "01",
    title: "Brand strategy & planning",
    summary: "A clear direction before anything is made.",
    description:
      "We begin by understanding who you are speaking to and what matters most to them. From there we shape a voice and a set of content themes, then plan monthly campaigns so every post, shoot and film points the same way.",
    includes: ["Audience priorities", "Brand voice", "Content themes", "Monthly campaign plans"],
  },
  {
    slug: "social",
    number: "02",
    title: "Social media marketing & management",
    summary: "A consistent, considered presence — handled for you.",
    description:
      "Day-to-day care of your channels: writing captions, building the content calendar, publishing on schedule and keeping profiles current. Community responses follow guidelines we agree with you in advance.",
    includes: [
      "Captions & copy",
      "Content calendar",
      "Publishing",
      "Profile updates",
      "Agreed community response",
      "Campaign reporting",
      "Paid-ad management (optional)",
    ],
  },
  {
    slug: "shoots",
    number: "03",
    title: "Shoots & production",
    summary: "Concepts brought to life on set.",
    description:
      "From the first concept to the final frame captured: we plan the shoot, prepare the shot list and capture on location — product content for brands, and natural, scroll-stopping content alongside creators.",
    includes: ["Concepts", "Shoot planning", "On-site capture", "Product content", "Creator content"],
  },
  {
    slug: "video",
    number: "04",
    title: "Video editing & AI creative",
    summary: "Clean edits and new kinds of imagery.",
    description:
      "Reels, long-form and brand films edited with rhythm and restraint, finished with motion graphics where they help the story. AI-generated visuals extend what's possible — and are always presented as AI creative.",
    includes: ["Reels", "Long-form video", "Brand films", "Motion graphics", "AI-generated visuals"],
  },
  {
    slug: "design",
    number: "05",
    title: "Graphic design",
    summary: "A visual language that holds together.",
    description:
      "Social creatives and campaign visuals designed as one family, so your brand is recognisable at a glance — in the feed, in a story, or on a festive post.",
    includes: ["Social creatives", "Campaign visuals", "Consistent visual identity"],
  },
  {
    slug: "web",
    number: "06",
    title: "Web development",
    summary: "A digital home that feels like your brand.",
    description:
      "Responsive websites built to be fast, clear and easy to update — whether it's a full brand site, a portfolio or a focused landing page for a campaign.",
    includes: ["Responsive brand websites", "Portfolios", "Landing pages"],
  },
];

export const PROCESS = [
  {
    number: "01",
    title: "Discover & plan",
    text: "We learn your brand, audience and priorities, then agree the scope, content themes and a monthly plan.",
  },
  {
    number: "02",
    title: "Create & approve",
    text: "Concepts, shoots, edits and designs are produced and shared with you for review before anything goes live.",
  },
  {
    number: "03",
    title: "Launch & publish",
    text: "Approved work is scheduled and published across the agreed channels, on calendar and on brand.",
  },
  {
    number: "04",
    title: "Review & refine",
    text: "Each month we look back at what was published, talk through what's working and refine the next plan.",
  },
];

export const COLLABORATIONS = [
  { name: "Maker of Filmmakers", handle: "makeroffilmmakers", url: "https://www.instagram.com/makeroffilmmakers/" },
  { name: "WineGeekPenny", handle: "winegeekpenny", url: "https://www.instagram.com/winegeekpenny/" },
  { name: "ONS Gold & Diamonds", handle: "onsgoldndiamonds", url: "https://www.instagram.com/onsgoldndiamonds/" },
  { name: "The Digital Rhythm", handle: "thedigitalrhythm", url: "https://www.instagram.com/thedigitalrhythm/" },
  { name: "Muskan Will Tell", handle: "muskan.will.tell", url: "https://www.instagram.com/muskan.will.tell/" },
  { name: "Kiaa Gupta", handle: "kiaagupta_", url: "https://www.instagram.com/kiaagupta_/" },
];
