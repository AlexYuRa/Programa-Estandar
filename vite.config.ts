import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isVercel = process.env.VERCEL === '1';

  return {
    plugins: [react()],
    base: isVercel || command === 'serve' ? '/' : '/wp-content/themes/educacion-primaria/dist/',
    build: {
      outDir: isVercel ? 'dist' : '../wp-content/themes/educacion-primaria/dist',
      emptyOutDir: true,
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          // Agrupa las dependencias de terceros en chunks separados y cacheables,
          // así no se redescargan cuando cambia el código de la app.
          manualChunks: {
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            'vendor-motion': ['framer-motion'],
            'vendor-icons': ['lucide-react'],
          },
        },
      },
    }
  };
})