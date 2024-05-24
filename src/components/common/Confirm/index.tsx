import { useDialog } from "@/hooks/useDialog";
import { ConfirmProps } from "@/types/props/DialogProps";
import React from "react";
import Icon from "../Icon";
import Button from "../Button";

/**
 * Confirm 컴포넌트
 * @param title Confirm 제목
 * @param icon Title 앞에 출력될 아이콘
 * @param titleClass 추가할 타이틀 className
 * @param message Confirm 메시지
 * @param onConfirm 확인 버튼 클릭시 실행할 함수
 */
export default function Confirm({
  title,
  icon = "",
  message,
  onConfirm,
  titleClass = "",
}: ConfirmProps) {
  const { dismiss } = useDialog();

  const handleConfirm = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    dismiss();
    onConfirm();
  };

  const closeConfirm = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    dismiss();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30"
      onClick={(e) => closeConfirm(e)}
    >
      <div
        className="border rounded-md bg-white border-gray-200 w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-2 p-4 border-b border-gray-200">
          <div
            className={`text-gray-700 font-bold select-none flex gap-2 items-center ${titleClass}`}
          >
            {icon && <Icon name={icon} />}
            {title}
          </div>
        </div>
        <div className="p-4 flex items-center select-none text-gray-800">
          {message}
        </div>
        <div className="p-4 bg-gray-50 flex gap-2 justify-end">
          <Button variant="text" color="dark" onClick={() => close()}>
            취소
          </Button>
          <Button onClick={(e) => handleConfirm(e)}>확인</Button>
        </div>
      </div>
    </div>
  );
}
