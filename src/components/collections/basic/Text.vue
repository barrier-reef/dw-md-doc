<template>
  <span>
    {{ props.node.value }}
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  node: any;
}>();
</script>

<style scoped>
</style>
