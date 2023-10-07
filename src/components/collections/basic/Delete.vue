<template>
  <del><slot /></del>
</template>

<script setup lang="ts">
import { DeleteNode } from "@/types"

defineProps<{
  node: DeleteNode;
}>();
</script>
