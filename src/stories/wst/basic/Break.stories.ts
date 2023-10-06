import type { Meta, StoryObj } from '@storybook/vue3';

import Break from "@/components/collections/basic/Break.vue";

const meta = {
  component: Break,
  tags: ['autodocs'],
} satisfies Meta<typeof Break>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: any) => ({
    components: { Break },
    setup() {
      return { args };
    },
    template: 'you can use <break /> to break lines',
  }),
};
