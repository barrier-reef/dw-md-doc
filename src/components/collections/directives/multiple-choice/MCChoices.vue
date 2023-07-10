<template>
  <div class="mc-choice-header">
    <div class="header-icon">
      <font-awesome-icon icon="fa-regular fa-circle-question" />
    </div>
    <div class="header-text">Choices</div>
    <div class="submit-button">
      <button @click="chooseAnswer">submit</button>
    </div>
  </div>
  <div class="mc-choice-content"><slot /></div>
</template>

<script setup lang="ts">
const props = defineProps<{
  choiceVariables: {
    choiceState: string;
    correct: string;
  };
}>();

function chooseAnswer() {
  if (props.choiceVariables.correct === "A") {
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
  padding-right: 10px;
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
  color: #f0eaea;
  background-color: #84937d;
  border-color: #1b1f2326;
  transition-duration: 0.1s;
}
.mc-choice-content {
  padding: 10px 15px 15px 15px;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
}
</style>
