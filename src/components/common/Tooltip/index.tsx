import classNames from "classnames";
import { Color } from "@/types/themes/color";
import React, { ReactNode, useState } from "react";
import Icon from "../Icon";

type TooltipPosition =
  | "top"
  | "bottom"
  | "right"
  | "left"
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end"
  | "left-start"
  | "left-end"
  | "right-start"
  | "right-end";

interface Props {
  children: ReactNode;
  content: ReactNode;
  color: Color;
  radius?: "none" | "sm" | "md" | "lg" | "full";
  position?: TooltipPosition;
  icon: string;
}

function Tooltip({
  children,
  content,
  position = "top",
  radius = "md",
  color = "primary",
  icon = "",
}: Props) {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  const positionClasses = () => {
    switch (position) {
      case "top":
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-2";
      case "top-start":
        return "bottom-full left-0 mb-2";
      case "top-end":
        return "bottom-full right-0 mb-2";
      case "right":
        return "top-1/2 left-full transform -translate-y-1/2 ml-2";
      case "right-start":
        return "top-0 left-full ml-2";
      case "right-end":
        return "bottom-0 left-full ml-2";
      case "bottom":
        return "top-full left-1/2 transform -translate-x-1/2 mt-2";
      case "bottom-start":
        return "top-full left-0 mt-2";
      case "bottom-end":
        return "top-full right-0 mt-2";
      case "left":
        return "top-1/2 right-full transform -translate-y-1/2 mr-2";
      case "left-start":
        return "top-0 right-full mr-2";
      case "left-end":
        return "bottom-0 right-full mr-2";
      default:
        return "";
    }
  };

  const roundedClass = () => {
    switch (radius) {
      case "none":
        return "";
      case "sm":
        return "rounded rounded-sm";
      case "md":
        return "rounded rounded-md";
      case "lg":
        return "rounded rounded-lg";
      case "full":
        return "rounded rounded-full";
    }
  };

  const colorClass = () => {
    switch (color) {
      case "primary":
        return "bg-primary";
      case "danger":
        return "bg-danger";
      case "success":
        return "bg-success";
      case "warning":
        return "bg-warning";
      case "dark":
        return "bg-dark";
    }
  };

  const tooltipClasses = () => {
    const base =
      "absolute px-2 py-1 text-white text-sm shadow-lg z-10 min-w-max flex gap-2 items-center";
    return classNames(base, positionClasses(), roundedClass(), colorClass());
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && (
        <div className={tooltipClasses()}>
          {icon && <Icon name={icon} size={18} />}
          {content}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
