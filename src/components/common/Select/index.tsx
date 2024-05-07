"use client";

import React, { useState } from "react";
import Icon from "../Icon";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import classNames from "classnames";

interface IOption {
  label: string;
  value: string;
}

interface SelectProps {
  options: IOption[];
  label?: string;
  required?: boolean;
  placeholder?: string;
  search?: boolean;
  position?: "top" | "bottom";
  disabled?: boolean;
  selected: string;
  onChange: (value: string) => void;
}

/**
 * 셀렉트 박스 컴포넌트
 * @param options 옵션 리스트
 * @param label 셀렉트 라벨
 * @param required 입력 필수 여부
 * @param placeholder 도움말 텍스트
 * @param search 검색 기능 사용 여부
 * @param position 옵션리스트 위치
 * @param disabled 비활성화 여부
 * @param selected 선택된 값(value)
 * @param onChange 값을 변경하는 함수
 */

export default function Select({
  options,
  label = "",
  required = false,
  placeholder = "",
  search = false,
  position = "bottom",
  disabled = false,
  selected,
  onChange,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const ref = useOutsideClick(() => {
    setIsOpen(false);
  });

  const handleItemClick = (option: IOption) => {
    onChange(option.value);
    setIsOpen(false);
    setSearchText(option.label);
  };

  const toggleDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const boxStyle = () => {
    const basic =
      "flex gap-2 items-center justify-between px-2 py-2 rounded-md border-2 hover:border-primary-300 bg-white text-black font-medium cursor-pointer";
    const openStyle = "border-primary-300";
    const closeStyle = "border-gray-300";
    const disabledStyle = "opacity-50 pointer-events-none";

    return classNames(
      basic,
      isOpen ? openStyle : closeStyle,
      disabled && disabledStyle
    );
  };

  const icon = () => {
    if (isOpen) {
      return <Icon name="mdi:chevron-up" size={16} color="primary-500" />;
    } else {
      return (
        <Icon
          name="mdi:chevron-down"
          size={16}
          color="primary-400"
          className="group-hover:text-primary-500 transition-colors"
        />
      );
    }
  };

  const renderLabel = () => {
    if (label) {
      return <p className="text-gray-700 selected-none">{label}</p>;
    }
    return <></>;
  };

  const renderRequired = () => {
    if (required) {
      return <p className="text-primary-500 font-bold selected-none">*</p>;
    }
    return <></>;
  };

  const renderValue = () => {
    const selectedOption = options.find((option) => option.value === selected);

    if (search) {
      return (
        <input
          type="text"
          placeholder={placeholder}
          className="w-full focus:outline-none text-sm selected-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      );
    }
    return <p>{selectedOption ? selectedOption.label : placeholder}</p>;
  };

  const renderOptions = () => {
    const filteredOptions = search
      ? options.filter((option) => option.label.includes(searchText))
      : options;

    const optionPosition = position === "top" ? "bottom-full" : "top-full";

    const optionStyle = (option: IOption) => {
      const status = selected === option.value;
      const basic =
        "px-2 py-2 cursor-pointer transition-colors rounded-md selected-none";
      const selectStyle =
        "bg-primary-50 rounded-md font-bold text-primary-500 hover:bg-primary-100";
      const notSelectStyle =
        "hover:bg-gray-100 hover:font-bold hover:text-gray-700";

      return classNames(basic, status ? selectStyle : notSelectStyle);
    };

    return (
      <div
        className={`max-h-[200px] overflow-y-auto absolute left-0 w-full border-2 border-gray-300 rounded-md bg-white z-10 flex flex-col gap-1 transition-colors ${optionPosition}`}
      >
        {filteredOptions.map((option) => (
          <p
            aria-hidden="true"
            key={option.value}
            onClick={() => handleItemClick(option)}
            className={optionStyle(option)}
          >
            {option.label}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-2 group" ref={ref}>
      <div className="flex gap-1">
        {renderLabel()}
        {renderRequired()}
      </div>
      <div className="relative w-full">
        <div onClick={toggleDropdown} className={boxStyle()} aria-hidden="true">
          {renderValue()}
          {icon()}
        </div>
        {isOpen && renderOptions()}
      </div>
    </div>
  );
}
