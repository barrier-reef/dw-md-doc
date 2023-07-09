import Root from "./Root.vue";
import { multipleChoiceMapper } from "./directives/multiple-choice/index.js";
import { basicMapper } from "./basic/index.js";

export const componentMapper: Record<string, any> = {
  root: Root,
  ...multipleChoiceMapper,
  ...basicMapper,
};

export const truncList = ["multiple-choice"];
