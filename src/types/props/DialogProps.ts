export interface AlertProps {
  id: string;
  type: "success" | "info" | "warning" | "error";
  message: string;
}

export interface ConfirmProps {
  id: string;
  title: string;
  icon?: string;
  titleClass?: string;
  message: string;
  onConfirm: () => void;
}

export interface ModalProps {
  id: string;
  title: string;
  icon?: string;
  body: React.ReactNode;
  buttons: React.ReactNode[];
  buttonsPosition?: "center" | "start" | "end";
}

export interface SideDialogProps {
  id: string;
  title: string;
  subTitle?: string;
  body: React.ReactNode;
  onButton: () => void;
  buttonLabel: string;
}

export type DialogType =
  | { type: "alert"; props: AlertProps }
  | { type: "confirm"; props: ConfirmProps }
  | { type: "modal"; props: ModalProps }
  | { type: "sideDialog"; props: SideDialogProps };

export type CreateDialogType =
  | { type: "alert"; props: AlertProps; id: string }
  | { type: "confirm"; props: ConfirmProps; id: string }
  | { type: "modal"; props: ModalProps; id: string }
  | { type: "sideDialog"; props: SideDialogProps; id: string };
