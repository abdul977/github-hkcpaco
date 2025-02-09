import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://startling-jalebi-9a019b.netlify.app',
        changeOrigin: true,
        secure: true
      },
      '/auth/api': {
        target: 'https://startling-jalebi-9a019b.netlify.app',
        changeOrigin: true,
        secure: true
      }
    }
  }
})