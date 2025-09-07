import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    plugins: [
      react(),
      tailwindcss(),
      federation({
        name: "host",
        filename: "remoteEntry.js",
        remotes: {
          reactAppAuth: isDev
            ? "http://localhost:5001/assets/remoteEntry.js"
            : "https://teddy-open-finance-auth.vercel.app/assets/remoteEntry.js",
          reactAppCustomers: isDev
            ? "http://localhost:5002/assets/remoteEntry.js"
            : "https://teddy-open-finance-customers.vercel.app/assets/remoteEntry.js",
        },
        shared: {
          react: "^19.1.1",
          "react-dom": "^19.1.1",
          "react-router-dom": "^7.8.2",
        },
      }),
    ],
    server: {
      port: 5000,
      strictPort: true,
    },
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
  };
});
