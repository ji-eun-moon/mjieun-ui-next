"use client";

import React, { useState } from "react";
import Icon from "../Icon";
import classNames from "classnames";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface IOption {
  label: string;
  value: string;
}

interface Props {
  options: IOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
  label?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  search?: boolean;
  position?: "top" | "bottom";
}

/**
 * 다중 선택 셀렉트
 * @param options 옵션 리스트
 * @param values 선택된 값 리스트
 * @param onChange 값을 선택했을 때 실행할 함수
 * @param label 셀렉트 라벨
 * @param required 입력 필수 여부
 * @param placeholder 도움말 텍스트
 * @param disabled 비활성화 여부
 * @param position 옵션리스트 위치
 * @param search 검색기능 활성화 여부
 */

export default function MultiSelect({
  options,
  selected,
  onChange,
  label = "",
  required = false,
  placeholder = "",
  disabled = false,
  position = "bottom",
  search = false,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const ref = useOutsideClick(() => {
    setIsOpen(false);
  });

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleItemClick = (
    item: IOption,
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const isSelected = selected.some((value) => value === item.value);

    const updatedSelection: string[] = isSelected
      ? selected.filter((option) => option !== item.value)
      : [...selected, item.value];

    onChange(updatedSelection);
    setSearchText("");
    event.stopPropagation();
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
          className="hover:text-primary-500"
        />
      );
    }
  };

  const valueList = () => {
    const selectedList = selected.map((value) => {
      return options.find((opt) => opt.value === value);
    });

    if (selectedList.length > 0) {
      return (
        <div className="flex gap-2">
          {selectedList?.map((option) => (
            <p
              key={option.value}
              className="bg-primary text-white py-1 px-2 rounded-xl flex gap-2 items-center whitespace-nowrap"
              onClick={(e) => handleItemClick(option, e)}
            >
              {option.label}
              <Icon name="mdi:window-close" size={16}></Icon>
            </p>
          ))}
          {search && (
            <input
              type="text"
              className="w-full focus:outline-none text-sm selected-none"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          )}
        </div>
      );
    }
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
    return placeholder;
  };

  const renderLabel = () => {
    if (label) {
      return <p className="text-gray-700">{label}</p>;
    }
    return <></>;
  };

  const renderRequired = () => {
    if (required) {
      return <p className="text-primary-500 font-bold">*</p>;
    }
    return <></>;
  };

  const getFilteredOptions = () => {
    // 검색어를 소문자로 변환
    const searchTerm = searchText.toLowerCase();

    // 선택된 값과 검색어가 포함된 옵션 필터링
    const filtered = options.filter((option) => {
      const isOptionSelected = selected.includes(option.value);
      const matchesSearch = option.label.toLowerCase().includes(searchTerm);
      return !isOptionSelected && matchesSearch;
    });

    // 선택된 값은 검색 결과 앞에 추가하여 보여줌
    const selectedOptions = options.filter((option) =>
      selected.includes(option.value)
    );

    return [...selectedOptions, ...filtered];
  };

  const renderOptions = () => {
    const optionPosition = position === "top" ? "bottom-full" : "top-full";

    const optionStyle = (option: IOption) => {
      const basic = "px-2 py-2 cursor-pointer rounded-md";

      const isSelected = selected.some(
        (selectedOption) => selectedOption === option.value
      );

      const selectStyle =
        "bg-primary-50 rounded-md font-bold text-primary-500 hover:bg-primary-100";
      const notSelectStyle =
        "hover:bg-gray-100 hover:font-bold hover:text-gray-700";

      return classNames(basic, isSelected ? selectStyle : notSelectStyle);
    };

    const filteredOptions = getFilteredOptions();

    return (
      <div
        className={`max-h-[200px] overflow-y-auto absolute left-0 w-full border-2 border-gray-300 rounded-md bg-white z-10 flex flex-col gap-1 ${optionPosition}`}
      >
        {filteredOptions.map((option) => (
          <p
            key={option.value}
            onClick={(e) => handleItemClick(option, e)}
            className={optionStyle(option)}
          >
            {option.label}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-2" ref={ref}>
      <div className="flex gap-1">
        {renderLabel()}
        {renderRequired()}
      </div>
      <div className="relative w-full">
        <div onClick={toggleDropdown} className={boxStyle()} aria-hidden="true">
          <div>{valueList()}</div>
          <div>{icon()}</div>
        </div>
        {isOpen && renderOptions()}
      </div>
    </div>
  );
}
