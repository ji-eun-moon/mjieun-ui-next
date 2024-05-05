import type { Meta, StoryObj } from "@storybook/react";
import Icon from ".";

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "Components/Icon",
  tags: ["autodocs"],
  argTypes: {
    name: {
      description: "icones 이름",
    },
    size: {
      description: "아이콘 크기(px)",
    },
    color: {
      description: "아이콘 색상(tailwind)",
    },
    className: {
      description: "아이콘 컴포넌트에 추가할 클래스",
    },
  },
};
export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  render: () => <Icon size={40} name="mdi:plus-circle" color="primary" />,
};
