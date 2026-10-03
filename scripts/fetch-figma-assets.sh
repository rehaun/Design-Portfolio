#!/usr/bin/env bash
# One-off: downloads exported Figma icons for the Resume page into src/assets/icons/.
set -euo pipefail
d=src/assets/icons
mkdir -p $d
A=https://www.figma.com/api/mcp/asset
get() { curl -fsSL -o "$d/$1" "$A/$2"; echo "$1 $(wc -c < "$d/$1")"; }
get linkedin.svg  9e757000-2914-4a41-ae16-869181a094fc.svg
get mail.svg      c14d394c-c58c-4d5c-90de-a5ee8bd7d965.svg
get portfolio.svg 3383ce9c-517b-4369-8ef7-020ec5601818.svg
