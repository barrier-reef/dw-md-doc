<template>
  <slot />
</template>

<script setup lang="ts">
import { ContainerNode } from "@/types";

defineProps<{
  node: ContainerNode;
}>();
</script>
