/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: './src/test/setup.ts',
    environment: 'happy-dom',
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname
    }
  }
})
