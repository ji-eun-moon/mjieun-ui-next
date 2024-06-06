import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "@storybook/preview-api";
import Toast from "./Toast";
import readme from "./README.md";
import ToastList from "./ToastList";
import { ToastData } from "@/hooks/useToast";

const meta: Meta<typeof Toast> = {
  component: Toast,
  title: "Components/Toast",
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "Toast 타이틀",
    },
    message: {
      description: "Toast 메시지",
    },
    position: {
      description: "Toast 위치",
    },
    type: {
      description: "Toast 타입",
    },
    children: {
      description: "Toast 메시지 아래에 출력될 내용",
    },
  },
  parameters: {
    docs: {
      story: {
        height: "500px",
      },
      description: {
        component: readme.toString(),
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    title: "Title",
    message: "Toast message",
    position: "top-right",
    type: "success",
  },
  render: function Render(args) {
    const toasts: ToastData[] = [
      {
        type: "success",
        title: "Toast Title",
        message: "Success Toast Message",
      },
    ];
    return <ToastList position={args.position} toasts={toasts}></ToastList>;
  },
};
