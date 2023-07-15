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

ul {
  margin: 0;
  padding: 0;
  list-style-type: disc;
  margin-left: 30px;
}
ul ul {
  list-style-type: circle;
  margin-left: 30px;
}
ul ul ul {
  list-style-type: square;
}
ul ul ul ul {
  list-style-type: disc;
}
ul ul ul ul ul {
  list-style-type: circle;
}
ol {
  margin: 0;
  padding: 0;
  list-style-type: decimal;
  margin-left: 30px;
}
ol ol {
  list-style-type: lower-alpha;
  margin-left: 30px;
}
ol ol ol {
  list-style-type: lower-roman;
}
ol ol ol ol {
  list-style-type: upper-alpha;
}
ol ol ol ol ol {
  list-style-type: upper-roman;
}
</style>
