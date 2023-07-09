<template>
  {{ props.node.type }}
  <slot />
</template>

<script setup lang="ts">
const props = defineProps<{
  node: any;
}>();
</script>
