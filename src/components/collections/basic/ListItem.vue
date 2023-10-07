<template>
  <li class="list-item">
    <slot></slot>
  </li>
</template>

<script setup lang="ts">
import { ListItemNode } from "@/types";

defineProps<{
  node: ListItemNode
}>();
</script>
