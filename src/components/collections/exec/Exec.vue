<template>
  <textarea
    v-model="inputCode"
    class="code-textarea"
    :class="{ 'is-error': jpError }"
    id="myTextarea"
    @input="autoResize"
  ></textarea>
  <div v-if="jpError">
    <pre class="error-result"><Ansi>{{ensureString(jpError)}}</Ansi></pre>
  </div>
  <div v-if="jpStream">
    <pre>{{ jpStream }}</pre>
  </div>
  <div v-if="jpText && !jpHtml">
    <pre>{{ jpText }}</pre>
  </div>
  <div v-html="jpHtml"></div>
  <img :src="jpImage" v-if="jpImage" />
  <button @click="execCode">执行</button>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import Ansi from "ansi-to-vue3";

const props = defineProps<{
  node: any;
}>();

const inputCode = ref("");
const jpText = ref<any>(null);
const jpHtml = ref<any>(null);
const jpImage = ref<any>(null);
const jpError = ref<any>(null);
const jpStream = ref<any>(null);

function ensureString(
  maybeString: string[] | string | undefined,
  joinWith = "\n"
): string {
  if (!maybeString) return "";
  if (typeof maybeString === "string") return maybeString;
  if (maybeString.join) return maybeString.join(joinWith);
  return maybeString as unknown as string;
}

function autoResize() {
  const textarea = document.getElementById("myTextarea")!;
  textarea.style.height = "auto"; // 重置高度为自适应

  // 计算内容的滚动高度
  const scrollHeight = textarea.scrollHeight;

  // 设置textarea的高度为内容的滚动高度
  textarea.style.height = scrollHeight + "px";
}

async function execCode() {
  try {
    const url = `http://localhost:5000/execute`;
    const response = await axios.post(url, {
      code: inputCode.value,
    });
    jpText.value = response.data.result.text;
    jpHtml.value = response.data.result.html;
    console.log(jpText.value);
    if (response.data.result.image) {
      jpImage.value = "data:image/png;base64," + response.data.result.image;
    } else {
      jpImage.value = null;
    }
    console.log(jpHtml.value);
    jpError.value = response.data.result.error;
    jpStream.value = response.data.result.stream;
  } catch (error) {
    console.error(error);
  }
}
</script>

<style scoped>
.code-textarea {
  width: 100%;
  height: auto;
  resize: none;
  background-color: #f7f7fc;
  margin: 0;
  padding: 14px;
  box-sizing: border-box;
  border: 2px solid #dbdfe3;
  border-radius: 4px;
  overflow-y: hidden;
}
.code-textarea:focus {
  outline: none;
  border: 2px solid #479ce7;
  border-radius: 4px;
}
.is-error {
  border: 2px solid rgb(202, 115, 115);
}
.error-result {
  margin: 0;
  padding-left: 10px;
}
</style>
