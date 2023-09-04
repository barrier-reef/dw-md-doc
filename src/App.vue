<script setup lang="ts">
import TreeRender from "./components/TreeRender.vue";
// import root from "./assets/dw-mdast.json";
// import root from "./assets/mdast.json";
import root from "./assets/demo.json";
</script>

<template>
  <div class="TreeBoard">
    <TreeRender :node="root" />
  </div>
</template>

<style scoped>
.TreeBoard {
  width: 800px;
  padding: 15px;
  border: 1px solid black;
}
</style>
