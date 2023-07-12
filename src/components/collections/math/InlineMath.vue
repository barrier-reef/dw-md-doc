<template>
  <span v-html="content"></span>
</template>

<script setup lang="ts">
import katex from "katex";

const props = defineProps<{
  node: any;
}>();

const content = katex.renderToString(props.node.value, { displayMode: false });
</script>
