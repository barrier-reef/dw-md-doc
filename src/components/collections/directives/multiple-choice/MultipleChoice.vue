<template>
  <div class="multiple-choice">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, readonly, ref } from "vue";
import { MultipleChoiceNode, ChoiceVariable, ChoiceConstant } from "@/types";

const { node } = defineProps<{
  node: MultipleChoiceNode;
}>();

const choiceConstant: ChoiceConstant = readonly({
  correct: node.correct,
  key: node.key,
});

provide<ChoiceConstant>("choiceConstant", choiceConstant);

const choosed = ref("")
const choiceState = ref("notSelected")

const updateChoosed = (newChoosed: string) => {
  choosed.value = newChoosed
}
const updateChoiceState = (newChoiceState: string) => {
  choiceState.value = newChoiceState
}

const choiceVariable: ChoiceVariable = {
  choosed,
  updateChoosed,
  choiceState, 
  updateChoiceState
}

provide<ChoiceVariable>("choiceVariable", choiceVariable)
</script>

<style scoped>
.multiple-choice {
  border: 2px solid rgb(128, 124, 124);
  border-radius: 5px;
  background-color: rgb(225, 225, 232);
}
</style>
