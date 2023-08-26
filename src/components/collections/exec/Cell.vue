<template>
  <div class="cell-container">
    <div ref="editorContainer"></div>
    <div v-if="jpStream">
      <pre>{{ jpStream }}</pre>
    </div>
    <div v-if="jpText && !jpHtml">
      <pre>{{ jpText }}</pre>
    </div>
    <div v-html="jpHtml"></div>
    <img :src="jpImage" v-if="jpImage" class="jp-img" />
    <div v-if="jpError">
      <pre class="jp-error"><Ansi>{{ensureString(jpError)}}</Ansi></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import { python } from "@codemirror/lang-python";
import { EditorState, Compartment } from "@codemirror/state";
import { lineNumbers, EditorView, keymap } from "@codemirror/view";
import { indentWithTab, defaultKeymap } from "@codemirror/commands";
import { Theme } from "./codemirror.theme.js";
import Ansi from "ansi-to-vue3";
import { indentUnit } from "@codemirror/language";

const props = defineProps<{
  node: any;
}>();
const codeString = ref<string>(props.node.value);
const jpText = ref<any>(null);
const jpHtml = ref<any>(null);
const jpImage = ref<any>(null);
const jpError = ref<any>(null);
const jpStream = ref<any>(null);

const editorView = ref<EditorView | null>(null);
const editorContainer = ref(null);
let editableCompartment = new Compartment;

async function execCode() {
  editorView.value?.contentDOM.blur();
  editorView.value?.contentDOM.classList.add("code-executing");
  editorView.value?.dispatch({
    effects: editableCompartment.reconfigure(EditorView.editable.of(false))
  });
  try {
    const url = `http://localhost:5000/execute`;
    const response = await axios.post(url, {
      code: codeString.value,
    });
    jpText.value = response.data.result.text;
    jpHtml.value = response.data.result.html;
    if (response.data.result.image) {
      jpImage.value = "data:image/png;base64," + response.data.result.image;
    } else {
      jpImage.value = null;
    }
    jpError.value = response.data.result.error;
    jpStream.value = response.data.result.stream;
  } catch (error) {
    console.error(error);
  }
  editorView.value?.dispatch({
    effects: editableCompartment.reconfigure(EditorView.editable.of(true))
  });
  editorView.value?.contentDOM.classList.remove("code-executing");
}

const whaleKeyMap = defaultKeymap.map((item) => {
  if (item.key === "Mod-Enter") {
    return {
      key: "Mod-Enter",
      run: execCode,
    };
  }
  return item;
});

let updateListenerExtension = EditorView.updateListener.of((update) => {
  if (update.docChanged) {
    codeString.value = update.view.state.doc.toString();
  }
});

const extensionsConfig = [
  updateListenerExtension,
  EditorState.readOnly.of(false),
  editableCompartment.of(EditorView.editable.of(true)),
  Theme.getTheme("jupyter"), // 主题引入
  keymap.of([...whaleKeyMap, indentWithTab]), // 缩进
  lineNumbers(),
  python(),
  indentUnit.of("    "),
];

function createEditor(editorContainer: any, codeString: string) {
  const startState = EditorState.create({
    doc: codeString || "",
    extensions: extensionsConfig,
  });
  editorView.value = new EditorView({
    state: startState,
    parent: editorContainer.value,
  });
}

onMounted(() => {
  createEditor(editorContainer, codeString.value);
});

function ensureString(
  maybeString: string[] | string | undefined,
  joinWith = "\n"
): string {
  if (!maybeString) return "";
  if (typeof maybeString === "string") return maybeString;
  if (maybeString.join) return maybeString.join(joinWith);
  return maybeString as unknown as string;
}
</script>

<style scoped>
.cell-container {
  margin: 20px 0;
}
.jp-error {
  /* margin: 0;
  padding: 0 10px; */
  line-height: 14px;
  font-size: 14px;
  overflow-x: auto;
  /* overflow-y: hidden; */
}
.jp-img {
  max-width: 50%;
  height: auto;
}
</style>
