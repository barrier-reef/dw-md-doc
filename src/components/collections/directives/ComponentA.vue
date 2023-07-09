<template>
  a
  {{ props.options }}
  <slot />
</template>

<script setup lang="ts">
const props = defineProps<{
  options: any;
}>();
</script>
