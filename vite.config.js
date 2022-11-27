import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import autoprefixer from "autoprefixer";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
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
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
