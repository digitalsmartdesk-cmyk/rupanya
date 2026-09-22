import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@storefront': path.resolve(__dirname, '../../packages/storefront/src'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, '../../dist/rupanya'),
    emptyOutDir: true,
  },
});
