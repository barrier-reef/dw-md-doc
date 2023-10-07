<template>
  <slot />
</template>

<script setup lang="ts">
import { MCListNode } from "@/types";

defineProps<{
  node: MCListNode;
}>();
</script>

<style scoped>

</style>