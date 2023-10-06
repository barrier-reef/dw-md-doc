<template>
  <a target="_blank" :href="props.node.url" rel="noreferrer">
    <slot />
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  node: {
    url: string;
  }
}>();
</script>
