<template>
  <span class="underline">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { UnderlineNode } from '@/types';

defineProps<{ 
  node: UnderlineNode
}>();
</script>

<style scoped>
.underline {
  text-decoration: underline;
}
</style>
