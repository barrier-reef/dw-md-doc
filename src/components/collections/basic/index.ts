import Break from "./Break.vue";
import Delete from "./Delete.vue";
import Emphasis from "./Emphasis.vue";
import Link from "./Link.vue";
import List from "./List.vue";
import ListItem from "./ListItem.vue";
import Paragraph from "./Paragraph.vue";
import Strong from "./Strong.vue";
import Text from "./Text.vue";
import Underline from "./Underline.vue";

export const basicMapper: Record<string, any> = {
  break: Break,
  delete: Delete,
  emphasis: Emphasis,
  link: Link,
  list: List,
  listItem: ListItem,
  paragraph: Paragraph,
  strong: Strong,
  text: Text,
  underline: Underline,
};
