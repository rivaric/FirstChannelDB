// @ts-nocheck
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true
    },
    host: true,
    strictPort: true,
    port: 5173,
    https: {
      key: fs.readFileSync('certs/myPrivate.key'),
      cert: fs.readFileSync('certs/myPublic.pem')
    },
  },
  plugins: [
    react(),
  ]
})

