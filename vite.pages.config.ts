import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/** Static build for GitHub Pages at descodificado.com.br/como-vender-no-instagram/ */
export default defineConfig({
  base: "/como-vender-no-instagram/",
  build: {
    outDir: "site",
    emptyOutDir: true,
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      spa: {
        enabled: true,
      },
    }),
    viteReact(),
  ],
});
