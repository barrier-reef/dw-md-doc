<!-- 这里<pre>和<code>标签不可以换行 -->
<template>
  <pre
    :class="`${props.node.showLineNumbers ? 'line-numbers' : ''}`"
    :data-line="`${emlines}`"
  ><code ref="codeRef" :class="`language-${type}`">{{ props.node.value }}</code></pre>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Prism from 'prismjs';
import "@/styles/prism.css";

const props = defineProps<{
  node: {
    value: any;
    lang?: string;
    showLineNumbers?: boolean;
    emphasizeLines?: number[];
  };
}>();

const type = props.node.lang || "markup"

let emlines = "";
if (props.node.emphasizeLines) {
  emlines = props.node.emphasizeLines.join(",");
}

const codeRef = ref<Element | null>(null)
onMounted(() => {
  if (codeRef.value) {
    Prism.highlightElement(codeRef.value)
  }
})
</script>
