<template>
  <pre
    :class="`${props.node.showLineNumbers ? 'line-numbers' : ''}`"
    :data-line="`${emlines}`"
  ><code :class="`language-${props.node.lang}`">{{props.node.value}}</code></pre>
</template>

<script setup lang="ts">
import "./prism.js";

const props = defineProps<{
  node: any;
}>();

let emlines = "";
if (props.node.emphasizeLines) {
  emlines = props.node.emphasizeLines.join(",");
}
</script>
