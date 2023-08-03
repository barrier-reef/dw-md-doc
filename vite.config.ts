import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import { prismjsPlugin as prismjs } from "vite-plugin-prismjs";

export default defineConfig({
  plugins: [
    vue(),
    prismjs({
      languages: [
        "markup", "css", "clike", "javascript",
        "bash", "c", "csharp", "cpp", "cmake", "csv",
        "docker", "fortran", "git", "go", 
        "gradle", "graphql", "groovy",
        "http", "java", "json", "julia", "kotlin", 
        "latex", "less", "lisp", "lua", "markdown", "matlab",
        "mermaid", "mongodb", "nginx", "nim", "objectivec",
        "perl", "php", "powershell", "python", "r",
        "jsx", "tsx", "regex", "rest", "ruby", "rust",
        "sas", "sass", "scss", "scala", "sql", "swift",
        "typescript", "tsconfig", "uri", "verilog",
        "vim", "wasm", "wolfram", "yaml",
      ], 
      // languages: "all", // 加载所有语言
      plugins: ["copy-to-clipboard", "line-highlight", "line-numbers", "toolbar"], //配置插件
      theme: "default", //主题名称
      css: true,
    }),
  ],
  build: {
    target: "esnext",
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
        chunkFileNames: "chunks/[name]-[hash].js",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
