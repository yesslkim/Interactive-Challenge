import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteAliases } from 'vite-aliases';

export default defineConfig({
  plugins: [
    react(),
    ViteAliases({
      useConfig: true,
      useTypescript: true,
    }),
  ],
  resolve: {
    preserveSymlinks: true
  },
  server: {
    open: '/',
  },
})