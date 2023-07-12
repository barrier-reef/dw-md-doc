<template>
  <div v-html="info.content" class="revert-style"></div>
  <v-ace-editor
    v-model:value="info.content"
    lang="html"
    theme="chrome"
    :minLines="minLines"
    :maxLines="maxLines"
  />
</template>

<script setup lang="ts">
import { VAceEditor } from "vue3-ace-editor";
import ace from "ace-builds";
import { reactive } from "vue";

ace.config.set("basePath", "/node_modules/ace-builds/src-min-noconflict");

const props = defineProps<{
  node: any;
}>();

const info = reactive({ content: props.node.value });
const minLines = 1;
const maxLines = 1000;
</script>

<style lang="scss">
.revert-style {
  html,
  address,
  blockquote,
  body,
  dd,
  div,
  dl,
  dt,
  fieldset,
  form,
  frame,
  frameset,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  noframes,
  ol,
  p,
  ul,
  center,
  dir,
  hr,
  menu,
  pre {
    display: block;
    unicode-bidi: embed;
  }
  li {
    display: list-item;
  }
  head {
    display: none;
  }
  table {
    display: table;
  }
  tr {
    display: table-row;
  }
  thead {
    display: table-header-group;
  }
  tbody {
    display: table-row-group;
  }
  tfoot {
    display: table-footer-group;
  }
  col {
    display: table-column;
  }
  colgroup {
    display: table-column-group;
  }
  td,
  th {
    display: table-cell;
  }
  caption {
    display: table-caption;
  }
  th {
    font-weight: bolder;
    text-align: center;
  }
  caption {
    text-align: center;
  }
  body {
    margin: 8px;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  h2 {
    font-size: 1.5em;
    margin: 0.75em 0;
  }
  h3 {
    font-size: 1.17em;
    margin: 0.83em 0;
  }
  h4,
  p,
  blockquote,
  ul,
  fieldset,
  form,
  ol,
  dl,
  dir,
  menu {
    margin: 1.12em 0;
  }
  h5 {
    font-size: 0.83em;
    margin: 1.5em 0;
  }
  h6 {
    font-size: 0.75em;
    margin: 1.67em 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  b,
  strong {
    font-weight: bolder;
  }
  blockquote {
    margin-left: 40px;
    margin-right: 40px;
  }
  i,
  cite,
  em,
  var,
  address {
    font-style: italic;
  }
  pre,
  tt,
  code,
  kbd,
  samp {
    font-family: monospace;
  }
  pre {
    white-space: pre;
  }
  button,
  textarea,
  input,
  select {
    display: inline-block;
  }
  big {
    font-size: 1.17em;
  }
  small,
  sub,
  sup {
    font-size: 0.83em;
  }
  sub {
    vertical-align: sub;
  }
  sup {
    vertical-align: super;
  }
  table {
    border-spacing: 2px;
  }
  thead,
  tbody,
  tfoot {
    vertical-align: middle;
  }
  td,
  th,
  tr {
    vertical-align: inherit;
  }
  s,
  strike,
  del {
    text-decoration: line-through;
  }
  hr {
    border: 1px inset;
  }
  ol,
  ul,
  dir,
  menu,
  dd {
    margin-left: 40px;
  }
  ol {
    list-style-type: decimal;
  }
  ol ul,
  ul ol,
  ul ul,
  ol ol {
    margin-top: 0;
    margin-bottom: 0;
  }
  u,
  ins {
    text-decoration: underline;
  }
  br:before {
    content: "\A";
    white-space: pre-line;
  }
  center {
    text-align: center;
  }
  :link,
  :visited {
    text-decoration: underline;
  }
  :focus {
    outline: thin dotted invert;
  } /* Begin bidirectionality settings (do not change) */
  BDO[DIR="ltr"] {
    direction: ltr;
    unicode-bidi: bidi-override;
  }
  BDO[DIR="rtl"] {
    direction: rtl;
    unicode-bidi: bidi-override;
  }
  *[DIR="ltr"] {
    direction: ltr;
    unicode-bidi: embed;
  }
  *[DIR="rtl"] {
    direction: rtl;
    unicode-bidi: embed;
  }
  @media print {
    h1 {
      page-break-before: always;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      page-break-after: avoid;
    }
    ul,
    ol,
    dl {
      page-break-before: avoid;
    }
  }
}
</style>
