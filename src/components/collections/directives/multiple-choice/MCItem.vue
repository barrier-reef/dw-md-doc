<template>
  <div class="mc-item">
    <label className="flex text-center justify-center">
      <input
        type="radio"
        :name="props.choiceVariables.key"
        :value="'ABCDEF'[props.index]"
        @change="choose"
        v-model="picked"
      /><span> </span>
      <TreeRecursive v-for="child in props.node.children" :node="child" />
    </label>
  </div>
</template>

<script setup lang="ts">
import TreeRecursive from "../../../TreeRecursive.vue";
import { ref } from "vue";

const picked = ref("");
const props = defineProps<{
  node: any;
  choiceVariables: {
    choiceState: string;
    correct: string;
    choosed: string;
    key: string;
  };
  index: number;
}>();

function choose() {
  props.choiceVariables.choosed = picked.value;
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
label input[type="radio"] ~ span {
  display: inline-block;
}
label input[type="radio"] ~ span:before {
  content: "";
  display: block;
  background: #fff;
  margin-right: 10px;
  border: 5px solid #ccc;
  border-radius: 50%;
  transition: all 150ms ease-in-out;
}
label input[type="radio"]:checked ~ span:before {
  border: 5px solid rgb(78, 89, 95);
}
</style>
