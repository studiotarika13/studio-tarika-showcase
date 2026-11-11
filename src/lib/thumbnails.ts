import { driveThumbUrl } from "@/lib/portfolio";

type AssetPointer = { url: string };

// Thumbnails were captured from each Drive video and stored on the asset CDN.
const pointers = import.meta.glob<AssetPointer>("/src/assets/work/*.asset.json", {
  eager: true,
  import: "default",
});

const byId: Record<string, string> = {};
for (const [path, pointer] of Object.entries(pointers)) {
  const file = path.split("/").pop() ?? "";
  const id = file.replace(/\.webp\.asset\.json$/, "");
  byId[id] = pointer.url;
}

/** Local CDN thumbnail when available, otherwise Drive's own thumbnail. */
export const thumbFor = (id: string) => byId[id] ?? driveThumbUrl(id);
