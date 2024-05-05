import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";
import React from "react";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "버튼에 들어갈 내용",
    },
    variant: {
      control: "radio",
      options: ["solid", "text", "outlined"],
      description: "버튼 모양",
    },
    color: {
      control: "radio",
      options: ["primary", "danger", "success", "warning", "dark"],
      description: "버튼 색상",
    },
    radius: {
      control: "radio",
      options: ["sm", "md", "lg", "xl", "full"],
      description: "버튼 둥글기",
    },
    disabled: {
      controls: "boolean",
      description: "버튼 비활성화 여부",
    },
    type: {
      controls: "radio",
      options: ["button", "submit", "reset"],
      description: "버튼 타입",
    },
    expand: {
      controls: "boolean",
      description: "버튼 확장 여부",
    },
    icon: {
      controls: "string",
      description: "버튼에 들어갈 아이콘",
    },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "solid",
    color: "primary",
    radius: "md",
    disabled: false,
    type: "button",
    expand: false,
    icon: "",
    children: "Button",
  },
};

export const Solid: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button>Priamry</Button>
      <Button color="danger">Danger</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="dark">Dark</Button>
    </div>
  ),
};

export const Text: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button variant="text">Priamry</Button>
      <Button variant="text" color="danger">
        Danger
      </Button>
      <Button variant="text" color="success">
        Success
      </Button>
      <Button variant="text" color="warning">
        Warning
      </Button>
      <Button variant="text" color="dark">
        Dark
      </Button>
    </div>
  ),
};

export const Outlined: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button variant="outlined">Priamry</Button>
      <Button variant="outlined" color="danger">
        Danger
      </Button>
      <Button variant="outlined" color="success">
        Success
      </Button>
      <Button variant="outlined" color="warning">
        Warning
      </Button>
      <Button variant="outlined" color="dark">
        Dark
      </Button>
    </div>
  ),
};

export const Rounded: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button radius="sm">small</Button>
      <Button radius="md">medium</Button>
      <Button radius="lg">large</Button>
      <Button radius="xl">x-large</Button>
      <Button radius="full">full</Button>
    </div>
  ),
};
