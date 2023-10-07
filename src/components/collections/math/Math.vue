<template>
  <div class="math-container">
    <div v-html="content" class="math-equation"></div>
  </div>
</template>

<script setup lang="ts">
import katex from "katex";
import { MathNode } from "@/types";

const { node } = defineProps<{
  node: MathNode;
}>();

const content = katex.renderToString(node.value, { displayMode: true });
</script>

<style>
.math-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
}
.math-equation {
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
}
.katex-display {
  margin: 0;
}
</style>
