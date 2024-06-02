import type { Meta, StoryObj } from "@storybook/react";
import { useState, useEffect } from "@storybook/preview-api";
import ProgressBar from ".";

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  title: "Components/ProgressBar",
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "라벨",
      controls: "string",
    },
    maxValue: {
      description: "최댓값",
      controls: "number",
    },
    value: {
      description: "값",
      controls: "number",
    },
    color: {
      description: "색상",
    },
    showValue: {
      description: "값 출력 유무",
    },
    format: {
      description: "값 포맷팅 여부",
    },
    suffix: {
      description: "값 접미사(단위)",
    },
  },
};
export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {},
  render: function Render(args) {
    const [value, setValue] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setValue((v) => (v >= 100 ? 0 : v + 1));
      }, 1);

      return () => clearInterval(interval);
    }, []);
    return <ProgressBar {...args} value={value} />;
  },
};

export const FormatValue: Story = {
  args: {
    suffix: "km",
    maxValue: 1000000,
    format: true,
  },
  render: function Render(args) {
    const [value, setValue] = useState(500000);
    return <ProgressBar {...args} value={value} />;
  },
};
