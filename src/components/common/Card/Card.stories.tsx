import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "@storybook/preview-api";
import Card from ".";
import Button from "../Button";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Components/Card",
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "카드 제목",
      control: "text",
    },
    subTitle: {
      description: "카드 부제목",
      control: "text",
    },
    children: {
      description: "카드 설명 아래에 들어갈 내용",
    },
    ellipsis: {
      description: "카드 설명이 길어질 경우 생략표시를 할지 여부",
      control: "boolean",
    },
    rounded: {
      description: "카드 둥글기 여부",
      control: "boolean",
    },
    img: {
      description: "카드 이미지 url",
      control: "text",
    },
    badge: {
      description: "이미지 왼쪽 상단에 출력될 뱃지 택스트",
      control: "text",
    },
    badgeColor: {
      description: "이미지 왼쪽 상단에 출력될 뱃지 색상",
      control: "radio",
      options: ["primary", "danger", "success", "warning", "dark"],
    },
    options: {
      description: "우클릭시 나타나는 옵션 배열",
      table: {
        type: {
          summary: "DropDownItem[]",
          detail:
            "name: 항목 이름\nicon?: 항목 아이콘\nhandler: 항목 클릭시 실행할 함수\ngroup?: 항목 그룹",
        },
      },
      control: "object",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    img: "https://placehold.co/600x400",
    ellipsis: true,
    title: "Title",
    subTitle: "SubTitle",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor, libero vel aliquet sollicitudin.",
    children: (
      <div className="flex gap-2 justify-end">
        <Button onClick={() => {}} variant="outlined">
          Button
        </Button>
        <Button onClick={() => {}}>Button</Button>
      </div>
    ),
    options: [
      {
        option: "Item 1",
        icon: "mdi:home",
        handler: () => console.log("Item 1 clicked"),
      },
      {
        option: "Item 2",
        icon: "mdi:home",
        handler: () => console.log("Item 2 clicked"),
      },
      {
        option: "Item 3",
        icon: "mdi:home",
        handler: () => console.log("Item 3 clicked"),
      },
    ],
  },
  render: function Render(args) {
    return <Card {...args} />;
  },
};

export const NoImage: Story = {
  args: {
    ellipsis: true,
    title: "Title",
    subTitle: "SubTitle",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor, libero vel aliquet sollicitudin.",
    children: (
      <div className="flex gap-2 justify-end">
        <Button onClick={() => {}} variant="outlined">
          Button
        </Button>
        <Button onClick={() => {}}>Button</Button>
      </div>
    ),
    options: [
      {
        option: "Item 1",
        icon: "mdi:home",
        handler: () => console.log("Item 1 clicked"),
      },
      {
        option: "Item 2",
        icon: "mdi:home",
        handler: () => console.log("Item 2 clicked"),
      },
      {
        option: "Item 3",
        icon: "mdi:home",
        handler: () => console.log("Item 3 clicked"),
      },
    ],
  },
  render: function Render(args) {
    return <Card {...args} />;
  },
};

export const WithBadge: Story = {
  args: {
    ellipsis: true,
    img: "https://placehold.co/600x400",
    badge: "Badge",
    title: "Title",
    subTitle: "SubTitle",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor, libero vel aliquet sollicitudin.",
    children: (
      <div className="flex gap-2 justify-end">
        <Button onClick={() => {}} variant="outlined">
          Button
        </Button>
        <Button onClick={() => {}}>Button</Button>
      </div>
    ),
    options: [
      {
        option: "Item 1",
        icon: "mdi:home",
        handler: () => console.log("Item 1 clicked"),
      },
      {
        option: "Item 2",
        icon: "mdi:home",
        handler: () => console.log("Item 2 clicked"),
      },
      {
        option: "Item 3",
        icon: "mdi:home",
        handler: () => console.log("Item 3 clicked"),
      },
    ],
  },
  render: function Render(args) {
    return <Card {...args} />;
  },
};
