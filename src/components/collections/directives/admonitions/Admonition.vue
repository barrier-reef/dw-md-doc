<template>
  <div class="admonition-wrapper">
    <div class="admonition-header">
      <div style="display: flex">
        <BoltIcon class="admonition-icon" />
        <div class="admonition-title">
          {{ title }}
        </div>
      </div>
      <ChevronRightIcon
        class="dropdown-icon"
        v-if="isDropdown"
        :class="{ 'dropdown-toggle': dropdownState.open }"
        @click="dropdownSwitch"
      />
    </div>
    <div
      class="admonition-body"
      :class="{ 'body-toggle': !dropdownState.open && isDropdown }"
    >
      <TreeRecursive v-for="child in content" :node="child" :key="child.type" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TreeRecursive from "../../../TreeRecursive.vue";
import { BoltIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import { reactive } from "vue";

const props = defineProps<{
  node: any;
}>();

const dropdownState = reactive({ open: false });
const title = props.node.children[0].children[0].value;
const content = props.node.children.slice(1);
const isDropdown = props.node.class === "dropdown";

function dropdownSwitch() {
  dropdownState.open = !dropdownState.open;
}
</script>

<style scoped>
.admonition-wrapper {
  margin: 20px 0;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  background-color: rgba(249, 250, 251, 0.1);
  border-left: 4px solid rgb(59, 130, 246);
}
.admonition-header {
  display: flex;
  justify-content: space-between;
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
  height: 1.6rem;
  width: 1.6rem;
  color: rgb(37, 99, 235);
  padding-left: 8px;
  margin-right: 8px;
}
.dropdown-icon {
  height: 1.6rem;
  width: 1.6rem;
  color: rgb(37, 99, 235);
  font-weight: bolder;
  padding-left: 4px;
  margin-right: 4px;
  transition: transform 0.1s ease-out;
}
.dropdown-toggle {
  transform: rotate(90deg);
}
.admonition-title {
  height: 1.8rem;
}
.admonition-body {
  padding: 4px 16px;
}
.body-toggle {
  display: none;
}
</style>
