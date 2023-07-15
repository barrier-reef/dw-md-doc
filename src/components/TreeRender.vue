<template>
  <div id="tree-render">
    <TreeRecursive :node="mdast" />
  </div>
</template>

<script setup lang="ts">
import TreeRecursive from "./TreeRecursive.vue";
import root from "../assets/dw-mdast.json";
// import root from "../assets/mdast.json";

const mdast = root;
</script>

<style scoped lang="scss">
#tree-render {
  color: rgb(68, 64, 60);
  font-size: 15px;
}
#tree-render {
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
}
#tree-render {
  /* 修改垂直滚动条的宽度和颜色 */
  ::-webkit-scrollbar {
    width: 5px;
    background-color: #f1f1f1;
  }
  /* 修改水平滚动条的高度和颜色 */
  ::-webkit-scrollbar {
    height: 5px;
    background-color: #f1f1f1;
  }
  /* 修改滚动条 thumb 的背景颜色 */
  ::-webkit-scrollbar-thumb {
    background-color: #cacaca;
  }
  /* 修改滚动条 thumb 的圆角 */
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
  }
  /* 修改滚动条 thumb 在 hover 状态下的样式 */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #a7a7a7;
  }
  /* 修改滚动条 track 的背景颜色 */
  ::-webkit-scrollbar-track {
    background-color: #e1e1e1;
  }
  /* 修改滚动条 track 的边框样式 */
  ::-webkit-scrollbar-track {
    border: 1px solid #ffffff;
  }
}
</style>
