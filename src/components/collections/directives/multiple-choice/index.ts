import MultipleChoice from "./MultipleChoice.vue";
import MCChoices from "./MCChoices.vue";
import MCList from "./MCList.vue";
import MCListItem from "./MCListItem.vue";
import MCQuestion from "./MCQuestion.vue";
import MCSolution from "./MCSolution.vue";

export const multipleChoiceMapper: Record<string, any> = {
  "multiple-choice": MultipleChoice,
  "mc-choices": MCChoices,
  "mc-list": MCList,
  "mc-listItem": MCListItem,
  "mc-question": MCQuestion,
  "mc-solution": MCSolution
};
