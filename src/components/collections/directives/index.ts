import { multipleChoiceMapper } from "./multiple-choice/index.js";
import { admonitionMapper } from "./admonitions/index.js";
import HTMLBoard from "./HTMLBoard.vue";

export const directiveMapper: Record<string, any> = {
  ...multipleChoiceMapper,
  ...admonitionMapper,
  "html-editable-board": HTMLBoard,
};
