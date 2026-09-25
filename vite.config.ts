import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Bundled deps ship "use client"; harmless for a SPA build.
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") return;
        warn(warning);
      },
    },
  },
});
