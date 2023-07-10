<template>
  <ol
    v-if="node.ordered"
    :key="node.key"
    :start="node.start"
    :id="node.html_id"
  >
    <slot></slot>
  </ol>
  <ul v-else :key="props.node.key" :id="node.html_id">
    <slot></slot>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  node: any;
}>();
</script>
