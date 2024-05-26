import type { Meta, StoryObj } from '@storybook/react';
import Label from '.';
import React, { useState } from 'react';

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'Components/Label',
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: '라벨에 들어갈 텍스트',
      control: 'text',
    },
    required: {
      description: '필수 여부',
      control: 'boolean',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    label: '라벨',
    required: true,
  },
};
