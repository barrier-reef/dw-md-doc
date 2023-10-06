import type { Meta, StoryObj } from '@storybook/vue3';

import Link from "@/components/collections/basic/Link.vue";

const meta = {
  component: Link,
  tags: ['autodocs'],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    node: {
      url: "https://www.google.com",
    },
    default: "This is a link"
  },
};
