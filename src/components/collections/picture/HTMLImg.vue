<template>
  <Img :node="imgNode" v-if="imgNode" />
</template>

<script setup lang="ts">
import { computed, ComputedRef } from "vue";
import Img from "./Img.vue";
import { getImgDomNodeFromHTMLString } from "./utils";
import { HTMLImgNode, ImgNode } from "@/types";

const { node } = defineProps<{
  node: HTMLImgNode
}>();

const domNode: ComputedRef<HTMLImageElement | undefined> = computed(() => {
  if (!node.value) 
    return undefined

  const _domNode = getImgDomNodeFromHTMLString(node.value)
  return _domNode ? _domNode : undefined
})

const imgNode: ComputedRef<ImgNode | undefined> = computed(() => {
  if (domNode.value) {
    const _imgNode: ImgNode = {
      url: domNode.value.src,
      caption: domNode.value.alt,
      frac: undefined,
      width: String(domNode.value.width),
      height: String(domNode.value.height),
      type: "img",
      key: node.key + "-img",
      children: node.children
    }
    return _imgNode;
  } else {
    return undefined;
  }
})
</script>
