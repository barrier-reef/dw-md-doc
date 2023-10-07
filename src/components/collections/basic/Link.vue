<template>
  <a target="_blank" :href="node.url" rel="noreferrer">
    <slot />
  </a>
</template>

<script setup lang="ts">
import { LinkNode } from '@/types';

const { node } = defineProps<{
  node: LinkNode
}>();
</script>
