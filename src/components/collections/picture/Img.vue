<template>
  <div class="img-container">
    <img
      :src="url"
      :alt="caption"
      :width="width"
      :height="height"
      v-if="url"
      class="img-style"
      :style="frac ? { width: frac } : {}"
    />
    <div class="img-caption" v-if="caption">
      {{ caption }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { getSize } from "./utils";

const props = defineProps<{
  node: any;
}>();

const url = props.node.url;
let caption = props.node.caption;
let frac: string = props.node.frac;
if (frac && !frac.endsWith("%")) {
  const fracDigit = parseFloat(frac);
  if (fracDigit > 1) {
    frac = "100%";
  } else if (fracDigit <= 0) {
    caption = undefined;
  } else {
    frac = fracDigit * 100 + "%";
  }
}
const { width, height } = getSize(props.node.width, props.node.height);
</script>

<style scoped>
.img-style {
  display: block;
}
.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-direction: column;
  width: 100%;
}
.img-caption {
  padding-top: 8px;
  color: rgb(138, 143, 141);
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "Helvetica Neue", Helvetica, Arial, sans-serif, "Segoe UI";
  font-size: 14px;
}
</style>
