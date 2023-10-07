<template>
  <div class="image-container">
    <img :src="node.url" :alt="node.alt" v-if="node.url" class="image-style" />
  </div>
</template>

<script setup lang="ts">
import { ImageNode } from "@/types";

const { node } = defineProps<{
  node: ImageNode
}>();
</script>

<style scoped>
.image-style {
  display: block;
}
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}
</style>
