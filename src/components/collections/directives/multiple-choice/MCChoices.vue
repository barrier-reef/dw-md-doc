<template>
  <div class="mc-choice-header">
    <Squares2X2Icon class="header-icon" />
    <div class="header-text">选项</div>
    <button class="submit-button" @click="chooseAnswer">submit</button>
  </div>
  <div class="mc-choice-content">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { Squares2X2Icon } from "@heroicons/vue/24/outline";

const props = defineProps<{
  choiceVariables: {
    choiceState: string;
    correct: string;
    choosed: string;
    key: string;
  };
}>();

function chooseAnswer() {
  if (props.choiceVariables.choosed === "") {
    return;
  }
  if (props.choiceVariables.correct === props.choiceVariables.choosed) {
    props.choiceVariables.choiceState = "correct";
  } else {
    props.choiceVariables.choiceState = "wrong";
  }
}
</script>

<style scoped>
button {
  padding: 0;
  background-color: transparent;
  color: inherit;
  border: none;
  outline: none;
  cursor: pointer;
}
.mc-choice-header {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: rgb(225, 225, 232);
  justify-content: space-between;
}
.header-icon {
  height: 1.6rem;
  width: 1.6rem;
  margin-right: 8px;
}
.submit-button {
  margin-left: auto;
  display: inline-block;
  outline: 0;
  cursor: pointer;
  padding: 3px 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  vertical-align: middle;
  border: 1px solid;
  border-radius: 6px;
  color: #f0f7f4;
  background-color: #758491;
  border-color: #1b1f2326;
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px,
    rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: color, background-color, border-color;
}
.submit-button:hover {
  color: #ffffff;
  background-color: #69696e;
  border-color: #1b1f2326;
  transition-duration: 0.1s;
}
.mc-choice-content {
  padding: 10px 15px 15px 15px;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
}
</style>
