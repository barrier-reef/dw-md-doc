<template>
  <textarea v-model="inputCode" rows="20" cols="50"></textarea>
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

const props = defineProps<{
  node: any;
}>();

const inputCode = ref("");
const jpText = ref<any>(null);
const jpHtml = ref<any>(null);
const jpImage = ref<any>(null);
const jpError = ref<any>(null);
const jpStream = ref<any>(null);

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
