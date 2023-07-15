<template>
  <div :id="node.html_id || node.identifier || node.key" class="math-container">
    <div v-html="content" class="math-equation"></div>
  </div>
</template>

<script setup lang="ts">
import katex from "katex";

const props = defineProps<{
  node: any;
}>();

const content = katex.renderToString(props.node.value, { displayMode: true });
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
