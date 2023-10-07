<template>
  <div
    :class="className"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import { MCSolutionNode, ChoiceVariable } from "@/types";

defineProps<{
  node: MCSolutionNode;
}>();

const choiceVariable = inject("choiceVariable") as ChoiceVariable;

const className = computed(() => {
  if (choiceVariable.choiceState.value === 'correct')
    return "container-correct"
  else if (choiceVariable.choiceState.value === 'wrong')
    return "container-wrong"
  else
    return "container-none"
})
</script>

<style scoped>
.container-correct {
  border: 2px solid rgb(154, 206, 130);
  background-color: rgb(231, 243, 225);
  border-radius: 3px;
  margin: 10px;
  padding: 0 15px;
}
.container-wrong {
  border: 2px solid rgb(240, 149, 149);
  background-color: rgb(243, 225, 225);
  border-radius: 3px;
  margin: 10px;
  padding: 0 15px;
}
.container-none {
  display: none;
}
</style>
