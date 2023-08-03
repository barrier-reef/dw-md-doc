<template>
  <pre
    :class="`${props.node.showLineNumbers ? 'line-numbers' : ''}`"
    :data-line="`${emlines}`"
  ><code ref="codeRef" :class="`language-${type}`">{{ props.node.value }}</code></pre>
</template>

<script setup lang="ts">
import Prism from 'prismjs';
import { onMounted, ref } from 'vue';

const props = defineProps<{
  node: any;
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
