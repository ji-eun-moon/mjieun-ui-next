import React, { useEffect, useRef, useState } from "react";
import Icon from "../Icon";
import classNames from "classnames";

interface Props {
  header: string;
  id?: string;
  defaultOpen?: boolean;
  subtitle?: string;
  children: React.ReactNode;
  icon?: string;
  disabled?: boolean;
}

/**
 * 아코디언 컴포넌트
 * @param header 아코디언 제목
 * @param id 아코디언 아이디
 * @param subtitle 아코디언 부제목
 * @param children 아코디언 content
 * @param buttons 버튼 리스트
 * @param icon 제목 옆에 들어갈 아이콘
 * @param disabled 비활성화 여부
 */
export default function Accordion({
  header,
  id = "",
  defaultOpen = false,
  children,
  subtitle = "",
  icon = "",
  disabled = false,
}: Props) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        setContentHeight(contentRef.current.clientHeight);
      } else {
        setContentHeight(0);
      }
    }
  }, [isOpen]);

  const toggleAccordion = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const arrow = () => {
    const iconRotation = isOpen ? "rotate-90" : "";
    return (
      <div className={`transform duration-300 flex ${iconRotation}`}>
        <Icon name="mdi:chevron-left" size={24} color="gray-700" />
      </div>
    );
  };

  const boxStyle = () => {
    const basic = "flex justify-between items-center p-5 cursor-pointer";
    const disabledStyle = "opacity-50 pointer-events-none";
    return classNames(basic, disabled && disabledStyle);
  };

  const contentBox = () => {
    const basic = "transition-all duration-300 overflow-hidden";
    const opened = "max-h-full opacity-100";
    const closeded = "max-h-0 opacity-0";

    return classNames(basic, isOpen ? opened : closeded);
  };

  const headerClass = () => {
    return classNames("text-gray-700 font-semibold text-xl");
  };

  return (
    <div id={id} className="border rounded-md" ref={contentRef}>
      <div className={boxStyle()} onClick={toggleAccordion}>
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2 items-center">
            {icon && <Icon name={icon} />}
            <div className="flex flex-col gap-2 select-none">
              <div className={headerClass()}>{header}</div>
              {subtitle && <div>{subtitle}</div>}
            </div>
          </div>
          {arrow()}
        </div>
      </div>
      <div className={`${contentBox()}`} style={{ maxHeight: contentHeight }}>
        <div className="p-5 pt-0 select-none flex flex-col gap-6">
          <div className="w-full h-px bg-gray-200" />
          {children}
        </div>
      </div>
    </div>
  );
}
