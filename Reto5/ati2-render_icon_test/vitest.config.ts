import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // ensure Vite bundles vuetify so CSS imports are handled
  ssr: {
    noExternal: ['vuetify'],
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: 'src/setupTests.ts',
    deps: {
      inline: ['vuetify'], // keep vuetify transformed by Vite
    },
  },
})