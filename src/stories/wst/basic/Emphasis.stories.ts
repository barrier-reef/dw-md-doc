import type { Meta, StoryObj } from '@storybook/vue3';

import Emphasis from "@/components/collections/basic/Emphasis.vue";

const meta = {
  component: Emphasis,
  tags: ['autodocs'],
} satisfies Meta<typeof Emphasis>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    default: 'you can use to emphasize nodes'
  }
};
