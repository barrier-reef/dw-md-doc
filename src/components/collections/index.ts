import Root from "./Root.vue";
import Block from "./Block.vue";
import { directiveMapper } from "./directives/index.js";
import { basicMapper } from "./basic/index.js";
import { mathMapper } from "./math/index.js";
import { codeMapper } from "./code/index.js";

export const componentMapper: Record<string, any> = {
  root: Root,
  block: Block,
  ...directiveMapper,
  ...basicMapper,
  ...mathMapper,
  ...codeMapper,
};

export const truncList = ["multiple-choice", "admonition"];
