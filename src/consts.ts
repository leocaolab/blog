// Central site config. Change url to leocaolab.com/blog if you prefer a
// subdirectory deploy over the blog.leocaolab.com subdomain.
// Free Cloudflare Pages URL — no custom domain (discovery is link-driven, not
// typed). Swap to a custom domain later if the brand ever needs one.
export const SITE = {
  url: "https://leocaolab-blog.pages.dev",
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
