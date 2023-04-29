import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default {
  plugins: [react()],
  base: '/3d-portfolio/',
  build: {
    define: {
      'import.meta.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify(
        process.env.EMAILJS_SERVICE_ID,
      ),
      'import.meta.env.VITE_EMAILJS_TEMPLATE_ID': JSON.stringify(
        process.env.EMAILJS_TEMPLATE_ID,
      ),
      'import.meta.env.VITE_EMAILJS_PUBLIC_KEY': JSON.stringify(
        process.env.EMAILJS_PUBLIC_KEY,
      ),
    },
  },
};
