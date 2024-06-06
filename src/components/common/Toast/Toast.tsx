import React, { useEffect, useState } from "react";

import styles from "./Toast.module.scss";
import classNames from "classnames";
import Icon from "../Icon";

export interface ToastProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  type: "success" | "info" | "warning" | "error";
  title: string;
  message: string;
  children?: React.ReactNode;
}

/**
 * Toast 컴포넌트
 * @param position Toast 컴포넌트 위치
 * @param type Toast 타입
 * @param title Toast Title
 * @param message Toat Message
 * @param children Toat Message 아래에 추가할 내용
 */
export default function Toast({
  position,
  type,
  title,
  message,
  children,
}: ToastProps) {
  const [animationClass, setAnimationClass] = useState("");

  const inAnimation = (
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  ) => {
    if (position === "top-left" || position === "bottom-left") {
      return styles["slide-in-left"];
    } else {
      return styles["slide-in-right"];
    }
  };

  const outAnimation = (
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  ) => {
    if (position === "top-left" || position === "bottom-left") {
      return styles["slide-out-left"];
    } else {
      return styles["slide-out-right"];
    }
  };

  useEffect(() => {
    setAnimationClass(inAnimation(position));
    const timeout = setTimeout(() => {
      setAnimationClass(outAnimation(position));
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [position, type]);

  const toastIcon = {
    success: "mdi:check-circle",
    info: "mdi:information",
    warning: "mdi:alert",
    error: "mdi:alert-circle",
  };
  const getTypeClasses = (type: "success" | "info" | "warning" | "error") => {
    const base = "flex gap-4 items-center";
    switch (type) {
      case "success":
        return classNames(base, "bg-success-500 text-white");
      case "info":
        return classNames(base, "bg-primary-500 text-white");
      case "warning":
        return classNames(base, "bg-warning-500 text-white");
      case "error":
        return classNames(base, "bg-danger-500 text-white");
      default:
        return classNames(base, "bg-gray-500 text-white");
    }
  };

  const toastClass = () => {
    const base = "p-4 shadow-lg w-80 z-50";
    return classNames(base, getTypeClasses(type), animationClass);
  };

  return (
    <div className={toastClass()}>
      <Icon name={toastIcon[type]} color="white" />
      <div className="flex flex-col gap-2">
        <div className="font-bold">{title}</div>
        <div className="text-sm">{message}</div>
        {children && <div>{children}</div>}
      </div>
    </div>
  );
}
