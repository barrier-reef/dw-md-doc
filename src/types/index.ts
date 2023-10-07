import { Ref } from "vue";

// TODO: Optional<T>

export interface BaseNode {
  type: string;
  key: string;
  children?: BaseNode[];
  [key: string]: any;
}

export interface ValueNode extends BaseNode {
  value: string;
}

/**
 * basic
 */
export type BreakNode = BaseNode

export type DeleteNode = BaseNode

export type EmphasisNode = BaseNode

export interface HeadingNode extends BaseNode {
  depth: number;
}

export interface LinkNode extends BaseNode {
  url: string;
}

export interface ListNode extends BaseNode {
  ordered: boolean;
  start: number;
}

export type ListItemNode = BaseNode

export type ParagraphNode = BaseNode

export type StrongNode = BaseNode

export type TextNode = ValueNode

export type UnderlineNode = BaseNode

/**
 * code
 */
export interface CodeNode extends ValueNode {
  lang?: string;
  showLineNumbers?: boolean;
  emphasizeLines?: number[];
}

export type InlineCodeNode = ValueNode

/**
 * directives
 */
export interface AdmonitionNode extends BaseNode {
  kind: string;
  class: string;
}

// multiple-choice begin
export interface ChoiceVariable {
  choosed: Ref;
  updateChoosed: Function;
  choiceState: Ref;
  updateChoiceState: Function;
}

export interface ChoiceConstant {
  correct: string;
  key: string;
}

export type MCChoicesNode = BaseNode

export type MCListNode = BaseNode

export type MCListItemNode = BaseNode

export type MCQuestionNode = BaseNode

export type MCSolutionNode = BaseNode

export interface MultipleChoiceNode extends BaseNode {
  correct: string;
}
// multiple-choice end

export type HTMLBoardNode = ValueNode

/**
 * exec
 */
export type CellNode = ValueNode

export type ExecNode = ValueNode

/**
 * Math
 */
export type InlineMathNode = ValueNode

export type MathNode = ValueNode

/**
 * picture
 */
export type HTMLImgNode = ValueNode

export interface ImageNode extends BaseNode {
  url: string;
  alt?: string;
}

export interface ImgNode extends BaseNode {
  url: string;
  caption?: string;
  frac?: string;
  width?: string;
  height?: string;
}

/**
 * wrapper
 */
export type BlockNode = BaseNode

export type ContainerNode = BaseNode

export type RootNode = BaseNode

