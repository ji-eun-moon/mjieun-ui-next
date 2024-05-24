import { useDialog } from "@/hooks/useDialog";
import { ModalProps } from "@/types/props/DialogProps";
import React from "react";
import Icon from "../Icon";

/**
 * Modal 컴포넌트
 * @param title 모달 제목
 * @param icon 모달 타이틀 앞에 출력될 아이콘
 * @param body 모달 body
 * @param buttons 모달 버튼 리스트
 * @param buttonsPosition 모달 버튼 출력 위치
 */
export default function Modal({
  title,
  icon = "",
  body,
  buttons,
  buttonsPosition = "end",
}: ModalProps) {
  const position = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  };

  const { dismiss } = useDialog();

  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    dismiss();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30"
      onClick={closeModal}
    >
      <div
        className="border rounded-md bg-white border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div className="flex gap-2">
            {icon && <Icon name={icon} />}
            <div className={`text-gray-700 font-bold select-none`}>{title}</div>
          </div>
          <div
            className="flex items-center cursor-pointer"
            onClick={closeModal}
          >
            <Icon name="mdi:close" color="gray-700" />
          </div>
        </div>
        <div className="p-4 flex items-center select-none">{body}</div>
        <div
          className={`p-4 bg-gray-50 flex gap-2 ${position[buttonsPosition]}`}
        >
          {buttons.map((button, index) => (
            <div key={index}>{button}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
