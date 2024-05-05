import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    sourcemap: true,
    minify: "esbuild",
  },
  css: {
    modules: {
      generateScopedName: "[name]__[local]", // This configuration disables obfuscation
    },
  },
});
