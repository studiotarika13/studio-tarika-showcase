import { CURATED_IDS, WORK, type WorkCategory, type WorkItem } from "@/data/work";

export type WorkFilter = "All" | Exclude<WorkCategory, "Reels">;

export const WORK_FILTERS: WorkFilter[] = [
  "All",
  "Jewellery",
  "Creators",
  "UGC",
  "Brand stories",
  "AI films",
  "Long-form",
  "Trading",
];

export const INITIAL_VISIBLE = 8;
export const LOAD_STEP = 8;

export const drivePreviewUrl = (id: string) => `https://drive.google.com/file/d/${id}/preview`;
export const driveViewUrl = (id: string) => `https://drive.google.com/file/d/${id}/view`;
export const driveThumbUrl = (id: string) =>
  `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;

/** AI pieces are labelled as AI creative, never as commissioned campaigns. */
export const isAiCreative = (item: WorkItem) => item.category === "AI films";

/** Curated pieces first (in curated order), then everything else in list order. */
export function orderedWork(items: WorkItem[] = WORK, curated: string[] = CURATED_IDS): WorkItem[] {
  const byId = new Map(items.map((i) => [i.id, i]));
  const head = curated.map((id) => byId.get(id)).filter((i): i is WorkItem => Boolean(i));
  const headIds = new Set(head.map((i) => i.id));
  return [...head, ...items.filter((i) => !headIds.has(i.id))];
}

export function filterWork(filter: WorkFilter, items: WorkItem[] = orderedWork()): WorkItem[] {
  if (filter === "All") return items;
  return items.filter((i) => i.category === filter);
}

export function findWork(id: string): WorkItem | undefined {
  return WORK.find((w) => w.id === id);
}
