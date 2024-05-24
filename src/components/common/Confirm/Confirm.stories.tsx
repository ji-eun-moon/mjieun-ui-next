import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "@storybook/preview-api";
import Confirm from ".";
import { DialogProvider } from "@/hooks/useDialog";

const meta: Meta<typeof Confirm> = {
  component: Confirm,
  title: "Components/Dialog/Confirm",
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "Confirm 제목",
      control: "text",
    },
    message: {
      description: "Confirm 메시지",
      controls: "text",
    },
    onConfirm: {
      description: "확인 버튼 클릭시 실행할 함수",
    },
    icon: {
      description: "Title 앞에 출력될 아이콘",
      control: "text",
    },
    titleClass: {
      description: "추가할 타이틀 className",
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

type Story = StoryObj<typeof Confirm>;

export const Default: Story = {
  args: {
    title: "게시글 삭제",
    message: "정말 삭제하시겠습니까?",
    onConfirm: () => {},
  },
  render: function Render(args) {
    return <Confirm {...args} />;
  },
};
