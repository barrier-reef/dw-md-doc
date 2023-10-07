<template>
  <em><slot /></em>
</template>

<script setup lang="ts">
import { EmphasisNode } from "@/types"

defineProps<{
  node: EmphasisNode;
}>();
</script>
