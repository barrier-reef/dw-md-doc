<template>
  <div :id="node.html_id || node.identifier || node.key" class="math-container">
    <div v-html="props.node.html" class="math-equation"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  node: any;
}>();
</script>

<style>
.math-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.math-equation {
  overflow-x: auto;
  overflow-y: hidden;
}
</style>
