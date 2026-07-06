import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Web3Forms key from the build environment. Accepts either name so it works
// whether you set WEB3FORMS_ACCESS_KEY or VITE_WEB3FORMS_KEY on the host.
const WEB3FORMS_KEY =
  process.env.VITE_WEB3FORMS_KEY || process.env.WEB3FORMS_ACCESS_KEY || '';

export default defineConfig({
  plugins: [react()],
  define: {
    __WEB3FORMS_KEY__: JSON.stringify(WEB3FORMS_KEY),
  },
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
          icons: ['react-icons/fi', 'react-icons/fa', 'react-icons/si'],
        },
      },
    },
  },
});
