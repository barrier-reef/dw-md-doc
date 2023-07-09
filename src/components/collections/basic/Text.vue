<template>
  {{ props.node.value }}
</template>

<script setup lang="ts">
const props = defineProps<{
  node: any;
}>();
</script>
