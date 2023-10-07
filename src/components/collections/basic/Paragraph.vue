<template>
  <p class="paragraph">
    <slot />
  </p>
</template>

<script setup lang="ts">
import { ParagraphNode } from "@/types";

defineProps<{
  node: ParagraphNode
}>();
</script>

<style scoped>
.paragraph {
  margin: 10px 0;
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "Helvetica Neue", Helvetica, Arial, sans-serif, "Segoe UI";
  line-height: 1.74rem;
}
</style>
