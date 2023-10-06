import type { Meta, StoryObj } from "@storybook/vue3";

import Code from "@/components/collections/code/Code.vue";

const meta = {
  component: Code,
  tags: ['autodocs'],
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    node: {
      value: "console.log('Hello');\nconsole.log('World');\nconsole.log('Code');", // default value
      emphasizeLines: [1, 3],
      showLineNumbers: true,
      lang: "javascript",
    }
  },
};
