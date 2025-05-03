import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  dark:"class",
  plugins: [
    tailwindcss(),
  ],
})