<template>
  <div class="admonition-wrapper">
    <div class="admonition-header">
      <font-awesome-icon icon="fa-regular fa-gem" class="admonition-icon" />
      {{ title }}
    </div>
    <div class="admonition-body">
      <TreeRecursive v-for="child in content" :node="child" :key="child.type" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TreeRecursive from "../../../TreeRecursive.vue";

const props = defineProps<{
  node: any;
}>();

const title = props.node.children[0].children[0].value;
const content = props.node.children.slice(1);
</script>

<style scoped>
.admonition-wrapper {
  margin: 20px 0;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  background-color: rgba(249, 250, 251, 0.1);
  border-left: 4px solid rgb(59, 130, 246);
}
.admonition-header {
  padding: 4px 0;
  font-size: 1.25rem;
  line-height: 1.75rem;
  display: flex;
  align-items: center;
  background-color: rgb(239, 246, 255);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-weight: 500;
}
.admonition-icon {
  color: rgb(59, 130, 246);
  padding-left: 8px;
  margin-right: 8px;
}
.admonition-body {
  padding: 4px 16px;
}
</style>
