import React from "react";
import Icon from "../Icon";
import { Color } from "@/types/themes/color";

type Style = {
  solid: {
    primary: string;
    danger: string;
    success: string;
    warning: string;
    dark: string;
  };
  text: {
    primary: string;
    danger: string;
    success: string;
    warning: string;
    dark: string;
  };
  outlined: {
    primary: string;
    danger: string;
    success: string;
    warning: string;
    dark: string;
  };
};

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: "solid" | "text" | "outlined";
  color?: Color;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  expand?: boolean;
  icon?: string;
  radius?: "sm" | "md" | "lg" | "xl" | "full";
}

/**
 * 버튼 컴포넌트
 * @param children 버튼 안에 들어갈 내용
 * @param variant 버튼 스타일
 * @param color 버튼 색상
 * @param radius 버튼 둥글기
 * @param disabled 버튼 비활성화 여부
 * @param type 버튼 타입
 * @param expand 버튼 확장 여부
 * @param icon 버튼에 들어갈 아이콘
 */

export default function Button({
  children,
  type = "button",
  variant = "solid",
  color = "primary",
  expand = false,
  disabled = false,
  radius = "md",
  icon = "",
}: ButtonProps) {
  const styles: Style = {
    solid: {
      primary:
        "bg-primary hover:bg-primary-400 active:bg-primary-300 text-white disabled:bg-gray-200",
      danger:
        "bg-danger hover:bg-danger-400 active:bg-danger-300 text-white disabled:bg-gray-200",
      warning:
        "bg-warning hover:bg-warning-400 active:bg-warning-300 text-white disabled:bg-gray-200",
      success:
        "bg-success hover:bg-success-400 active:bg-success-300 text-white disabled:bg-gray-200",
      dark: "bg-dark-400 hover:bg-dark-350 active:bg-dark-300 text-white disabled:bg-gray-200",
    },
    text: {
      primary:
        "text-primary hover:bg-primary-100 active:bg-primary-200 disabled:text-gray-400",
      danger:
        "text-danger hover:bg-danger-100 active:bg-danger-200 disabled:text-gray-400",
      warning:
        "text-warning hover:bg-warning-100 active:warning-gray-200 disabled:text-gray-400",
      success:
        "text-success hover:bg-success-100 active:bg-success-200 disabled:text-gray-400",
      dark: "hover:bg-dark-350 active:bg-dark-300 active:text-dark-200 disabled:text-gray-400",
    },
    outlined: {
      primary:
        "border border-primary text-primary hover:bg-primary-100 active:bg-primary-200 disabled:border-gray-400 disabled:text-gray-400",
      danger:
        "border border-danger text-danger hover:bg-danger-100 active:bg-danger-200 disabled:border-gray-400 disabled:text-gray-400",
      warning:
        "border border-warning text-warning hover:bg-warning-100 active:bg-warning-200 disabled:border-gray-400 disabled:text-gray-400",
      success:
        "border border-success text-success hover:bg-success-100 active:bg-success-200 disabled:border-gray-400 disabled:text-gray-400",
      dark: "border border-dark text-dark hover:bg-dark-100 active:bg-dark-200 disabled:border-gray-400 disabled:text-gray-400",
    },
  };

  const rounded = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  const buttonClass = () => {
    let classes = `${styles[variant][color]} ${rounded[radius]} px-3 py-2 text-sm font-semibold transition-colors disabled:cursor-not-allowed flex gap-2 justify-center items-center disabled:pointer-events-none`;
    if (expand) {
      classes += " w-full";
    }
    return classes;
  };

  const iconColor = () => {
    if (variant === "solid") {
      return "white";
    }
    if (disabled) {
      return "gray-400";
    }
    return color;
  };

  return (
    <button type={type} className={buttonClass()} disabled={disabled}>
      {icon && <Icon name={icon} size={16} color={iconColor()} />}
      {children}
    </button>
  );
}
