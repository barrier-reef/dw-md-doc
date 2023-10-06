import type { Meta, StoryObj } from '@storybook/vue3';

import InlineCode from "@/components/collections/code/InlineCode.vue";

const meta = {
  component: InlineCode,
  tags: ['autodocs'],
} satisfies Meta<typeof InlineCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    node: {
      value: "print('hello world!')",
    },
  },
};
