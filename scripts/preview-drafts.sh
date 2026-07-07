#!/usr/bin/env bash
# Local-only preview of drafts as a rendered site (so you can click through the
# series TOC + prev/next nav). Copies drafts/pyre/*.mdx into a GITIGNORED
# src/content/posts/_preview/ with draft:true flipped to draft:false so Astro
# renders them. Nothing here is committable — `git add -A` skips _preview/.
#
#   bash scripts/preview-drafts.sh          # stage previews + print next step
#   bash scripts/preview-drafts.sh --clean  # remove the preview copies
set -euo pipefail
cd "$(dirname "$0")/.."

DEST="src/content/posts/_preview"

if [[ "${1:-}" == "--clean" ]]; then
  rm -rf "$DEST"
  echo "✓ removed $DEST — preview torn down"
  exit 0
fi

rm -rf "$DEST"
mkdir -p "$DEST"
n=0
for f in drafts/pyre/*.mdx; do
  base="$(basename "$f")"
  # flip draft flag so the post renders in dev/build
  sed 's/^draft: true$/draft: false/' "$f" > "$DEST/$base"
  n=$((n + 1))
done
echo "✓ staged $n preview posts → $DEST (gitignored)"
echo "  next:  pnpm dev   → http://localhost:4321/blog"
echo "  clean: bash scripts/preview-drafts.sh --clean"
