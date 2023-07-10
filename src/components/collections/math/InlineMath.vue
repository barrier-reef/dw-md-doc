<template>
  <span v-html="props.node.html"></span>
</template>

<script setup lang="ts">
const props = defineProps<{
  node: any;
}>();
</script>
