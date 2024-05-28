import classNames from "classnames";
import React from "react";
import Icon from "../Icon";

interface Props {
  label?: string;
  description?: string;
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}

/**
 * 체크박스 컴포넌트
 * @param label 체크박스 라벨
 * @param description 체크박스 설명
 * @param checked 체크 여부
 * @param onChange 체크 여부 변경시 실행할 함수
 * @param disabled 체크박스 비활성화 여부
 */

export default function CheckBox({
  label = "",
  description = "",
  checked,
  onChange,
  disabled = false,
}: Props) {
  const handleToggle = () => {
    if (!disabled) {
      onChange();
    }
  };

  const groupStyle = () => {
    const basic = "flex gap-3 items-center group select-none w-max";
    const disabledStyle = "opacity-50 pointer-events-none";
    return classNames(basic, disabled && disabledStyle);
  };

  const hoverStyle = () => {
    const basic =
      "absolute w-0 h-0 rounded-full -z-10 group-hover:bg-primary-50 group-hover:w-9 group-hover:h-9 group-hover:transition-all group-hover:ease-in-out group-hover:duration-200";
    const disabledStyle = "opacity-50 pointer-events-none";
    return classNames(basic, disabled && disabledStyle);
  };

  const boxStyle = () => {
    const basic =
      "cursor-pointer w-5 h-5 flex items-center justify-center border-2 border-gray-400 rounded-sm transition-colors relative";
    const disabledStyle = "bg-gray-300 border-gray-400";
    const checkedStyle = "bg-primary-500 border-primary-500";
    const unCheckedStyle = "bg-white";
    return classNames(
      basic,
      disabled && disabledStyle,
      !disabled && checked ? checkedStyle : unCheckedStyle
    );
  };

  const renderIcon = () => {
    if (!disabled) {
      return <Icon name="mdi:check" color="white" />;
    }
    return null;
  };

  return (
    <label className={groupStyle()}>
      <div className={boxStyle()}>
        <input
          className="hidden"
          type="checkbox"
          checked={checked}
          onChange={handleToggle}
        />
        {renderIcon()}
        <div className={hoverStyle()}></div>
      </div>
      <div className="flex flex-col gap-1 cursor-pointer">
        {label && <p className="text-gray-700 text-sm select-none">{label}</p>}
        {description && (
          <p className="text-gray-400 text-sm select-none">{description}</p>
        )}
      </div>
    </label>
  );
}
