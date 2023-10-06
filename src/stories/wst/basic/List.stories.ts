import type { Meta, StoryObj } from '@storybook/vue3';

import * as ListItemStories from "./ListItem.stories";

import List from "@/components/collections/basic/List.vue";
import ListItem from "@/components/collections/basic/ListItem.vue";

const meta = {
  component: List,
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { List, ListItem },
    setup() {
      return { args };
    },
    template: `
      <List :node="args.node">
        <template #default>
          <ListItem
            v-for="child in default.children"
            :node="child"
            :key="child.key"
          />
        </template>
      </List>
    `,
  }),
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ordered: Story = {
  args: {
    node: {
      ordered: true,
      key: "ordered-list",
      start: 0,
      html_id: "ordered-list"
    },
    default: {
      children: [
        {
          ...ListItemStories.Default.args, key: "item-0",
        },
        {
          ...ListItemStories.Default.args, key: "item-1",
        },
      ]
    }
  },
};
