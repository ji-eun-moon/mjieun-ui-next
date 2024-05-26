import type { Meta, StoryObj } from '@storybook/react';
import { useState } from '@storybook/preview-api';
import Paginator from '.';

const meta: Meta<typeof Paginator> = {
  component: Paginator,
  title: 'Components/Paginator',
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      description: '현재 페이지',
      control: 'number',
    },
    totalPages: {
      description: '총 페이지 수',
      control: 'number',
    },
    onPageChange: {
      description: '페이지 이동시 실행할 함수',
    },
    pageToShow: {
      description: '페이지네이터 한 그룹당 페이지 수',
      control: 'number',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Paginator>;

export const Default: Story = {
  args: {},
  render: function Render(args) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 23;
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
    return (
      <Paginator
        {...args}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    );
  },
};
