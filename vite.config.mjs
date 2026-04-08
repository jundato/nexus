import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  publicDir: false,
  server: {
    middlewareMode: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
