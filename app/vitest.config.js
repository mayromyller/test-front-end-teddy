/// <reference types="vitest" />
import { defineConfig, configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: './src/test/setup.ts',
    environment: 'happy-dom',
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname
    },
    exclude: [
      // exclude .spec.ts files
      ...configDefaults.exclude,
      '**/*.spec.ts'
    ],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,ts,tsx}'],
      exclude: [
        ...configDefaults.exclude,
        'src/test/**/*.{js,ts,tsx}',
        'src/api/**/*.{js,ts,tsx}',
        'src/**/__test__/**/*.{js,ts,tsx}'
      ]
    }
  }
})
