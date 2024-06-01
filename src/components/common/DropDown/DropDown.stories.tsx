import type { Meta, StoryObj } from '@storybook/react';
import { useState } from '@storybook/preview-api';
import DropDown, { DropDownItem } from './DropDown';
import Button from '../Button';


const meta: Meta<typeof DropDown> = {
  component: DropDown,
  title: 'Components/DropDown',
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: '드롭다운 item 배열',
      table: {
        type: {
          summary: 'DropDownItem[]',
          detail:
            'option: 항목 이름\nicon?: 항목 아이콘\nhandler: 항목 클릭시 실행할 함수\ngroup?: 항목 그룹',
        },
      },
    },
    children: {
      description: '클릭하여 드롭다운을 열 영역',
    },
    clickType: {
      description: '클릭 타입, 마우스 좌클릭 우클릭 중 선택',
    },
    align: {
      description: '드롭다운 메뉴의 정렬 (left 또는 right)',
    },
  },
  parameters: {
    docs: {
      story: {
        height: '300px',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof DropDown>;

export const Default: Story = {
  args: {},
  render: function Render(args) {
    const items: DropDownItem[] = [
      {
        option: 'Item 1',
        icon: 'mdi:home',
        handler: () => console.log('Item 1 clicked'),
      },
      {
        option: 'Item 2',
        icon: 'mdi:home',
        handler: () => console.log('Item 2 clicked'),
      },
      {
        option: 'Item 3',
        icon: 'mdi:home',
        handler: () => console.log('Item 3 clicked'),
      },
      {
        option: 'Item 4',
        icon: 'mdi:home',
        handler: () => console.log('Item 4 clicked'),
      },
      {
        option: 'Item 5',
        icon: 'mdi:home',
        handler: () => console.log('Item 5 clicked'),
      },
    ];
    return (
      <DropDown {...args} items={items}>
        <Button onClick={() => {}}>DropDown Open</Button>
      </DropDown>
    );
  },
};

export const RightClick: Story = {
  args: {
    clickType: 'right',
  },
  render: function Render(args) {
    const items: DropDownItem[] = [
      {
        option: 'Item 1',
        icon: 'mdi:home',
        handler: () => console.log('Item 1 clicked'),
      },
      {
        option: 'Item 2',
        icon: 'mdi:home',
        handler: () => console.log('Item 2 clicked'),
      },
      {
        option: 'Item 3',
        icon: 'mdi:home',
        handler: () => console.log('Item 3 clicked'),
      },
      {
        option: 'Item 4',
        icon: 'mdi:home',
        handler: () => console.log('Item 4 clicked'),
      },
      {
        option: 'Item 5',
        icon: 'mdi:home',
        handler: () => console.log('Item 5 clicked'),
      },
    ];
    return (
      <DropDown {...args} items={items}>
        <Button onClick={() => {}}>DropDown Open</Button>
      </DropDown>
    );
  },
};

export const Group: Story = {
  args: {},
  render: function Render(args) {
    const items: DropDownItem[] = [
      {
        option: 'Item 1',
        icon: 'mdi:home',
        handler: () => console.log('Item 1 clicked'),
      },
      {
        option: 'Item 2',
        icon: 'mdi:home',
        handler: () => console.log('Item 2 clicked'),
      },
      {
        option: 'Item 3',
        icon: 'mdi:home',
        handler: () => console.log('Item 3 clicked'),
        group: 'Group A',
      },
      {
        option: 'Item 4',
        icon: 'mdi:home',
        handler: () => console.log('Item 4 clicked'),
        group: 'Group A',
      },
      {
        option: 'Item 5',
        icon: 'mdi:home',
        handler: () => console.log('Item 5 clicked'),
        group: 'Group B',
      },
    ];
    return (
      <DropDown {...args} items={items}>
        <Button onClick={() => {}}>DropDown Open</Button>
      </DropDown>
    );
  },
};
