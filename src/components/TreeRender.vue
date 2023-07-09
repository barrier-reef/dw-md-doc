<template>
  <TreeRecursive :node="mdast" />
</template>

<script setup lang="ts">
import TreeRecursive from "./TreeRecursive.vue";

const mdast = {
  type: "multiple-choice",
  correct: "B",
  children: [
    {
      type: "mc-question",
      children: [
        {
          type: "text",
          value: "qqqqq",
        },
      ],
    },
    {
      type: "mc-choices",
      children: [
        {
          type: "text",
          value: "ccccc",
        },
      ],
    },
    {
      type: "mc-solution",
      children: [
        {
          type: "text",
          value: "sssss",
        },
      ],
    },
  ],
};
</script>
