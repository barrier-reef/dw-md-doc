<template>
  <p :id="props.node.html_id">
    <slot />
  </p>
</template>

<script setup lang="ts">
const props = defineProps<{
  node: any;
}>();
</script>
