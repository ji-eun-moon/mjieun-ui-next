import type { Meta, StoryObj } from '@storybook/react';
import CheckBox from '.';
import { useState } from '@storybook/preview-api';

const meta: Meta<typeof CheckBox> = {
  component: CheckBox,
  title: 'Components/CheckBox',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: '체크박스 라벨',
    },
    description: {
      control: 'text',
      description: '체크박스 설명',
    },
    checked: {
      control: 'boolean',
      description: '체크 여부',
    },
    onChange: {
      description: '체크 여부 변경 시 실행할 함수',
    },
    disabled: {
      control: 'boolean',
      description: '체크박스 비활성화 여부',
    },
  },
};
export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  args: {
    label: '이용약관에 동의하시겠습니까?',
  },
  render: function Render(args) {
    const [isChecked, setIsChecked] = useState(false);
    return (
      <CheckBox
        {...args}
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
    );
  },
};

export const WithDescription: Story = {
  args: {
    label: '이용약관에 동의하시겠습니까?',
    description: '이용약관에 동의하여야만 서비스를 이용할 수 있습니다.',
  },
  render: function Render(args) {
    const [isChecked, setIsChecked] = useState(false);
    return (
      <CheckBox
        {...args}
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    label: '이용약관에 동의하시겠습니까?',
    description: '이용약관에 동의하여야만 서비스를 이용할 수 있습니다.',
    disabled: true,
  },
  render: function Render(args) {
    const [isChecked, setIsChecked] = useState(false);
    return (
      <CheckBox
        {...args}
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
    );
  },
};
