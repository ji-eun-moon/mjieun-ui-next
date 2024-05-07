"use client";
import React, { useState } from "react";
import Select from "@/components/common/Select";
import MultiSelect from "@/components/common/MultiSelect";
import Segment from "@/components/common/Segment";

function HomePage() {
  const [value, setValue] = useState<string>("");
  const [selected, setSelected] = useState<string[]>([]);

  const options = [
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
  ];
  return (
    <div className="w-fit m-16">
      <div className="w-56">
        <Select
          options={options}
          selected={value}
          onChange={setValue}
          placeholder="지역을 선택해주세요."
        />
      </div>
      <MultiSelect
        options={options}
        selected={selected}
        onChange={setSelected}
        placeholder="지역을 선택해주세요."
      />
      <Segment
        items={[
          { id: "1", name: "Tab 1", content: "Content 1" },
          { id: "2", name: "Tab 2", content: "Content 2" },
          { id: "3", name: "Tab 3", content: "Content 3" },
          { id: "4", name: "Tab 4", content: "Content 4" },
        ]}
      />
    </div>
  );
}

export default HomePage;
