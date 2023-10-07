<template>
  <div class="mc-item">
    <label className="flex text-center justify-center">
      <input
        type="radio"
        :name="choiceConstant.key"
        :value="'ABCDEF'[index]"
        @change="choose"
        v-model="picked"
      /><span> </span>
      <slot></slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";
import { MCListItemNode, ChoiceConstant, ChoiceVariable } from "@/types";

const picked = ref("");
const { index } = defineProps<{
  node: MCListItemNode;
  index: number;
}>();

const choiceConstant = inject("choiceConstant") as ChoiceConstant;

const choiceVariable = inject("choiceVariable") as ChoiceVariable;

function choose() {
  choiceVariable.updateChoosed(picked.value);
}
</script>

<style scoped>
.mc-item {
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "Helvetica Neue", Helvetica, Arial, sans-serif, "Segoe UI";
  line-height: 1.74rem;
}
label input[type="radio"] {
  display: none;
}
label input[type="radio"] + span {
  display: inline-block;
}
label input[type="radio"] + span:before {
  content: "";
  display: block;
  background: #fff;
  margin-right: 10px;
  border: 5px solid #ccc;
  border-radius: 50%;
  transition: all 150ms ease-in-out;
}
label input[type="radio"]:checked + span:before {
  border: 5px solid rgb(78, 89, 95);
}
</style>
