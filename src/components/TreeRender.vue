<template>
  <TreeRecursive :node="mdast" />
</template>

<script setup lang="ts">
import TreeRecursive from "./TreeRecursive.vue";

const mdast = { type: "root" };
</script>
