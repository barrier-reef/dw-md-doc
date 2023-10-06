import type { Meta, StoryObj } from '@storybook/vue3';

import Delete from "@/components/collections/basic/Delete.vue";

const meta = {
  component: Delete,
  tags: ['autodocs'],
} satisfies Meta<typeof Delete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    default: 'you can use to delete nodes'
  }
};
