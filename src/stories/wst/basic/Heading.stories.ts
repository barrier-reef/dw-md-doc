import type { Meta, StoryObj } from '@storybook/vue3';

import Heading from "@/components/collections/basic/Heading.vue";

const meta = {
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    node: {
      control: 'object',
      default: {
        key: "heading-1",
        depth: 1
      }
    },
    default: {
      control: 'text',
      defaultValue: 'This is a Heading 1'
    }
  }
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    node: {
      key: "heading-1",
      depth: 1
    },
    default: "This is a Heading 1"
  },
};

export const H2: Story = {
  args: {
    node: {
      key: "heading-2",
      depth: 2
    },
    default: "This is a Heading 2"
  },
};