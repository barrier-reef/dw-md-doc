<template>
  <p :id="props.node.html_id" class="paragraph">
    <slot />
  </p>
</template>

<script setup lang="ts">
const props = defineProps<{
  node: any;
}>();
</script>

<style scoped>
.paragraph {
  margin: 10px 0;
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "Helvetica Neue", Helvetica, Arial, sans-serif, "Segoe UI";
  line-height: 1.74rem;
}
</style>
