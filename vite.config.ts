import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";

// 项目站点 module-algorithm-interview，部署在子路径 /module-algorithm-interview/，base 必须设置
export default defineConfig({
  base: "/module-algorithm-interview/",
  plugins: [react as unknown as PluginOption],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
