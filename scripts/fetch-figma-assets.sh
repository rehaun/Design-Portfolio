#!/usr/bin/env bash
# One-off: downloads the avatar hover variant from Figma into src/assets/brand/.
set -euo pipefail
curl -fsSL -o src/assets/brand/avatar-hover.svg "https://www.figma.com/api/mcp/asset/ab5c74c8-38b1-4fcf-a014-4c56eded84a7.svg"
head -c 200 src/assets/brand/avatar-hover.svg; echo
