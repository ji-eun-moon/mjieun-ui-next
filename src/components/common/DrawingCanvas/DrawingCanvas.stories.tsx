import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "@storybook/preview-api";
import readme from "./README.md";
import DrawingCanvas from ".";

const meta: Meta<typeof DrawingCanvas> = {
  component: DrawingCanvas,
  title: "components/DrawingCanvas",
  tags: ["autodocs"],
  argTypes: {
    width: {
      description: "캔버스 너비",
      control: "number",
    },
    height: {
      description: "캔버스 높이",
      control: "number",
    },
    lineColor: {
      description: "드로잉 선 색상",
      control: "color",
    },
    clearButton: {
      description: "초기화 버튼 유무",
      control: "boolean",
    },
    onSave: {
      description: "이미지 저장 시 실행할 함수",
    },
  },
  parameters: {
    docs: {
      description: {
        component: readme.toString(),
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof DrawingCanvas>;

export const Default: Story = {
  args: {},
  render: function Render(args) {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const handleSave = (url: string) => {
      setImageUrl(url);
      const link = document.createElement("a");
      link.href = url;
      link.download = "canvas-image.png";
      link.click();
    };
    return <DrawingCanvas {...args} onSave={handleSave} />;
  },
};
