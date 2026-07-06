#!/usr/bin/env bash
# One-click publish for leocaolab.com.
#
# Build-checks the site (fail fast on broken MDX/frontmatter), then commits &
# pushes. Cloudflare Pages auto-builds on push to `main` and deploys in ~1-2 min.
# drafts/, node_modules/, dist/ are gitignored, so `git add -A` won't leak a draft.
#
# Usage:  bash scripts/publish.sh "post: why we don't support MCP"
#   (npm alias: `pnpm ship "..."` — NOT `publish`, which npm reserves for the registry)
set -euo pipefail
cd "$(dirname "$0")/.."

msg="${1:-content: publish}"

echo "▶ build check…"
pnpm build >/dev/null   # broken MDX fails here, not on the live deploy

echo "▶ commit + push…"
git add -A
git commit -m "$msg"
git push

echo "✓ pushed — Cloudflare Pages deploys in ~1-2 min → https://leocaolab.com/blog"
