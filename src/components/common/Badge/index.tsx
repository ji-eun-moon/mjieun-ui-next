import { Color } from "@/types/themes/color";
import classNames from "classnames";
import React from "react";
import Icon from "../Icon";

interface Props {
  color?: Color;
  type?: "solid" | "outline";
  radius?: "sm" | "md" | "lg" | "full";
  prefixIcon?: string;
  suffixIcon?: string;
  children: React.ReactNode;
}

/**
 * 뱃지 컴포넌트
 * @param color 뱃지 색상
 * @param type 뱃지 모양
 * @param radius 뱃지 둥글기
 * @param icon 뱃지에 들어갈 아이콘
 * @param position 뱃지 문자 위치
 * @param children 뱃지에 들어갈 내용
 */

export default function Badge({
  color = "primary",
  type = "solid",
  radius = "full",
  prefixIcon = "",
  suffixIcon = "",
  children,
}: Props) {
  const styles = {
    solid: {
      primary: "bg-primary text-white",
      danger: "bg-danger text-white",
      warning: "bg-warning text-white",
      success: "bg-success text-white",
      dark: "bg-dark text-white",
    },
    outline: {
      primary: "border bg-primary-50 border-primary-200 text-primary",
      danger: "border bg-danger-50 border-danger-200 text-danger",
      warning: "border bg-warning-50 border-warning-200 text-warning",
      success: "border bg-success-50 border-success-200 text-success",
      dark: "border bg-dark-50 border-dark-200 text-dark",
    },
  };

  const rounded = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-2xl",
  };

  const badgeClass = () => {
    const basic =
      "flex gap-2 items-center w-fit text-xs px-2 py-1 select-none min-w-max";
    const style = `${styles[type][color]} ${rounded[radius]}`;
    return classNames(basic, style);
  };

  const renderPrefixIcon = () => {
    const iconColor = type === "outline" ? color : "text-white";
    if (prefixIcon) {
      return <Icon name={prefixIcon} color={iconColor} size={14}></Icon>;
    }
    return null;
  };

  const renderSuffixIcon = () => {
    const iconColor = type === "outline" ? color : "text-white";
    if (suffixIcon) {
      return <Icon name={suffixIcon} color={iconColor} size={14}></Icon>;
    }
    return null;
  };

  return (
    <div className={badgeClass()}>
      {renderPrefixIcon()}
      {children}
      {renderSuffixIcon()}
    </div>
  );
}
