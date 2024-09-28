import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        remote: "http://localhost:3001/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"]
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },

  server: {
    port: 3000,
    strictPort: true,
    host: true,
    cors: true
  },
  preview: {
    port: 3000,
  }
})