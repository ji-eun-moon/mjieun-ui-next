import type { Meta, StoryObj } from "@storybook/react";
import Select from ".";
import { useState } from "@storybook/preview-api";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Components/Select",
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "셀렉트 박스 라벨",
    },
    options: {
      control: "object",
      description: "옵션 리스트",
      table: {
        type: {
          summary: "IOption[]",
          detail: "label: 라벨\nvalue: 값",
        },
      },
    },
    required: {
      control: "boolean",
      description: "필수 입력 여부",
    },
    placeholder: {
      control: "text",
      description: "도움말 텍스트",
    },
    search: {
      control: "boolean",
      description: "검색 기능 활성화 여부",
    },
    position: {
      control: "radio",
      options: ["top", "bottom"],
      description: "옵션리스트 렌더링 위치",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 여부",
    },
    selected: {
      description: "선택된 값",
    },
    onChange: {
      description: "값을 변경할 함수",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "지역 선택",
    placeholder: "지역을 선택해주세요",
    required: true,
    options: [
      { label: "서울특별시", value: "Seoul" },
      { label: "부산광역시", value: "Busan" },
      { label: "인천광역시", value: "Incheon" },
      { label: "대구광역시", value: "Daegu" },
      { label: "대전광역시", value: "Daejeon" },
      { label: "광주광역시", value: "Gwangju" },
      { label: "울산광역시", value: "Ulsan" },
      { label: "세종특별자치시", value: "Sejong" },
      { label: "경기도", value: "Gyeonggi" },
      { label: "경상남도", value: "Gyeongsangnam" },
      { label: "경상북도", value: "Gyeongsangbuk" },
      { label: "충청남도", value: "Chungcheongnam" },
      { label: "충청북도", value: "Chungcheongbuk" },
      { label: "전라남도", value: "Jeollanam" },
      { label: "전라북도", value: "Jeollabuk" },
      { label: "강원도", value: "Gangwon" },
      { label: "제주도", value: "Jeju" },
    ],
  },
  render: function Render(args) {
    const [selected, setSelected] = useState<string>("");
    return <Select {...args} selected={selected} onChange={setSelected} />;
  },
};

export const Disabled: Story = {
  args: {
    label: "지역 선택",
    placeholder: "지역을 선택해주세요",
    required: true,
    disabled: true,
    options: [
      { label: "서울특별시", value: "Seoul" },
      { label: "부산광역시", value: "Busan" },
      { label: "인천광역시", value: "Incheon" },
      { label: "대구광역시", value: "Daegu" },
      { label: "대전광역시", value: "Daejeon" },
      { label: "광주광역시", value: "Gwangju" },
      { label: "울산광역시", value: "Ulsan" },
      { label: "세종특별자치시", value: "Sejong" },
      { label: "경기도", value: "Gyeonggi" },
      { label: "경상남도", value: "Gyeongsangnam" },
      { label: "경상북도", value: "Gyeongsangbuk" },
      { label: "충청남도", value: "Chungcheongnam" },
      { label: "충청북도", value: "Chungcheongbuk" },
      { label: "전라남도", value: "Jeollanam" },
      { label: "전라북도", value: "Jeollabuk" },
      { label: "강원도", value: "Gangwon" },
      { label: "제주도", value: "Jeju" },
    ],
  },
  render: function Render(args) {
    const [selected, setSelected] = useState<string>("");
    return <Select {...args} selected={selected} onChange={setSelected} />;
  },
};
