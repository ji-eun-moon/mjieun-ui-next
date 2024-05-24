import Alert from "@/components/common/Alert";
import Confirm from "@/components/common/Confirm";
import Modal from "@/components/common/Modal";
import SideDialog from "@/components/common/SideDialog";
import { createPortal } from "react-dom";
import { useDialogContext } from "./useDialog";
import { CreateDialogType } from "@/types/props/DialogProps";

const DIALOG_COMPONENTS: Record<string, React.ComponentType<any>> = {
  alert: Alert,
  confirm: Confirm,
  modal: Modal,
  sideDialog: SideDialog,
};

function DialogPortal() {
  const openedDialogs = useDialogContext();
  let dialogElement: Element | null;

  const renderDialog = openedDialogs.map(
    ({ type, props, id }: CreateDialogType) => {
      const DialogComponent = type && DIALOG_COMPONENTS[type];
      dialogElement = document.getElementById("dialog");

      return (
        <div key={id} onClick={(e) => e.stopPropagation()}>
          <DialogComponent key={id} {...props} />
        </div>
      );
    }
  );

  return dialogElement && createPortal(renderDialog, dialogElement);
}

export default DialogPortal;
