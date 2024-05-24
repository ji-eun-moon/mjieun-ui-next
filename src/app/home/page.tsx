"use client";
import React, { useState } from "react";
import { DialogProvider, useDialog } from "@/hooks/useDialog";
import Button from "@/components/common/Button";
import {
  AlertProps,
  ConfirmProps,
  DialogType,
  SideDialogProps,
} from "@/types/props/DialogProps";

function HomePage() {
  const { show } = useDialog();

  const handleOpenAlert = () => {
    const dialogData: DialogType = {
      type: "alert",
      props: {
        type: "success",
        message: "This is a success message!",
      } as AlertProps,
    };
    show(dialogData);
  };

  const handleOpenConfirm = () => {
    const dialogData: DialogType = {
      type: "confirm",
      props: {
        title: "게시글 삭제",
        message: "정말 삭제하시겠습니까?",
        onConfirm: handleOpenAlert,
      } as ConfirmProps,
    };
    show(dialogData);
  };

  const handleOpenSideDialog = () => {
    const KEY = Math.random().toString(36).substring(2);
    const dialogData: DialogType = {
      type: "sideDialog",
      props: {
        title: "Title",
        body: (
          <div className="w-96">
            {KEY} 새로운 다이얼로그
            <Button onClick={handleOpenAlert}>알림창 열기</Button>
          </div>
        ),
        onButton: handleOpenSideDialog,
        buttonLabel: "하나 더열기",
      } as SideDialogProps,
    };
    show(dialogData);
  };

  return (
    <div>
      <Button onClick={handleOpenAlert}>Open Alert</Button>
      <Button onClick={handleOpenConfirm}>Open Confirm</Button>
      <Button onClick={handleOpenSideDialog}>Open SideDialog</Button>
    </div>
  );
}

export default HomePage;
