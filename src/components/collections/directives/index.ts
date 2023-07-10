import { multipleChoiceMapper } from "./multiple-choice/index.js";
import { admonitionMapper } from "./admonitions/index.js";

export const directiveMapper: Record<string, any> = {
  ...multipleChoiceMapper,
  ...admonitionMapper,
};
