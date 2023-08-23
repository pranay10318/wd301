import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default ({ mode }) => {
  return defineConfig({
    build: {
      outDir: "build",
    },
    plugins: [
      react(),
      VitePWA({
        devOptions: {
          enabled: true,
        },
        manifest: {
          name: "Smarter Tasks application",
          short_name: "Smarter Tasks",
          icons: [
            {
              src: "/favicon.ico",
              sizes: "64x64 32x32 24x24 16x16",
              type: "image/x-icon",
            },
            {
              src: "/favicon-16x16.png",
              type: "image/png",
              sizes: "16x16",
            },
            {
              src: "/favicon-32x32.png",
              type: "image/png",
              sizes: "32x32",
            },
            {
              src: "/pwa-192x192.png",
              type: "image/png",
              sizes: "192x192",
            },
            {
              src: "/pwa-512x512.png",
              type: "image/png",
              sizes: "512x512",
              purpose: "any maskable",
            },
          ],
          theme_color: "#AAF",
        },
      }),
    ],
    define: {
      "process.env.NODE_ENV": `"${mode}"`,
    },
  });
};
