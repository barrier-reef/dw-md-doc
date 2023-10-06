import type { Meta, StoryObj } from '@storybook/vue3';

import ListItem from "@/components/collections/basic/ListItem.vue";

const meta = {
  component: ListItem,
  tags: ['autodocs'],
  argTypes: {
    node: {
      control: 'object',
      default: {
        key: "item-0",
      }
    },
    default: {
      control: 'text',
      defaultValue: 'This is an item'
    }
  }
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    node: {
      key: "item-0",
    },
    default: "This is an item"
  },
};
