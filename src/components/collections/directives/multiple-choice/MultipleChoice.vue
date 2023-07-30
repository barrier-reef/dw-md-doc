<template>
  <div class="multiple-choice">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, readonly, ref } from "vue";

const props = defineProps<{
  node: any;
}>();

const choiceConstant = readonly({
  correct: props.node.correct as string,
  key: props.node.key as string,
});

provide("choiceConstant", choiceConstant);

const choosed = ref("")
const choiceState = ref("notSelected")

const updateChoosed = (newChoosed: string) => {
  choosed.value = newChoosed
}
const updateChoiceState = (newChoiceState: string) => {
  choiceState.value = newChoiceState
}

provide("choiceVariable", {
  choosed,
  updateChoosed,
  choiceState, 
  updateChoiceState
})

</script>

<style scoped>
.multiple-choice {
  border: 2px solid rgb(128, 124, 124);
  border-radius: 5px;
  background-color: rgb(225, 225, 232);
}
</style>
