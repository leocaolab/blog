import { getCollection } from "astro:content"
import { SERIES } from "../consts.ts"

// Group published posts by their `series` slug, ordered by seriesOrder, and join
// each group with its display metadata from the SERIES registry. Series are
// returned newest-first (by their most recent part). Used by the /series index,
// the /series/[slug] detail pages, and the home page.
export async function getSeriesList() {
  const posts = await getCollection("posts", ({ data }) => !data.draft)

  const bySlug = new Map<string, typeof posts>()
  for (const post of posts) {
    const slug = post.data.series
    if (!slug) continue
    if (!bySlug.has(slug)) bySlug.set(slug, [])
    bySlug.get(slug)!.push(post)
  }

  const list = [...bySlug.entries()].map(([slug, parts]) => {
    parts.sort((a, b) => (a.data.seriesOrder ?? 0) - (b.data.seriesOrder ?? 0))
    const meta = (SERIES as Record<string, { title: string; description: string }>)[
      slug
    ] ?? { title: slug, description: "" }
    const latest = Math.max(...parts.map((p) => p.data.date.valueOf()))
    return { slug, title: meta.title, description: meta.description, parts, count: parts.length, latest }
  })

  list.sort((a, b) => b.latest - a.latest)
  return list
}
