// Central site config. Live on Cloudflare Workers (static assets) at the
// account's free *.workers.dev subdomain — no custom domain (discovery is
// link-driven, not typed). Swap to a custom domain later if the brand ever
// needs one; update `url` here and it flows into canonical/OG/RSS/sitemap.
export const SITE = {
  url: "https://leocaolab-blog.hucao1.workers.dev",
  title: "Leo Cao — Lab Notes",
  description:
    "Engineering deep dives, optimization journeys, AI, and agentic engineering.",
  author: "Leo Cao",
  twitter: "@leocaolab",
  github: "https://github.com/leocaolab",
}

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Writing" },
  { href: "/tags", label: "Topics" },
]
