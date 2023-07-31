import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  // TODO: vite的build配置研究一下
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    minify: false,
    lib: {
      entry: "src/components/index.ts",
      name: "ast-to-vue",
      formats: ["es"],
      fileName: () => `[name].js`,
    },
    rollupOptions: {
      input: {
        index: "src/components/index.ts",
      },
      external: ["vue"],
      output: {
        chunkFileNames: 'chunks/[name]-[hash].js',
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
