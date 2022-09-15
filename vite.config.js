// eslint-disable-next-line import/no-extraneous-dependencies
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'dkfds-vue3',
      fileName: (format) => `dkfds-vue3.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],

      output: [
        {
          format: 'esm',
          esModule: true,
          exports: 'named',

          globals: {
            vue: 'Vue',
          },
        },
        {
          format: 'umd',
          inlineDynamicImports: true,

          interop: 'esModule',
          exports: 'named',
          globals: {
            vue: 'Vue',
          },
        },
      ],
    },
  },

  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});