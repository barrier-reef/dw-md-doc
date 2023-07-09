<template>
  <TreeRecursive :mdast="mdast" />
</template>

<script setup lang="ts">
import TreeRecursive from "./TreeRecursive.vue";

const mdast = {
  type: "root",
  children: [{ type: "a", children: [{ type: "b" }] }, { type: "b" }],
};
</script>
