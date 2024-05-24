import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "@storybook/preview-api";
import SideDialog from ".";
import { DialogProvider } from "@/hooks/useDialog";

const meta: Meta<typeof SideDialog> = {
  component: SideDialog,
  title: "Components/Dialog/SideDialog",
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "다이얼로그 제목",
      control: "text",
    },
    subTitle: {
      description: "다이얼로그 부제목",
      control: "text",
    },
    body: {
      description: "다이얼로그 body",
    },
    buttonLabel: {
      description: "다이얼로그 버튼 라벨",
      control: "text",
    },
    onButton: {
      description: "다이얼로그 버튼 클릭시 실행할 함수",
    },
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 1000,
      },
    },
  },
  decorators: [
    (Story) => (
      <DialogProvider>
        <Story />
      </DialogProvider>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof SideDialog>;

export const Default: Story = {
  args: {
    title: "Title",
    subTitle: "Sub Title",
    body: <div className="w-96">Content</div>,
    buttonLabel: "Button",
  },
  render: function Render(args) {
    return <SideDialog {...args} />;
  },
};
