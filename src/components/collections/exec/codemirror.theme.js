// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

/**
 * 参考自：https://github.com/Z-J-wang/render-juypter-notebook-vue
 * 以下为源文件注释：
 * 
 * ================================
 * 
 * 本文件为 Jupyter lab 源码。
 * 用于设置 codemirror 相关的主题，提供了 codemirror 以及 jupyter 两种主题。其中 jupyter 为默认主题
 *
 * 源码TS版：https://github.com/jupyterlab/jupyterlab/blob/master/packages/codemirror/src/editortheme.ts
 */

import {
  defaultHighlightStyle,
  HighlightStyle,
  syntaxHighlighting,
} from "@codemirror/language";
import { EditorView } from "@codemirror/view";
import { tags as t } from "@lezer/highlight";
export const jupyterEditorTheme = EditorView.theme({
  /**
   * CodeMirror themes are handling the background/color in this way. This works
   * fine for CodeMirror editors outside the notebook, but the notebook styles
   * these things differently.
   */
  "&": {
    background: "var(--jp-layout-color0)",
    color: "var(--jp-content-font-color1)",
    border: "1px solid #dbdbdb",
  },
  /* In the notebook, we want this styling to be handled by its container */
  ".jp-CodeConsole &, .jp-Notebook &": {
    background: "transparent",
  },
  ".cm-content": {
    caretColor: "var(--jp-editor-cursor-color)",
  },
  ".cm-content &, .code-executing": {
    animationDuration: "2s",
    animationName: "executing",
    animationIterationCount: "infinite",
  },
  "@keyframes executing": {
    from: { backgroundColor: "#f5f5f5", opacity: 0.8 },
    "50%": { backgroundColor: "#eeeeee", opacity: 0.2 },
    to: { backgroundColor: "#f5f5f5", opacity: 0.8 },
  },
  "&.cm-focused": {
    outline: "none",
    border: "1px solid #b3b3b3",
  },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft:
      "var(--jp-code-cursor-width0) solid var(--jp-editor-cursor-color)",
  },
  ".cm-selectionBackground, .cm-content ::selection": {
    backgroundColor: "var(--jp-editor-selected-background)",
  },
  "&.cm-focused .cm-selectionBackground": {
    backgroundColor: "var(--jp-editor-selected-focused-background)",
  },
  ".cm-gutters": {
    borderRight: "1px solid var(--jp-border-color2)",
    backgroundColor: "var(--jp-layout-color2)",
  },
  ".cm-gutter, .cm-activeLine": {
    backgroundColor: "var(--jp-layout-color2)",
  },
  ".cm-searchMatch": {
    backgroundColor: "var(--jp-search-unselected-match-background-color)",
    color: "var(--jp-search-unselected-match-color)",
  },
  ".cm-searchMatch.cm-searchMatch-selected": {
    backgroundColor:
      "var(--jp-search-selected-match-background-color) !important",
    color: "var(--jp-search-selected-match-color) !important",
  },
});
// The list of available tags for syntax highlighting is available at
// https://lezer.codemirror.net/docs/ref/#highlight.tags
export const jupyterHighlightStyle = HighlightStyle.define([
  // Order matters - a rule will override the previous ones; important for example for in headings styles.
  { tag: t.meta, color: "var(--jp-mirror-editor-meta-color)" },
  { tag: t.heading, color: "var(--jp-mirror-editor-header-color)" },
  {
    tag: [t.heading1, t.heading2, t.heading3, t.heading4],
    color: "var(--jp-mirror-editor-header-color)",
    fontWeight: "bold",
  },
  {
    tag: t.keyword,
    color: "var(--jp-mirror-editor-keyword-color)",
    fontWeight: "bold",
  },
  { tag: t.atom, color: "var(--jp-mirror-editor-atom-color)" },
  { tag: t.number, color: "var(--jp-mirror-editor-number-color)" },
  {
    tag: [t.definition(t.name), t.function(t.definition(t.variableName))],
    color: "var(--jp-mirror-editor-def-color)",
  },
  { tag: t.variableName, color: "var(--jp-mirror-editor-variable-color)" },
  {
    tag: [t.special(t.variableName), t.self],
    color: "var(--jp-mirror-editor-variable-2-color)",
  },
  { tag: t.punctuation, color: "var(--jp-mirror-editor-punctuation-color)" },
  { tag: t.propertyName, color: "var(--jp-mirror-editor-property-color)" },
  {
    tag: t.operator,
    color: "var(--jp-mirror-editor-operator-color)",
    fontWeight: "bold",
  },
  {
    tag: t.comment,
    color: "var(--jp-mirror-editor-comment-color)",
    fontStyle: "italic",
  },
  { tag: t.string, color: "var(--jp-mirror-editor-string-color)" },
  {
    tag: [t.labelName, t.monospace, t.special(t.string)],
    color: "var(--jp-mirror-editor-string-2-color)",
  },
  { tag: t.bracket, color: "var(--jp-mirror-editor-bracket-color)" },
  { tag: t.tagName, color: "var(--jp-mirror-editor-tag-color)" },
  { tag: t.attributeName, color: "var(--jp-mirror-editor-attribute-color)" },
  { tag: t.quote, color: "var(--jp-mirror-editor-quote-color)" },
  {
    tag: t.link,
    color: "var(--jp-mirror-editor-link-color)",
    textDecoration: "underline",
  },
  { tag: [t.separator, t.derefOperator, t.paren], color: "" },
  { tag: t.strong, fontWeight: "bold" },
  { tag: t.emphasis, fontStyle: "italic" },
  { tag: t.strikethrough, textDecoration: "line-through" },
]);
/**
 * JupyterLab CodeMirror 6 theme
 */
export const jupyterTheme = [
  jupyterEditorTheme,
  syntaxHighlighting(jupyterHighlightStyle),
];
/**
 * A namespace to handle CodeMirror 6 theme
 *
 * @alpha
 */
export var Theme;
(function (Theme) {
  /**
   * CodeMirror 6 themes
   */
  const themeMap = new Map([
    [
      "codemirror",
      [EditorView.baseTheme({}), syntaxHighlighting(defaultHighlightStyle)],
    ],
    ["jupyter", jupyterTheme],
  ]);
  /**
   * Get the default CodeMirror 6 theme for JupyterLab
   *
   * @alpha
   * @returns Default theme
   */
  function defaultTheme() {
    return themeMap.get("jupyter");
  }
  Theme.defaultTheme = defaultTheme;
  /**
   * Register a new theme.
   *
   * @alpha
   * @param name Theme name
   * @param theme Codemirror 6 theme extension
   */
  function registerTheme(name, theme) {
    themeMap.set(name, theme);
  }
  Theme.registerTheme = registerTheme;
  /**
   * Get a theme.
   *
   * #### Notes
   * It falls back to the default theme
   *
   * @alpha
   * @param name Theme name
   * @returns Theme extension
   */
  function getTheme(name) {
    let ext = themeMap.get(name);
    return ext !== null && ext !== void 0 ? ext : this.defaultTheme();
  }
  Theme.getTheme = getTheme;
})(Theme || (Theme = {}));
