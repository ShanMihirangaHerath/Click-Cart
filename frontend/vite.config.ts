import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

export default defineConfig({
  plugins: [react(),TanStackRouterVite({routeFileIgnorePrefix:'-',routesDirectory:'./src/routes',generatedRouteTree:'./src/routeTree.gen.ts'})],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
