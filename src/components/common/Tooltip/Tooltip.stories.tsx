import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from ".";
import Button from "../Button";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: "components/Tooltip",
  tags: ["autodocs"],
  argTypes: {
    content: {
      description: "툴팁 내용",
      control: { type: "text" },
    },
    children: {
      description: "툴팁을 출력할 컴포넌트",
      control: "none",
    },
    position: {
      description: "툴팁 위치",
      control: { type: "radio" },
      options: [
        "top",
        "bottom",
        "right",
        "left",
        "top-start",
        "top-end",
        "bottom-start",
        "bottom-end",
        "left-start",
        "left-end",
        "right-start",
        "right-end",
      ],
    },
    color: {
      description: "툴팁 색상",
      control: { type: "radio" },
      options: ["primary", "danger", "success", "warning", "dark"],
    },
    radius: {
      description: "툴팁 둥글기",
    },
    icon: {
      description: "툴팁에 들어갈 아이콘",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    children: (
      <Button onClick={() => {}} color="dark">
        Hover Me!
      </Button>
    ),
    content: "I am a Tooltip",
    position: "top",
  },
};

export const Icon: Story = {
  args: {
    children: (
      <Button onClick={() => {}} color="dark">
        Hover Me!
      </Button>
    ),
    content: "I am a Tooltip",
    position: "top",
    icon: "mdi:information-slab-circle",
  },
};
