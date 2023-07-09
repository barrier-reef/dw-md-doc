<template>
  <component :is="componentType" :options="node.options" v-if="node.children">
    <TreeRecursive
      v-for="child in node.children"
      :node="child"
      :key="child.type"
    />
  </component>
  <component :is="componentType" :options="node.options" v-else />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { componentMapper } from "./collections/index.js";

const props = defineProps<{
  node: any;
}>();

const componentType = computed(() => {
  const type: string = props.node.type;
  return componentMapper[type];
});
</script>
