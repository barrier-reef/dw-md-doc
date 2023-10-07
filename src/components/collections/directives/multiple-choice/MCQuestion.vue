<template>
  <div class="mc-question-header">
    <PencilSquareIcon class="header-icon" />
    <div class="header-text">问题</div>
  </div>
  <div class="mc-question-content"><slot /></div>
</template>

<script setup lang="ts">
import { PencilSquareIcon } from "@heroicons/vue/24/outline";
import { MCQuestionNode } from "@/types";

defineProps<{
  node: MCQuestionNode;
}>();
</script>

<style scoped>
.mc-question-header {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: rgb(225, 225, 232);
}
.header-icon {
  height: 1.6rem;
  width: 1.6rem;
  margin-right: 8px;
}
.mc-question-content {
  padding: 10px 15px;
  background-color: rgb(255, 255, 255);
}
</style>
