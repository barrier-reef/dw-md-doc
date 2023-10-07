<template>
    <slot />
</template>

<script setup lang="ts">
import { BlockNode } from "@/types";

defineProps<{
  node: BlockNode;
}>();
</script>
