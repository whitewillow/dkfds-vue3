import { resolve } from "path";
import { defineConfig } from "vite";

import packageJson from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "dkfds-vue3-utils",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  define: {
    VERSION: JSON.stringify(packageJson.version),
  },
});
