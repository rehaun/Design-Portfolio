import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the built site works from any subpath
  // (username.github.io, a project repo, etc.) with no extra config.
  base: './',
  plugins: [react()],
})
