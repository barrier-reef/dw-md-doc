<template>
  <div
    class="container-correct"
    v-if="props.choiceVariables.choiceState === 'correct'"
  >
    <slot />
  </div>
  <div
    class="container-wrong"
    v-else-if="props.choiceVariables.choiceState === 'wrong'"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  choiceVariables: {
    choiceState: string;
    correct: string;
    choosed: string;
    key: string;
  };
}>();
</script>

<style scoped>
.container-correct {
  border: 2px solid rgb(154, 206, 130);
  background-color: rgb(231, 243, 225);
  margin-top: 10px;
  border-radius: 3px;
  padding: 0 15px;
}
.container-wrong {
  border: 2px solid rgb(240, 149, 149);
  background-color: rgb(243, 225, 225);
  margin-top: 10px;
  border-radius: 3px;
  padding: 0 15px;
}
</style>
