import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.splinecode'], // Handle .splinecode files
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Separate GSAP into its own chunk
          if (id.includes('gsap')) {
            return 'gsap';
          }

          // Separate Lenis for smooth scroll into its own chunk
          if (id.includes('lenis')) {
            return 'lenis';
          }

          // Separate Spline into its own chunk
          if (id.includes('@splinetool/runtime')) {
            return 'spline';
          }

          // Separate other node_modules (vendor chunk)
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
})
