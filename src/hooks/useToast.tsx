import { useMemo, useState, createContext, useContext } from "react";
import { createPortal } from "react-dom";
import ToastPortal from "./ToastPortal";

export interface ToastData {
  type: "success" | "info" | "warning" | "error";
  title: string;
  message: string;
  children?: React.ReactNode;
}

interface ToastContextType {
  toasts: ToastData[];
}

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
);
export const ToastDispatchContext = createContext({
  showToast: (toast: ToastData) => {},
  closeToast: () => {},
});

export const useToastContext = () => useContext(ToastContext);
export const useToastDispatchContext = () => useContext(ToastDispatchContext);

export function ToastProvider({
  children,
  position,
}: {
  children: React.ReactNode;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const showToast = (newToast: ToastData) => {
    setToasts((toasts: ToastData[]) => [...toasts, newToast]);
    setTimeout(() => {
      closeToast();
    }, 3000);
  };

  const closeToast = () => {
    setToasts((toasts) => {
      return toasts.slice(1, toasts.length);
    });
  };

  const dispatch = useMemo(() => ({ showToast, closeToast }), []);

  return (
    <ToastDispatchContext.Provider value={dispatch}>
      <ToastContext.Provider value={{ toasts }}>
        {children}
        <ToastPortal position={position} />
      </ToastContext.Provider>
    </ToastDispatchContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastDispatchContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
