import type { Meta, StoryObj } from '@storybook/react';
import Badge from '.';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Components/Badge',
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: '뱃지에 들어갈 내용',
    },
    type: {
      control: 'radio',
      options: ['solid', 'outline'],
      description: '뱃지 모양',
    },
    color: {
      control: 'radio',
      options: ['primary', 'danger', 'success', 'warning', 'dark'],
      description: '버튼 색상',
    },
    radius: {
      control: 'radio',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: '뱃지 둥글기',
    },
    prefixIcon: {
      controls: 'string',
      description: '문자열 앞에 들어갈 아이콘',
    },
    suffixIcon: {
      controls: 'string',
      description: '문자열 뒤에 들어갈 아이콘',
    },
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Component: Story = {
  args: {
    children: 'Badge',
  },
};
