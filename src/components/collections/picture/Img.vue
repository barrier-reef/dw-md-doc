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
import { ref, watchEffect } from "vue";
import { getSize } from "./utils";
import { ImgNode } from "@/types";

const { node } = defineProps<{
  node: ImgNode;
}>();

const url = ref<string>(node.url)

const frac = ref<string | undefined>()
const caption = ref<string | undefined>()
const width = ref<string | undefined>()
const height = ref<string | undefined>()

watchEffect(() => {
  if (node.frac && !node.frac.endsWith("%")) {
    const fracDigit = parseFloat(node.frac);
    if (fracDigit > 1) {
      frac.value = "100%";
    } else if (fracDigit <= 0) {
      caption.value = undefined;
    } else {
      frac.value = (fracDigit * 100) + "%";
    }
  }
  if (node.width && node.height) {
    const size = getSize(node.width, node.height);
    width.value = size.width;
    height.value = size.height;
  }
});
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
