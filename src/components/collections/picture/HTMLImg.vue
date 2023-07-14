<template>
  <Img :node="imgNode" v-if="imgNode" />
</template>

<script setup lang="ts">
import Img from "./Img.vue";
import { getImgDomNodeFromHTMLString } from "./utils";

const props = defineProps<{
  node: any;
}>();

const domNode = getImgDomNodeFromHTMLString(props.node.value);
const imgNode = domNode
  ? {
      url: domNode.src,
      caption: domNode.alt,
      frac: undefined,
      width: domNode.width,
      height: domNode.height,
    }
  : undefined;
</script>
