import type { Meta, StoryObj } from '@storybook/react';
import { useState } from '@storybook/preview-api';
import Toggle from '.';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: 'Components/Toggle',
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: '토글 라벨',
      control: 'text',
    },
    icon: {
      description: '아이콘 이름 ',
    },
    disabled: {
      description: '비활성화 여부',
      control: 'boolean',
    },
    checked: {
      description: '체크 여부',
      control: 'boolean',
    },
    onChange: {
      description: '값 변경시 실행할 함수',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {},
  render: function Render(args) {
    const [isChecked, setIsChecked] = useState(false);
    return <Toggle {...args} checked={isChecked} onChange={setIsChecked} />;
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: function Render(args) {
    const [isChecked, setIsChecked] = useState(false);
    return <Toggle {...args} checked={isChecked} onChange={setIsChecked} />;
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Toggle Label',
  },
  render: function Render(args) {
    const [isChecked, setIsChecked] = useState(false);
    return <Toggle {...args} checked={isChecked} onChange={setIsChecked} />;
  },
};
