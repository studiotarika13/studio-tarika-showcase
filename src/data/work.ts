/**
 * Studio Tarika portfolio — edit this list to add, remove or reorder work.
 * Each entry points at a Google Drive video; thumbnails are generated from the same file.
 * `format`: "reel" for 9:16 vertical pieces, "wide" for 16:9 long-form.
 * Items in the "AI films" category are AI creative, not commissioned brand campaigns.
 */
export type WorkCategory =
  | "Jewellery"
  | "AI films"
  | "Brand stories"
  | "Creators"
  | "UGC"
  | "Trading"
  | "Long-form"
  | "Reels";

export type WorkFormat = "reel" | "wide";

export interface WorkItem {
  id: string;
  title: string;
  category: WorkCategory;
  format: WorkFormat;
}

export const WORK: WorkItem[] = [
  { category: "Jewellery", title: "ONS Necklace", id: "1ScviTZzBPaIwYZnh39I_4Djq-R_8vVIb", format: "reel" },
  { category: "Jewellery", title: "ONS Advertising Reel", id: "1VUtWm0rbjBAtTIIqT2ZQXcZu3BRZgVDo", format: "reel" },
  { category: "Jewellery", title: "ONS Showroom", id: "1OZbmiHtQQeNI4ZXLZPT2B0NVs-uF2gxE", format: "reel" },
  { category: "Jewellery", title: "ONS Diwali", id: "1cwQbltvkHWM6q_EWmlbCSXgeu9p0UFnl", format: "reel" },
  { category: "Jewellery", title: "Ring Story", id: "1RKoboatyPM8KKJ-YuQv6ejRDRYVE-yoD", format: "reel" },
  { category: "Jewellery", title: "Gold Rate", id: "1Z2UhcI3KkOcZtHIcqKwbDKOHeEA92O16", format: "reel" },
  { category: "Jewellery", title: "Jewellery Brand", id: "1wgyoYi7Ks7jHC-dPqcJc4WTTYvmAvXfO", format: "reel" },
  { category: "AI films", title: "AI Necklace Showreel", id: "1UZ0O8Makt-hJIUq4SomGJ6AferKvZHIn", format: "reel" },
  { category: "AI films", title: "AI Necklace Reel", id: "1sbUsZLOV1s7Tx1JG8axCEHN6GILVps28", format: "reel" },
  { category: "AI films", title: "Boutique Diwali", id: "1Hnk10KfdYGvvhWpGpBBKFIka0DxtIUHd", format: "reel" },
  { category: "AI films", title: "ONS Diwali AI", id: "1J0caBiKGFJahFIxvNWkfpUIxeHy6dkot", format: "reel" },
  { category: "AI films", title: "Dairy Milk AI Concept", id: "1yaslsuUqjgqheZJLe2VuxC4Kx6Z5EPJA", format: "reel" },
  { category: "AI films", title: "AI Anime", id: "1tTS8SoCC10ZmYOCu4wg3cB7z3ocJiEBH", format: "reel" },
  { category: "Brand stories", title: "TDR Teaser", id: "1oMjmo7-BBe92tvsZyCZ5XNf_gwGnH0nZ", format: "reel" },
  { category: "Brand stories", title: "TDR Talks", id: "1H1MArgTMQUoLCSNdlV0tr6ej-WB9dUgh", format: "reel" },
  { category: "Brand stories", title: "Marketing", id: "17UvxH1BeHSbJDFL3AcvwQS4r0AtM9asf", format: "reel" },
  { category: "Creators", title: "Wine Educator 1", id: "1thPQU4FbpauSyPIWyYXltnbVu7l_0AN3", format: "reel" },
  { category: "Creators", title: "Wine Educator 2", id: "18S1kPiRQmtfLVipKFE3nMcUxUvJOjK69", format: "reel" },
  { category: "Creators", title: "Wine Educator 3", id: "1nyb3MZxK75sEI3wuO4CQy8AnmfBGp88k", format: "reel" },
  { category: "Creators", title: "Boutique", id: "1L-BOaV2sBR9Pedze1XlkFoj5YwfP2x9Z", format: "reel" },
  { category: "Creators", title: "Burger Singh", id: "1gsto7ZbS91e146s0P04hj9K4PnVdePru", format: "reel" },
  { category: "Creators", title: "Muskan Will Tell", id: "1L83bg8OTcTljP6bMv9_ju9UBqxLppGhA", format: "reel" },
  { category: "Creators", title: "MWT Bheem", id: "1pmOzko1EmKLvQIomLIUXTe2oG8CKRjH-", format: "reel" },
  { category: "Creators", title: "MWT Doraemon", id: "1AM87UFQ1m-SbEMMWAXVY2vibJyC-UB5b", format: "reel" },
  { category: "Creators", title: "Creator's Corner", id: "1FGmQ52pKxKgtjXTKHlh3r3Mdc3-fW_Bg", format: "reel" },
  { category: "UGC", title: "UGC 1", id: "1ZR2UW4n3pRvtU8cWIxWCH1vGpM5O7S5f", format: "reel" },
  { category: "UGC", title: "UGC 2", id: "17J8RapW1ouh5UF9PNwWTRXw_0D6n6bUc", format: "reel" },
  { category: "UGC", title: "UGC 3", id: "1WX8OXrD8taaiKTCC479Sul9NMB-UCNFR", format: "reel" },
  { category: "UGC", title: "UGC 4", id: "1GLDbflpg-EF3egDN-Ly9GwR6VeIB_arm", format: "reel" },
  { category: "Trading", title: "Market Insights", id: "1D4vJQhlGcol3V9BXiHscQxaqEkBvUbOe", format: "reel" },
  { category: "Trading", title: "Trading Education", id: "1fRMQWgkFqcx2NP0CGhIxrpnD_cgJE-71", format: "reel" },
  { category: "Trading", title: "End-to-end Production", id: "1hf6I_WEOdEZ4mg7lo5Sh7--O0_JJZpUm", format: "reel" },
  { category: "Long-form", title: "Jaipur Watch", id: "1FE_XmWf7Y2Qv3ZhpOwAocx8roO9gd65-", format: "wide" },
  { category: "Long-form", title: "Vlog 1", id: "1WqArsZkZxxvCjbun1-hR890vxA-AHG3O", format: "wide" },
  { category: "Long-form", title: "Vlog 2", id: "1wjsCL1MXYivtFbiwsbk5yr3hhn4MqMo8", format: "wide" },
  { category: "Long-form", title: "Visual Precision", id: "1oDWG06oMP9Z2IK_WpaJHYn5Zju7wrBZx", format: "wide" },
  { category: "Long-form", title: "Medical YouTube", id: "1qeCZn_TW6tGEwJmyRdU7PuFe0G_7K6MB", format: "wide" },
  { category: "Reels", title: "Book Marketing Bollywood", id: "1pAqefraBiVt8kZ7lZsxroYAIaLAA7PPj", format: "reel" },
  { category: "Reels", title: "Behind the Scenes", id: "1j1lSSoSljIGMVNo9_5PH3gFkdYZ9GFUS", format: "reel" },
  { category: "Reels", title: "Infotainment", id: "14gODjMzBKSFCDSEekGrTIMXGJp0x_gPp", format: "reel" },
  { category: "Reels", title: "The Amazin Cheese", id: "1gxz4Vw0I7pgM--ibvgGKnsl7BtiMElKY", format: "reel" },
  { category: "Reels", title: "Before & After", id: "1z0LdH0B1h6x1jiyG6WN_Ct_D90Ju3tDF", format: "reel" },
];

/** The curated opening set shown first under "All" (order matters for the grid rhythm). */
export const CURATED_IDS: string[] = [
  "1ScviTZzBPaIwYZnh39I_4Djq-R_8vVIb", // ONS Necklace
  "1oMjmo7-BBe92tvsZyCZ5XNf_gwGnH0nZ", // TDR Teaser
  "1FGmQ52pKxKgtjXTKHlh3r3Mdc3-fW_Bg", // Creator's Corner
  "1UZ0O8Makt-hJIUq4SomGJ6AferKvZHIn", // AI Necklace Showreel
  "1FE_XmWf7Y2Qv3ZhpOwAocx8roO9gd65-", // Jaipur Watch
  "1RKoboatyPM8KKJ-YuQv6ejRDRYVE-yoD", // Ring Story
  "1pmOzko1EmKLvQIomLIUXTe2oG8CKRjH-", // MWT Bheem
  "1WqArsZkZxxvCjbun1-hR890vxA-AHG3O", // Vlog 1
];

/** Pieces featured in the homepage hero collage. */
export const HERO_IDS = {
  tdr: "1oMjmo7-BBe92tvsZyCZ5XNf_gwGnH0nZ",
  ons: "1ScviTZzBPaIwYZnh39I_4Djq-R_8vVIb",
  jaipur: "1FE_XmWf7Y2Qv3ZhpOwAocx8roO9gd65-",
  wine: "1FGmQ52pKxKgtjXTKHlh3r3Mdc3-fW_Bg",
  ai: "1UZ0O8Makt-hJIUq4SomGJ6AferKvZHIn",
} as const;

export const DRIVE_FOLDER_URL =
  "https://drive.google.com/drive/folders/1KeLsvd51m_ka7IpIWNR5fU9U2Kar0Fyg";
