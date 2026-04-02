import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
  ],
  build: {
    cssMinify: "lightningcss",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (id.includes("react-router")) return "vendor-router";
          if (id.includes("react-dom") || id.includes("react")) {
            return "vendor-react";
          }
          if (id.includes("i18next") || id.includes("react-i18next")) {
            return "vendor-i18n";
          }
          if (id.includes("react-hook-form")) return "vendor-forms";
          if (id.includes("react-hot-toast")) return "vendor-ui";
          if (id.includes("lucide-react")) return "vendor-icons";
          if (
            id.includes("react-syntax-highlighter") ||
            id.includes("react-markdown") ||
            id.includes("remark-gfm")
          ) {
            return "vendor-utils-large";
          }
        },
        // Performance budgets
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith(".css")) {
            return "assets/[name].[hash].css";
          }
          return "assets/[name].[hash][extname]";
        },
      },
    },
    // Performance budgets
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000, // Increase from default 500KB
  },
  server: {
    allowedHosts: true,
    proxy: {
      "/api/nominatim": {
        target: "https://nominatim.openstreetmap.org",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/nominatim/, ""),
        headers: {
          "User-Agent": "CoalLendingApp/1.0",
        },
      },
      "/api": {
        target: "http://localhost:5000", // Backend server URL
        changeOrigin: true,
      },
    },
  },
});
