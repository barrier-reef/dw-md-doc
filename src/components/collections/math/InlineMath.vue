<template>
  <span v-html="content"></span>
</template>

<script setup lang="ts">
import katex from "katex";
import { InlineMathNode } from "@/types";

const { node } = defineProps<{
  node: InlineMathNode;
}>();

const content = katex.renderToString(node.value, { displayMode: false });
</script>
