import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
  assetsInclude: ["**/*.woff", "**/*.woff2"],
  publicDir: "public",
});
