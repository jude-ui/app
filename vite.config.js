import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    devSourcemap: true,
  },
  plugins: [
    svelte(),
    legacy({
      target: ["defaults", "not IE 11"],
    }),
  ],
  base: "./",
  build: {
    outDir: "docs",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    host: true,
    port: 8080,
  },
  preview: {
    port: 9090,
  },
});
