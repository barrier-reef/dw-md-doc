<template>
  <Img :node="imgNode" v-if="imgNode" />
</template>

<script setup lang="ts">
import Img from "./Img.vue";

const props = defineProps<{
  node: any;
}>();

const domNode = getImgDomNode(props.node.value);
const imgNode = domNode
  ? {
      url: domNode.src,
      caption: domNode.alt,
      frac: undefined,
      width: domNode.width,
      height: domNode.height,
    }
  : undefined;

function getImgDomNode(htmlString: string): HTMLImageElement | undefined {
  var tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;
  var children = tempDiv.children;
  if (children.length === 1 && children[0].tagName === "IMG") {
    return children[0] as HTMLImageElement;
  }
}
</script>
