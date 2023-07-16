<template>
  <component :is="componentMapper[props.node.type]" :node="props.node">
    <template v-if="node.children">
      <TreeRecursive
        v-for="(child, index) in node.children"
        :node="child"
        :key="child.key"
        :index="index"
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
