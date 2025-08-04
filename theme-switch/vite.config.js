import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // If you need to configure dark mode, add it to your Tailwind config instead
  darkMode: "class",
  plugins: [
    react(),
    tailwindcss()
  ],
})
