import { ToastData } from "@/hooks/useToast";
import classNames from "classnames";
import Toast from "./Toast";

interface Props {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  toasts: ToastData[];
}

function ToastList({ position, toasts }: Props) {
  const getPositionClass = (
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  ) => {
    switch (position) {
      case "top-left":
        return "top-0 left-0";
      case "top-right":
        return "top-0 right-0";
      case "bottom-left":
        return "bottom-0 left-0";
      case "bottom-right":
        return "bottom-0 right-0";
      default:
        return "top-0 right-0";
    }
  };

  const toastListClass = () => {
    const base = "fixed";
    return classNames(base, getPositionClass(position));
  };

  return (
    <div className={toastListClass()}>
      <div className="flex flex-col gap-2">
        {toasts.length > 0 &&
          toasts.map((toast: ToastData, index) => (
            <Toast position={position} {...toast} key={index} />
          ))}
      </div>
    </div>
  );
}

export default ToastList;
