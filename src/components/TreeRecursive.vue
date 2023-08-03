<template>
  <component :is="componentMapper[props.node.type]" :node="props.node">
    <template v-if="node.children">
      <TreeRecursive
        v-for="child in node.children"
        :node="child"
        :key="child.key"
      />
    </template>
  </component>
</template>

<script setup lang="ts">
import { componentMapper } from "./collections/index.js";

const props = defineProps<{
  node: any;
}>();
</script>
