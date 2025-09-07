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
      name: "customers",
      filename: "remoteEntry.js",
      exposes: {
        "./CustomersApp": "./src/components/customers.tsx",
      },
      shared: {
        react: "^19.1.1",
        "react-dom": "^19.1.1",
        "react-hook-form": "^7.62.0",
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
