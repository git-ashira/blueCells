import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/bluecells/',
  plugins: [react()],
  server: {
    host: true,
  },
});