#!/usr/bin/env bash
# One-off: downloads exported Figma assets into src/assets/.
set -euo pipefail
mkdir -p src/assets/brand
curl -fsSL -o src/assets/brand/avatar.svg "https://www.figma.com/api/mcp/asset/c9e16a46-99f5-4b71-972d-213fae4aef2b.svg"
head -c 200 src/assets/brand/avatar.svg; echo
