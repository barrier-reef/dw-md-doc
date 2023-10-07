<template>
  <component :is="`h${node.depth}`">
    <slot></slot>
    <span :id="node.key"></span>
  </component>
</template>

<script setup lang="ts">
import { HeadingNode } from "@/types";

const { node } = defineProps<{
  node: HeadingNode
}>();
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  color: rgb(38, 38, 38);
  font-weight: 700;
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "Helvetica Neue", Helvetica, Arial, sans-serif, "Segoe UI";
}
h1 {
  margin: 38px 0;
  font-size: 28px;
}
h2 {
  margin: 34px 0;
  font-size: 24px;
}
h3 {
  margin: 30px 0;
  font-size: 20px;
}
h4 {
  margin: 26px 0;
  font-size: 16px;
}
h5 {
  margin: 24px 0;
  font-size: 15px;
}
h6 {
  margin: 24px 0;
  font-size: 15px;
}
</style>