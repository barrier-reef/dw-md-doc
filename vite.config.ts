import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  // TODO: vite的build配置研究一下
  // build: {
  //   cssCodeSplit: true,
  //   lib: {
  //     entry: "src/components/index.ts",
  //     name: "ast-to-vue",
  //     formats: ["es"],
  //     fileName: (format) => `ast-to-vue.${format}.js`,
  //   },
  //   rollupOptions: {
  //     input: {
  //       index: "src/components/index.ts",
  //     },
  //     external: ["vue"],
  //     output: {
  //       exports: "named",
  //       globals: {
  //         vue: "Vue",
  //       },
  //     },
  //   },
  // },
});
