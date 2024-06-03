import type { Meta, StoryObj } from "@storybook/react";
import Segment from ".";
import { useState } from "@storybook/preview-api";

const meta: Meta<typeof Segment> = {
  component: Segment,
  title: "Components/Segment",
  tags: ["autodocs"],
  argTypes: {
    items: {
      description: "세그먼트 아이템 리스트",
      control: "object",
      table: {
        type: {
          summary: "IItem[]",
          detail: `id: 아이템의 고유 식별자\nname: 아이템의 이름\ncontent: 아이템의 내용 (React.ReactNode)\nicon?:아이콘\nlength?:항목개수`,
        },
      },
    },
    onChange: {
      description: "탭 선택 시 실행할 함수",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Segment>;

export const Default: Story = {
  args: {
    items: [
      { id: "1", name: "Tab 1" },
      { id: "2", name: "Tab 2" },
      { id: "3", name: "Tab 3" },
      { id: "4", name: "Tab 4" },
    ],
  },
  render: function Render(args) {
    const [selected, setSelected] = useState<string>("");
    return <Segment {...args} onChange={setSelected} />;
  },
};

export const WithIcon: Story = {
  args: {
    items: [
      { id: "1", name: "Tab 1" },
      { id: "2", name: "Tab 2" },
      { id: "3", name: "Tab 3" },
      { id: "4", name: "Tab 4" },
    ],
  },
  render: function Render(args) {
    const [selected, setSelected] = useState<string>("");
    return <Segment {...args} onChange={setSelected} />;
  },
};

export const WithItemLength: Story = {
  args: {
    items: [
      {
        id: "1",
        name: "Tab 1",
        icon: "mdi:plus",
        length: 4,
      },
      {
        id: "2",
        name: "Tab 2",
        icon: "mdi:plus",
        length: 4,
      },
      {
        id: "3",
        name: "Tab 3",
        icon: "mdi:plus",
        length: 4,
      },
      {
        id: "4",
        name: "Tab 4",
        icon: "mdi:plus",
        length: 4,
      },
    ],
  },
  render: function Render(args) {
    const [selected, setSelected] = useState<string>("");
    return <Segment {...args} onChange={setSelected} />;
  },
};
