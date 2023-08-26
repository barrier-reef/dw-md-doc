<script setup lang="ts">
import { onMounted, ref } from "vue";
import { python } from "@codemirror/lang-python";
import { EditorState } from '@codemirror/state';
import { lineNumbers, EditorView, keymap } from '@codemirror/view';
import { indentWithTab, defaultKeymap } from '@codemirror/commands';
import { Theme } from './codemirror.theme.js';
import { indentUnit } from '@codemirror/language';

const extensionsConfig = [
  EditorState.readOnly.of(false),
  EditorView.editable.of(true),
  Theme.getTheme('jupyter'), // 主题引入
  keymap.of([...defaultKeymap, indentWithTab]), // 缩进
  lineNumbers(),
  python(),
  indentUnit.of('    ')
];

const props = defineProps<{
  node: any;
}>();

const editorContainer = ref(null);

function createEditor(editorContainer: any, codeString: string) {
  const startState = EditorState.create({
    doc: codeString || "",
    extensions: extensionsConfig,
  });
  new EditorView({
    state: startState,
    parent: editorContainer.value,
  });
}

onMounted(() => {
  let codeString = props.node.value;
  createEditor(editorContainer, codeString);
});
</script>

<template>
  <div ref="editorContainer" class="whale-codemirror"></div>
</template>

<style scoped>
.whale-codemirror {
  margin: 20px 0;
}
</style>
