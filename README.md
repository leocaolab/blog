# leocaolab.com — Lab Notes

Engineering deep dives, optimization journeys, AI, and agentic engineering.
Built with [Astro](https://astro.build) — static, fast, SEO-friendly.

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # static output to dist/
pnpm preview  # serve the build locally
```

## Write a post

Drop a file in `src/content/posts/<slug>.mdx` with frontmatter:

```yaml
---
title: "Your title"
description: "One-line summary (shows in listings, meta tags, RSS)"
date: 2026-06-12
tags: ["python", "performance"]
draft: false           # true = hidden from listings
ogImage: "/og/foo.png" # optional; defaults to /og-default.png
youtube: "VIDEO_ID"    # optional; embeds a companion video
---
```

The listing pages, tag pages, RSS feed, and sitemap update automatically.

## Guardrails (read before pushing)

- **Drafts stay private.** `drafts/` is gitignored. Promote to
  `src/content/posts/` only when finished. Git history is permanent.
- **No internal strategy in this repo.** Marketing/launch/strategy notes belong
  in private repos, never here.
- **Two licenses.** Site code is MIT (`LICENSE`); prose is CC BY-NC 4.0
  (`LICENSE-CONTENT.md`). Don't let the code license imply the writing is free
  to repackage.

## Deploy

Cloudflare Pages (or Vercel): connect the repo, build command `pnpm build`,
output dir `dist`. Point `blog.leocaolab.com` at it. Set the canonical URL in
`src/consts.ts`.

## TODO

- [ ] Add `public/og-default.png` (1200×630) — social card fallback.
- [ ] Auto-generate per-post OG images (astro-og-canvas) — Phase 3.
- [ ] Wire analytics (Plausible/Umami).

See `ROADMAP.md` for the full plan.
