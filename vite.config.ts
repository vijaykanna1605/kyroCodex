import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/framer-motion") || id.includes("node_modules/motion")) return "motion";
          if (id.includes("node_modules/react") || id.includes("node_modules/scheduler")) return "react";
          if (id.includes("node_modules/lucide-react")) return "icons";
          return undefined;
        },
      },
    },
  },
});
