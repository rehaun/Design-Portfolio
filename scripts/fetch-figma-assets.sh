#!/usr/bin/env bash
# One-off: downloads exported Figma assets for the Play page into src/assets/play/.
set -euo pipefail
d=src/assets/play
mkdir -p $d
A=https://www.figma.com/api/mcp/asset
get() { curl -fsSL -o "$d/$1" "$A/$2"; echo "$1 $(wc -c < "$d/$1")"; }
get zee-idle.png        12ffd767-f5d9-46c3-bdc7-4f85342b298f.png
get zee-talking.png     f04c3613-6c8d-401e-aadc-4a2de8604f96.png
get hammer.png          c440f0ad-9c00-419c-8435-16a31c5256cd.png
get portrait-1.png      393c2ded-7fd8-4539-8f3c-2dfd8a9a0bcb.png
get portrait-2.png      62735756-f049-4e95-8068-35f874eb4b2c.png
get portrait-3.png      ae87e052-8dd9-4204-933f-58cfa580deca.png
get frame.svg           7bf7ab25-3e50-4a00-9b03-fb792d292541.svg
get login-screen.png    e1fbd5bd-35d4-4688-b01d-bee36264e6ca.png
