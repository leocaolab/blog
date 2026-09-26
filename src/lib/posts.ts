import type { CollectionEntry } from "astro:content"

// Newest first. Posts published on the same day go by series part (the later part
// first), then by id, so a listing never depends on the order the collection
// happens to return them in.
export function newestFirst(a: CollectionEntry<"posts">, b: CollectionEntry<"posts">) {
  return (
    b.data.date.valueOf() - a.data.date.valueOf() ||
    (b.data.seriesOrder ?? 0) - (a.data.seriesOrder ?? 0) ||
    b.id.localeCompare(a.id)
  )
}
