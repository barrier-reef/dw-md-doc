<template>
  <strong><slot /></strong>
</template>

<script setup lang="ts">
import { StrongNode } from '@/types';

defineProps<{ 
  node: StrongNode 
}>();
</script>

<style scoped>
strong {
  font-weight: 600;
}
</style>
