<template>
  <TreeRecursive :node="mdast" />
</template>

<script setup lang="ts">
import TreeRecursive from "./TreeRecursive.vue";
// import root from "../assets/dw-mdast.json";
import root from "../assets/mdast.json";

const mdast = root;
</script>
