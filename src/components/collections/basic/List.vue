<template>
  <ol
    v-if="node.ordered"
    :key="node.key"
    :start="node.start"
    :id="node.html_id"
    class="list-block"
  >
    <slot></slot>
  </ol>
  <ul v-else :key="props.node.key" :id="node.html_id" class="list-block">
    <slot></slot>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  node: any;
}>();
</script>

<style scoped>
.list-block {
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "Helvetica Neue", Helvetica, Arial, sans-serif, "Segoe UI";
  line-height: 1.74rem;
}
</style>
