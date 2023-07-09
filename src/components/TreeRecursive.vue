<template>
  <component :is="componentType" :node="node" v-if="truncated" />
  <component :is="componentType" :node="node" v-else-if="node.children">
    <TreeRecursive
      v-for="child in node.children"
      :node="child"
      :key="child.type"
    />
  </component>
  <component :is="componentType" :node="node" v-else />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { componentMapper, truncList } from "./collections/index.js";

const props = defineProps<{
  node: any;
}>();

const componentType = computed(() => {
  const type: string = props.node.type;
  return componentMapper[type];
});

const truncated = computed(() => {
  const type: string = props.node.type;
  return truncList.includes(type);
});
</script>
