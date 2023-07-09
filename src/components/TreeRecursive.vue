<template>
  <component :is="componentType" v-if="mdast.children">
    <TreeRecursive
      v-for="child in mdast.children"
      :mdast="child"
      :key="child.type"
    />
  </component>
  <component :is="componentType" v-else />
</template>

<script setup lang="ts">
import { computed } from "vue";
import * as c from "./collections/index.js"

const props = defineProps<{
  mdast: any;
}>();

const componentMapper: Record<string, any> = {
  root: c.Root,
  a: c.ComponentA,
  b: c.ComponentB,
};

const componentType = computed(() => {
  const type: string = props.mdast.type;
  return componentMapper[type];
});
</script>
