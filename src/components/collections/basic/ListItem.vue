<template>
  <li :key="props.node.key" class="list-item">
    <slot></slot>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  node: any;
}>();
</script>
