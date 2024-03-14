import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import { visualizer } from "rollup-plugin-visualizer";
import VueRouter from "unplugin-vue-router/vite";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [VueRouter(), Vue(), visualizer()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      external: ["SaveFileDencrypt.js"],
    },
  },
  resolve: {
    alias: [
      { find: "@use", replacement: fileURLToPath(new URL("./src/composable", import.meta.url)) },
      { find: "@assets", replacement: fileURLToPath(new URL("./src/shared/assets", import.meta.url)) },
      { find: "@util", replacement: fileURLToPath(new URL("./src/Util/index.ts", import.meta.url)) },
      { find: "@components", replacement: fileURLToPath(new URL("./src/components", import.meta.url)) },
      { find: "@localization", replacement: fileURLToPath(new URL("./src/localization", import.meta.url)) },
      { find: "@stores", replacement: fileURLToPath(new URL("./src/stores", import.meta.url)) },
      { find: "@type", replacement: fileURLToPath(new URL("./src/type", import.meta.url)) },
      { find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
    ],
  },
});
