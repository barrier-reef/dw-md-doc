<template>
  <component :is="componentMapper[node.type]" :node="node" :key="node.key">
    <template v-if="node.children">
      <TreeRecursive
        v-for="child in node.children"
        :node="child"
      />
    </template>
  </component>
</template>

<script setup lang="ts">
import { componentMapper } from "./collections/index.js";
import { BaseNode } from "@/types";

const { node } = defineProps<{
  node: BaseNode;
}>();
</script>
