import { useDialog } from "@/hooks/useDialog";
import { AlertProps } from "@/types/props/DialogProps";
import Icon from "../Icon";
import { Color } from "@/types/themes/color";
import Button from "../Button";

/**
 * Alert 컴포넌트
 * @param type 알림타입
 * @param message 알림메시지
 */
export default function Alert({ type, message }: AlertProps) {
  const { dismiss } = useDialog();

  const alertIcon = {
    success: "mdi:check-circle",
    info: "mdi:information",
    warning: "mdi:alert",
    error: "mdi:alert-circle",
  };

  const color: Record<string, Color> = {
    success: "success",
    info: "primary",
    warning: "warning",
    error: "danger",
  };

  const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    dismiss();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30"
      onClick={(e) => handleClose(e)}
    >
      <div
        className="border rounded-md bg-white border-gray-200 w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-2 p-4 border-b border-gray-200">
          <Icon name={alertIcon[type]} color={color[type]} />
          <div className={`text-${color[type]} font-bold select-none`}>
            {type.toUpperCase()}
          </div>
        </div>
        <div className="p-4 h-20 flex items-center select-none">{message}</div>
        <div className="p-4 bg-gray-50 flex justify-end">
          <Button color={color[type]} onClick={(e) => handleClose(e)}>
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}
