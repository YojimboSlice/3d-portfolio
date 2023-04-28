import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [react()],
    base: '/3d-portfolio/',
    build: {
      terserOptions: {
        compress: {
          // disable console output in production mode
          drop_console: isProduction,
        },
      },
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
      // load environment variables
      'import.meta.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify(
        process.env.VITE_EMAILJS_SERVICE_ID,
      ),
      'import.meta.env.VITE_EMAILJS_TEMPLATE_ID': JSON.stringify(
        process.env.VITE_EMAILJS_TEMPLATE_ID,
      ),
      'import.meta.env.VITE_EMAILJS_PUBLIC_KEY': JSON.stringify(
        process.env.VITE_EMAILJS_PUBLIC_KEY,
      ),
    },
  };
});
