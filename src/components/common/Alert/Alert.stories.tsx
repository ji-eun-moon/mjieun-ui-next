import type { Meta, StoryObj } from "@storybook/react";
import Alert from ".";
import { DialogProvider } from "@/hooks/useDialog";

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: "Components/Dialog/Alert",
  tags: ["autodocs"],
  argTypes: {
    type: {
      description: "알림 타입",
      control: "radio",
      options: ["success", "info", "warning", "error"],
    },
    message: {
      description: "알림 메시지",
      control: "text",
    },
  },
  decorators: [
    (Story) => (
      <DialogProvider>
        <Story />
      </DialogProvider>
    ),
  ],
  parameters: {
    docs: {
      story: {
        height: "500px",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    type: "success",
    message: "게시글이 등록되었습니다",
  },
  render: function Render(args) {
    return <Alert {...args} />;
  },
};
