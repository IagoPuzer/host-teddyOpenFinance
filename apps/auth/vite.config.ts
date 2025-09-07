import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthPage": "./src/pages/AuthPage.tsx",
      },
      shared: {
        react: "^19.1.1",
        "react-dom": "^19.1.1",
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
