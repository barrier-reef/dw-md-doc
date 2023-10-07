<template>
  <div class="outer-container">
    <div class="container">
      <textarea
        spellcheck="false"
        v-model="inputCode"
        class="code-textarea"
        :class="{ 'is-error': jpError }"
        id="myTextarea"
        @input="autoResize"
      ></textarea>
      <button @click="execCode" class="container-button">
        <PlayCircleIcon class="run-icon" />运行代码
      </button>
      <button @click="fixCode" class="container-button-2" v-if="jpError">
        <RocketLaunchIcon class="run-icon" />GPT修复
      </button>
    </div>
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
    <img :src="jpImage" v-if="jpImage" class="jp-img" />
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import Ansi from "ansi-to-vue3";
import { PlayCircleIcon, RocketLaunchIcon } from "@heroicons/vue/24/solid";
import { ExecNode } from "@/types";

const { node } = defineProps<{
  node: ExecNode;
}>();

const inputCode = ref(node.value);
const jpText = ref<any>(null);
const jpHtml = ref<any>(null);
const jpImage = ref<any>(null);
const jpError = ref<any>(null);
const jpStream = ref<any>(null);

function fixCode() {
  const textarea = document.getElementById("myTextarea") as HTMLTextAreaElement;
  textarea.style.opacity = "0";
  const stringList = [
    "# 这段代码的问题在于，您使用的是sort_values，而不是sort_index",
    "# sort_values是对值进行排序，sort_index是对索引进行排序",
    "# 此处应当将sort_values改为sort_index，从而保证上文中前后端点的值存在重复不会出现",
    "# 从而消除KeyError: \"Cannot get left slice bound for non-unique label: 'a'\"的错误",
    "# 请试着再次下面更新后的代码：",
    's = pd.Series([1, 2, 3, 4, 5, 6], index=list("abaaac"))',
    "s = s.sort_index()",
    's["a": "b"]',
  ];

  setTimeout(() => {
    textarea.value = "";
    fillStringList(stringList);
    textarea.style.opacity = "1";
    textarea.classList.remove("is-error")
    textarea.classList.add("is-generating");
  }, 500);

  function fillStringList(list: any) {
    const wholeString = list.join("\n");
    let index = 0;
    const timer = setInterval(() => {
      if (index >= wholeString.length) {
        inputCode.value = wholeString;
        clearInterval(timer);
        textarea.classList.remove("is-generating");
        textarea.focus();
        return;
      }
      textarea.value += wholeString[index];
      console.log(textarea.scrollHeight);
      if (textarea.scrollHeight > 64) {
        textarea.style.height = textarea.scrollHeight + "px";
      } else {
        textarea.style.height = "64px";
      }
      index++;
    }, 25);
  }
}

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
    const textarea = document.getElementById("myTextarea")!;
    textarea.classList.add("is-loading");
    const url = `http://localhost:5000/execute`;
    const response = await axios.post(url, {
      code: "import pandas as pd\n" + inputCode.value,
    });
    textarea.classList.remove("is-loading");
    textarea.focus();
    jpText.value = response.data.result.text;
    jpHtml.value = response.data.result.html;
    console.log(jpHtml.value)
    if (response.data.result.image) {
      jpImage.value = "data:image/png;base64," + response.data.result.image;
    } else {
      jpImage.value = null;
    }
    jpError.value = response.data.result.error;
    if (jpError.value) {
      textarea.blur();
    }
    jpStream.value = response.data.result.stream;
  } catch (error) {
    console.error(error);
  }
}
</script>

<style scoped>
.outer-container {
  line-height: normal;
}
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
  transition: border-color 0.5s ease, opacity 0.5s;
}
.code-textarea:focus {
  outline: none;
  border: 2px solid #479ce7;
  border-radius: 4px;
}
.is-error {
  border: 2px solid rgb(202, 115, 115);
}
.is-loading {
  animation: borderAnimationLoading 1s linear infinite;
}
@keyframes borderAnimationLoading {
  0% {
    opacity: 1;
    border-color: #479ce7;
  }
  50% {
    opacity: 0.3;
    border-color: transparent;
  }
  100% {
    opacity: 1;
    border-color: #479ce7;
  }
}
.is-generating {
  animation: borderAnimationGenerating 1s linear infinite;
}
@keyframes borderAnimationGenerating {
  0% {
    border-color: transparent;
  }
  50% {
    border-color: #1b9c51;
  }
  100% {
    border-color: transparent;
  }
}
.error-result {
  margin: 0;
  padding: 0 10px;
  line-height: 14px;
  font-size: 14px;
  overflow-x: auto;
  overflow-y: hidden;
}
.container {
  margin: 20px 0;
  position: relative;
}
.container-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 0px solid;
  color: #575252;
  background-color: #f7f7fc;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 2px;
  font-weight: 600;
}
.container-button-2 {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 0px solid;
  color: #575252;
  background-color: #f7f7fc;
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 2px;
  font-weight: 600;
}
.run-icon {
  width: 20px;
  height: 20px;
  padding-right: 5px;
}
.jp-img {
  max-width: 50%;
  height: auto;
}
</style>
