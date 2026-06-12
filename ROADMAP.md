# Roadmap — leocaolab.com content site

North star: **owned content site → HN/Twitter distribution → funnel to products
(arc / Pyronova / TARS / essay).** YouTube is a side experiment, not critical path.

Locked constraints (from arc internal strategy):
- Channels: HN ≫ Twitter build-in-public ≫ Reddit. **No SEO/paid for product content.**
- Brand: `leocaolab.com` (founder brand; products live under it).
- Stack: Astro → Cloudflare Pages.
- Guardrails: code MIT / prose CC-BY-NC; `drafts/` and internal strategy never public.

## Phase 0 — Decisions & ground ✅ (this scaffold)
- [x] Astro scaffold, content collections, listing/tag pages, RSS, sitemap, SEO/OG meta
- [x] Guardrails: gitignored `drafts/`, dual license
- [x] First post seeded (Pyronova memory-leak postmortem)
- [ ] `git init` → `gh repo create leocaolab/blog --private --source=. --push`
- [ ] Cloudflare Pages project + `blog.leocaolab.com` DNS

## Phase 1 — Ship the shell
- [ ] `npm run build` green, deploy preview live
- [ ] Add `public/og-default.png`
- [ ] Wire analytics (Plausible/Umami)

## Phase 2 — First post + pipeline
- [ ] Review/polish the Pyronova postmortem, publish
- [ ] Run pipeline end-to-end: write mdx → push → auto-deploy
- [ ] Flip repo **public** once clean
- [ ] Draft post #2: the full optimization journey (69k → 429k req/s)

## Phase 3 — Distribution loop
- [ ] Show HN (Tue/Wed 8am PT), founder replies first 6h
- [ ] Twitter thread (lead with the failure, not the win)
- [ ] Per-post OG image generation
- [ ] Cadence: monthly/quarterly long-form + ongoing build-in-public

## Phase 4 — Product funnel + arc dogfood
- [ ] Per-post CTA → matching product
- [ ] Use this public repo as an arc dogfood/demo surface
- [ ] arc-specific content gated on arc dogfood rounds 1+2 + baseline numbers

## Phase 5 — YouTube experiment (after main line is steady)
- [ ] Record the postmortem as an 8–12 min walkthrough
- [ ] Video description back-links to the article; embed video in post
- [ ] Measure referral traffic only; reassess after 2–3 videos
