import { createPortal } from "react-dom";
import { useToastContext } from "../hooks/useToast";
import ToastList from "@/components/common/Toast/ToastList";

function ToastPortal({ position }) {
  const { toasts } = useToastContext();

  const toastElement = document.getElementById("toast");

  const renderToast = () => {
    return <ToastList position={position} toasts={toasts}></ToastList>;
  };

  return toastElement && createPortal(renderToast(), toastElement);
}

export default ToastPortal;
