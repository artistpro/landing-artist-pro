import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    /* proxy: {
      '/api/radio-stream': {
        target: 'http://195.26.251.31/listen/radioartistpro/radio.mp3',
        changeOrigin: true,
        rewrite: (path) => '',
        secure: false,
      }
    } */
  }
})