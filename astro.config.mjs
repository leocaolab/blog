// @ts-check
import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import { SITE } from "./src/consts.ts"

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  // Astro 7 defaults to 'jsx', which drops the whitespace between inline elements
  // (post dates and #tags ran together). `true` keeps the HTML-aware whitespace of v5/v6.
  compressHTML: true,
  integrations: [mdx(), sitemap()],
})
