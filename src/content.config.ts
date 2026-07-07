import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

// Posts live in src/content/posts/*.{md,mdx}. Frontmatter drives the
// aggregation (listing + tag pages) automatically — drop a file, it appears.
// Work-in-progress drafts live in the gitignored top-level drafts/ dir and are
// NOT part of this collection. Use draft: true only to stage a finished-ish
// post that should not yet show in listings.
const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // Series: group multi-part posts. `series` is a slug shared across all
    // parts; `seriesOrder` is the 1-based part number used to order them.
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    ogImage: z.string().optional(),
    // YouTube video id for the companion video, if any.
    youtube: z.string().optional(),
    draft: z.boolean().default(false),
  }),
})

export const collections = { posts }
