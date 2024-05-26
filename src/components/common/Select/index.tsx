"use client";

import { useOutsideClick } from "@/hooks/useOutsideClick";
import classNames from "classnames";
import React, { useState } from "react";
import Icon from "../Icon";
import Label from "../Label";

export interface IOption {
  label: string;
  value: string | number;
}

interface SelectProps {
  options: IOption[];
  label?: string;
  required?: boolean;
  placeholder?: string;
  search?: boolean;
  position?: "top" | "bottom";
  disabled?: boolean;
  selected: string | number;
  onChange: (value: string | number) => void;
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
    if (search) {
      setIsOpen(true);
    } else {
      if (!disabled) {
        setIsOpen(!isOpen);
      }
    }
  };

  const boxStyle = () => {
    const basic =
      "flex gap-2 items-center justify-between py-2 rounded-md border-2 hover:border-primary-300 text-black font-medium cursor-pointer px-3";
    const openStyle = "border-primary-300";
    const closeStyle = "border-gray-300";
    const activeStype = "bg-white";
    const disabledStyle = "pointer-events-none bg-gray-100";

    return classNames(
      basic,
      isOpen ? openStyle : closeStyle,
      disabled ? disabledStyle : activeStype
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
          color="gray-300"
          className={`${!disabled && "group-hover:text-primary-500"}`}
        />
      );
    }
  };

  const renderValue = () => {
    const selectedOption = options.find((option) => option.value === selected);

    if (search) {
      return (
        <input
          type="text"
          placeholder={placeholder}
          className="w-full focus:outline-none text-sm"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      );
    }
    if (selected) {
      return <p className="select-none text-sm">{selectedOption.label}</p>;
    }
    return <p className="select-none text-sm text-gray-400">{placeholder}</p>;
  };

  const renderOptions = () => {
    const filteredOptions = search
      ? options.filter((option) => option.label.includes(searchText))
      : options;

    const optionPosition = position === "top" ? "bottom-full" : "top-full";

    const optionStyle = (option: IOption) => {
      const basic =
        "cursor-pointer transition-colors rounded-md select-none text-sm";
      const select =
        "bg-primary-50 rounded-md font-bold text-primary-500 hover:bg-primary-100";
      const notSelect = "hover:bg-gray-100 hover:font-bold hover:text-gray-700";

      return classNames(basic, selected === option.value ? select : notSelect);
    };

    return (
      <div
        className={`p-2 max-h-[200px] overflow-y-auto absolute left-0 w-full shadow-md rounded-md bg-white z-10 flex flex-col gap-1 transition-colors ${optionPosition}`}
      >
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option) => (
            <div className={optionStyle(option)} key={option.value}>
              <p
                aria-hidden="true"
                key={option.value}
                onClick={() => handleItemClick(option)}
                className="p-3 text-sm rounded cursor-pointer"
              >
                {option.label}
              </p>
            </div>
          ))
        ) : (
          <p className="p-3 text-sm text-gray-400">항목이 존재하지 않습니다.</p>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-2 group" ref={ref}>
      {label && <Label label={label} required={required} />}
      <div className="relative w-full">
        <div onClick={toggleDropdown} className={boxStyle()} aria-hidden="true">
          <div className="select-none text-sm w-full">{renderValue()}</div>
          {icon()}
        </div>
        {isOpen && renderOptions()}
      </div>
    </div>
  );
}
