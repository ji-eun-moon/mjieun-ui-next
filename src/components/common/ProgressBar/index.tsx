import { Color } from "@/types/themes/color";
import { formatNumber } from "@/utils/format";
import { backgroundColor, textColor } from "@/utils/getColor";
import classNames from "classnames";
import React from "react";

interface Props {
  label?: string;
  maxValue?: number;
  value: number;
  color?: Color;
  showValue?: boolean;
  format?: boolean;
  suffix?: string;
}

/**
 * Progress Bar 컴포넌트
 * @param label 라벨
 * @param maxValue 최댓값
 * @param value 값
 * @param color 색상
 * @param showValue 값 출력 여부
 * @param format 값 포맷팅 여부
 * @param suffix 값 접미사(단위)
 */
function ProgressBar({
  value,
  label = "",
  color = "primary",
  maxValue = 100,
  suffix = "%",
  format = false,
  showValue = true,
}: Props) {
  const width = (value / maxValue) * 100;

  const backgroundOpacity = () => {
    switch (color) {
      case "primary":
        return "bg-primary-100";
      case "danger":
        return "bg-danger-100";
      case "success":
        return "bg-success-100";
      case "warning":
        return "bg-warning-100";
      case "dark":
        return "bg-dark-100";
    }
  };

  const labelClass = () => {
    const base =
      "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full";
    return classNames(base, backgroundOpacity(), textColor(color));
  };

  const valueClass = () => {
    const base = "text-xs font-semibold inline-block";
    return classNames(base, textColor(color));
  };

  const barContainerClass = () => {
    const base = "overflow-hidden h-2 flex rounded";
    return classNames(base, backgroundOpacity());
  };

  const barClass = () => {
    const base = "transition-all duration-300";
    return classNames(base, backgroundColor(color));
  };

  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>{label && <span className={labelClass()}>{label}</span>}</div>
        <div className="text-right">
          {showValue && (
            <span className={valueClass()}>
              {format ? formatNumber(value) : value} {suffix}
            </span>
          )}
        </div>
      </div>
      <div className={barContainerClass()}>
        <div style={{ width: `${width}%` }} className={barClass()}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
