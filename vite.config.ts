import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.MOV"],
  resolve: {
    alias: {
      "@Components": "./src/Components/index.ts",
      "@Projects": "./src/Projects/index.ts",
      "@Utils": "./src/Utils.ts",
      "@Assets": "./src/assets/index.ts",
    },
  },
});
