import useDetectClick from "@/hooks/useDetectClick";
import classNames from "classnames";
import React from "react";

import { useRef } from "react";
import Icon from "../Icon";

export interface DropDownItem {
  option: string | React.ReactNode;
  icon?: string;
  handler: () => void;
  group?: string;
  active?: boolean;
}

interface Props {
  items: DropDownItem[];
  children: React.ReactNode;
  clickType?: "left" | "right";
  align?: "left" | "right";
}

/**
 * 드롭다운 컴포넌트
 * @param items 드롭다운 item 배열
 * @param children 클릭하여 드롭다운을 열 영역
 * @param clickType 좌클릭 또는 우클릭
 *  @param align 드롭다운 메뉴의 정렬 (left 또는 right)
 */
export default function DropDown({
  items,
  children,
  clickType = "left",
  align = "left",
}: Props) {
  const dropdownRef = useRef(null);
  const [clicked, setClicked] = useDetectClick(dropdownRef, false);
  const containerRef = useRef<HTMLDivElement>(null);

  const groupedItems = items.reduce((groups, item) => {
    const { group = "" } = item;
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(item);
    return groups;
  }, {} as Record<string, DropDownItem[]>);

  const clickLeft = (e: React.MouseEvent) => {
    if (clickType === "left") {
      e.stopPropagation();
      e.preventDefault();
      setClicked(!clicked);
    }
  };

  const clickRight = (e: React.MouseEvent) => {
    if (clickType === "right") {
      e.stopPropagation();
      e.preventDefault();
      setClicked(!clicked);

      const { clientX, clientY } = e;
      const dropdown = dropdownRef.current;
      const container = containerRef.current;

      if (dropdown && container) {
        const containerRect = container.getBoundingClientRect();

        const left = clientX - containerRect.left;
        const top = clientY - containerRect.top;

        dropdown.style.left = `${left}px`;
        dropdown.style.top = `${top}px`;
      }
    }
  };

  const dropDownClass = () => {
    const base =
      "border border-gray-200 shadow-sm p-2 rounded-md flex flex-col gap-2 absolute z-10 bg-white transition-all";
    return classNames(
      base,
      clicked ? "block" : "hidden",
      align === "right" ? "right-0" : "left-0"
    );
  };

  const optionClass = (item: DropDownItem) => {
    const { option, active } = item;
    const base = "rounded-md text-gray-700 text-sm flex w-full";
    const stringClass = "px-3 py-2 hover:bg-gray-100";
    const activeClass = "bg-primary-100 text-primary hover:bg-primary-100";
    if (typeof option === "string") {
      return classNames(base, stringClass, active && activeClass);
    }
    return classNames(base);
  };

  return (
    <div ref={containerRef} className="w-full relative">
      <div
        onClick={clickLeft}
        onContextMenu={clickRight}
        className="cursor-pointer relative w-full"
      >
        {children}
      </div>
      {items.length > 0 && (
        <div ref={dropdownRef} className={dropDownClass()}>
          {Object.entries(groupedItems).map(([groupName, groupItems]) => (
            <div key={groupName} className="w-full">
              {groupName && (
                <div className="text-gray-700 font-semibold text-sm p-1">
                  {groupName}
                </div>
              )}
              <ul className="w-full">
                {groupItems.map((item, index) => (
                  <li key={index} className={optionClass(item)}>
                    <button
                      onClick={item.handler}
                      className="flex gap-2 items-center w-full"
                    >
                      {item.icon && (
                        <Icon
                          name={item.icon}
                          color={item.active && "primary"}
                        />
                      )}
                      <div className="flex w-full gap-2">{item.option}</div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
