import { wrapperMapper } from "./wrapper/index.js";
import { directiveMapper } from "./directives/index.js";
import { basicMapper } from "./basic/index.js";
import { mathMapper } from "./math/index.js";
import { codeMapper } from "./code/index.js";
import { pictureMapper } from "./picture/index.js";
import { execMapper } from "./exec/index.js";

export const componentMapper: Record<string, any> = {
  ...wrapperMapper,
  ...directiveMapper,
  ...basicMapper,
  ...mathMapper,
  ...codeMapper,
  ...pictureMapper,
  ...execMapper,
};

export const truncList = ["multiple-choice", "admonition"];
