<template>
  <span class="inline-code">
    <code ref="codeRef" :class="`language-${type}`">{{ props.node.value }}</code>
  </span>
</template>

<script setup lang="ts">
import Prism from 'prismjs';
import { onMounted, ref } from 'vue';

const props = defineProps<{
  node: any;
}>();

const type = props.node.lang || "test"

const codeRef = ref<Element | null>(null)
onMounted(() => {
  if (codeRef.value) {
    Prism.highlightElement(codeRef.value)
  }
})
</script>

<style scoped>
.inline-code {
  background-color: rgba(0, 0, 0, 0.06);
  padding: 0 4px;
  margin: 0 3px;
  border: 1px solid #e7e9e8;
  border-radius: 4px;
  line-height: 1.1rem;
  word-break: break-all;
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
    monospace, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "Helvetica Neue", Helvetica, Arial, sans-serif, "Segoe UI";
}
</style>
