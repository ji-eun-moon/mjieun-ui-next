import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "@storybook/preview-api";
import Modal from ".";
import { DialogProvider } from "@/hooks/useDialog";
import Button from "../Button";
const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "Components/Dialog/Modal",
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "모달 제목",
      control: "text",
    },
    body: {
      description: "모달 body",
    },
    buttons: {
      description: "버튼 리스트",
    },
    buttonsPosition: {
      description: "버튼 위치",
      control: "radio",
      options: ["start", "center", "end"],
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
        height: "700px",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    title: "문의하기",
    body: (
      <div className="w-96 flex flex-col gap-4">
        <input value="" placeholder="이름을 입력해주세요" />
        <input
          value=""
          placeholder="연락처를 입력해주세요"
          onChange={() => {}}
        />
        <input value="" onChange={() => {}} placeholder="내용을 입력해주세요" />
      </div>
    ),
    buttons: [
      <Button key="1" onClick={() => {}}>
        문의 등록
      </Button>,
    ],
    buttonsPosition: "end",
  },
  render: function Render(args) {
    return <Modal {...args} />;
  },
};
