<template>
  <div class="multiple-choice">
    <MCQuestion>
      <TreeRecursive
        v-for="child in question.children"
        :node="child"
        :key="child.type"
      />
    </MCQuestion>
    <MCChoices :choiceVariables="choiceVariables">
      <MCItem
        v-for="(child, index) in choices.children"
        :node="child"
        :key="child.type"
        :index="index"
        :choiceVariables="choiceVariables" /><MCSolution
        :choiceVariables="choiceVariables"
        ><TreeRecursive
          v-for="child in solution.children"
          :node="child"
          :key="child.type" /></MCSolution
    ></MCChoices>
  </div>
</template>

<script setup lang="ts">
import TreeRecursive from "../../../TreeRecursive.vue";
import MCQuestion from "./MCQuestion.vue";
import MCChoices from "./MCChoices.vue";
import MCSolution from "./MCSolution.vue";
import MCItem from "./MCItem.vue";
import { reactive } from "vue";

const props = defineProps<{
  node: any;
}>();

const choiceVariables = reactive({
  choiceState: "notSelected",
  correct: props.node.correct,
  choosed: "",
  key: props.node.key,
});

const question = props.node.children[0];
const choices = props.node.children[1].children[0];
const solution = props.node.children[2];
</script>

<style scoped>
.multiple-choice {
  border: 2px solid rgb(128, 124, 124);
  border-radius: 5px;
  background-color: rgb(225, 225, 232);
}
</style>
