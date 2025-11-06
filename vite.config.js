import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: [
      'lightgallery',
      'lightgallery/plugins/video',
      'lightgallery/plugins/thumbnail',
      'lightgallery/plugins/zoom'
    ]
  },
  build: {
    commonjsOptions: {
      include: [/lightgallery/, /node_modules/]
    }
  }
})
