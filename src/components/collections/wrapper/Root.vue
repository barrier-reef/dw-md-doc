<template>
  <slot />
</template>

<script setup lang="ts">
import { RootNode } from "@/types";

defineProps<{
  node: RootNode;
}>();
</script>
