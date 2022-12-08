import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import packageJson from "./package.json";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "FloatingVue",
    },
    rollupOptions: {
      external: ["vue", "@floating-ui/dom"],
      output: {
        globals: {
          vue: "Vue",
          "@floating-ui/dom": "FloatingUIDOM",
        },
      },
    },
  },
  define: {
    VERSION: JSON.stringify(packageJson.version),
  },
});
