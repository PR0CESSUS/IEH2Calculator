import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue(), visualizer()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      external: ["SaveFileDencrypt.js"],
    },
  },
});
