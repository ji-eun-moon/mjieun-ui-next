import classNames from "classnames";
import React from "react";
import { useState } from "react";
import Icon from "../Icon";

interface Props {
  label?: string;
  icon?: string;
  iconClass?: string;
  disabled?: boolean;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

/**
 * 토글 컴포넌트
 * @param label 토글 라벨
 * @param icon 아이콘 이름
 * @param iconClass 아이콘 이름
 * @param disabled 비활성화 여부
 * @param checked 체크 여부
 * @param onChange 토글했을 때 실행할 함수
 */
export default function Toggle({
  checked,
  onChange,
  icon = "",
  iconClass = "",
  label = "",
  disabled = false,
}: Props) {
  const handleToggle = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  const borderClass = () => {
    const base =
      "relative flex items-center p-0.5 cursor-pointer rounded-3xl border transition-all w-[54px]";
    const checkedClass =
      "bg-primary-100 border-primary-300 hover:border-primary-400";
    const uncheckedClass = "bg-gray-100 border-gray-300 hover:border-gray-400";
    const disabledStyle = "opacity-50 pointer-events-none";
    return classNames(
      base,
      checked ? checkedClass : uncheckedClass,
      disabled && disabledStyle
    );
  };

  const toggleClass = () => {
    const base =
      "z-0 transition-all rounded-full w-5 h-5 scale-95 duration-300";
    const checkedClass = "translate-x-7 bg-primary-500";
    const uncheckedClass = "translate-x-0 bg-gray-400";
    return classNames(base, checked ? checkedClass : uncheckedClass);
  };

  return (
    <div className="flex gap-2 items-center">
      <label className={borderClass()}>
        <input
          type="checkbox"
          className="hidden"
          checked={checked}
          onChange={handleToggle}
        />
        <div className={toggleClass()} />
      </label>
      {icon && <Icon name={icon} className={iconClass} />}
      {label && <span className="text-gray-600 text-sm">{label}</span>}
    </div>
  );
}
