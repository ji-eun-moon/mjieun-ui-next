import type { Meta, StoryObj } from "@storybook/react";
import Accordion from ".";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: "components/Accordion",
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "아코디언 내용",
    },
    header: {
      description: "아코디언 제목",
      control: "text",
    },
    id: {
      description: "아코디언 id",
      control: "text",
    },
    subtitle: {
      description: "아코디언 부제목",
      control: "text",
    },
    icon: {
      description: "아코디언 제목 왼쪽에 들어갈 아이콘",
      control: "text",
    },
    disabled: {
      description: "비활성화 여부",
      control: "boolean",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    header: "title",
    children: <p>content</p>,
  },
};

export const DefaultOpen: Story = {
  args: {
    header: "title",
    defaultOpen: true,
    children: <p>content</p>,
  },
};

export const Disabled: Story = {
  args: {
    header: "title",
    children: <p>content</p>,
    disabled: true,
  },
};

export const WithSubTitle: Story = {
  args: {
    header: "title",
    subtitle: "subtitle",
    children: <p>content</p>,
  },
};

export const WithIcon: Story = {
  args: {
    header: "title",
    children: <p>content</p>,
    icon: "mdi:home",
  },
};
