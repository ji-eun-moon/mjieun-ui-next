import { useDialog } from "@/hooks/useDialog";
import { SideDialogProps } from "@/types/props/DialogProps";
import classNames from "classnames";
import styles from "./SideDialog.module.scss";
import { useState } from "react";
import Icon from "../Icon";
import Button from "../Button";

/**
 * SideDialog 컴포넌트
 * @param title 다이얼로그 제목
 * @param body 다이얼로그 body
 * @param onButton 다이얼로그 버튼 클릭시 실행할 함수
 * @param buttonLabel 버튼 라벨
 */
export default function SideDialog({
  title,
  subTitle = "",
  body,
  onButton,
  buttonLabel,
}: SideDialogProps) {
  const { dismiss } = useDialog();
  const [isClosing, setIsClosing] = useState(false);

  const handleCloseDialog = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsClosing(true);
    setTimeout(() => {
      dismiss();
    }, 500);
  };

  const dialogBox = () => {
    const base = "h-full bg-white p-6 shadow-md";
    return classNames(
      base,
      isClosing ? styles["slide-out"] : styles["slide-in"]
    );
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-30"
      onClick={(e) => handleCloseDialog(e)}
    >
      <div className={dialogBox()} onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col gap-6 justify-between h-full">
          <div className="flex flex-col gap-6">
            <div
              className="cursor-pointer"
              onClick={(e) => handleCloseDialog(e)}
            >
              <Icon
                name="material-symbols:keyboard-double-arrow-left"
                className="hover:text-primary"
                size={36}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-bold text-2xl text-gray-700">{title}</div>
              {subTitle && <div className="text-gray-500">{subTitle}</div>}
            </div>
            {body}
          </div>
          <Button expand onClick={onButton}>
            {buttonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
