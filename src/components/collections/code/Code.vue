<!-- 这里<pre>和<code>标签不可以换行 -->
<template>
  <pre
    :class="`${showLineNumbers ? 'line-numbers' : ''}`"
    :data-line="`${emlines}`"
  ><code ref="codeRef" :class="`language-${type}`">{{ value }}</code></pre>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, toRefs } from 'vue';
import Prism from 'prismjs';
import "@/styles/prism.css";
import { CodeNode } from "@/types";

const { node } = defineProps<{
  node: CodeNode;
}>()

const {
  showLineNumbers,
  value
} = toRefs(node);

const type = ref(node.lang || "markup")

const emlines = computed(() => {
  if (!node.emphasizeLines) return "";
  return node.emphasizeLines.join(",");
})

const codeRef = ref<Element | null>(null)
onMounted(() => {
  if (codeRef.value) {
    Prism.highlightElement(codeRef.value)
  }
})
</script>
