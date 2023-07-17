<template>
  <div
    class="admonition-wrapper"
    :style="{ borderLeftColor: getTypeColor(props.node.kind).deep }"
  >
    <div
      class="admonition-header"
      @click="dropdownSwitch"
      :class="{ 'header-toggle': isDropdown }"
      :style="{ backgroundColor: getTypeColor(props.node.kind).shallow }"
    >
      <div class="admonition-left">
        <component
          class="admonition-icon"
          :style="{ color: getTypeColor(props.node.kind).deep }"
          :is="iconsMap[props.node.kind]"
        />
        <div class="admonition-title">
          {{ title }}
        </div>
      </div>
      <ChevronRightIcon
        class="dropdown-icon"
        v-if="isDropdown"
        :class="{ 'dropdown-toggle': dropdownState.open }"
        :style="{ color: getTypeColor(props.node.kind).deep }"
      />
    </div>
    <div
      class="admonition-body"
      :class="{ 'body-toggle': !dropdownState.open && isDropdown }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { colorMap, iconsMap } from "./constants";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import { reactive } from "vue";

const props = defineProps<{
  node: any;
}>();

const dropdownState = reactive({ open: false });
const title = props.node.children[0].children[0].value;
const isDropdown = props.node.class === "dropdown";

function getTypeColor(kind: string): { deep: string; shallow: string } {
  return colorMap[kind];
}

function dropdownSwitch() {
  dropdownState.open = !dropdownState.open;
}
</script>

<style scoped>
.admonition-wrapper {
  margin: 20px 0;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  background-color: rgba(249, 250, 251, 0.1);
  border-left: 4px solid;
}
.admonition-header {
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  font-size: 1.25rem;
  line-height: 1.75rem;
  display: flex;
  align-items: center;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-weight: 500;
}
.admonition-left {
  display: flex;
  align-items: center;
}
.header-toggle {
  cursor: pointer;
}
.admonition-icon {
  height: 1.6rem;
  width: 1.6rem;
  padding-left: 8px;
  margin-right: 8px;
}
.dropdown-icon {
  height: 1.6rem;
  width: 1.6rem;
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
./constants
