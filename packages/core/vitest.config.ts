/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import packageJson from './package.json';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'dkfds-vue3-core',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  define: {
    VERSION: JSON.stringify(packageJson.version),
  },
});
