<template>
  <div style="background-color: red; display: inline">
    {{ props.node.type }}
    <ComponentB :node="node.children[0]">
      <TreeRecursive :node="node.children[0].children[0]" />
    </ComponentB>
  </div>
</template>

<script setup lang="ts">
import TreeRecursive from "../../TreeRecursive.vue";
import ComponentB from "./ComponentB.vue";

const props = defineProps<{
  node: any;
}>();
</script>
