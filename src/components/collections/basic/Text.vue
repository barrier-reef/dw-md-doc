<template>
  <span>
    {{ node.value }}
  </span>
</template>

<script setup lang="ts">
import { TextNode } from '@/types';

const { node } = defineProps<{
  node: TextNode
}>();
</script>

<style scoped>
</style>
