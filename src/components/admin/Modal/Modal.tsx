import { withStyles } from "@/utils";

import * as styles from "./Modal.styles";

interface ModalProps {
  show: boolean;
}

const Modal = ({ show, children }: React.PropsWithChildren<ModalProps>) => {
  return show ? (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  ) : null;
};

export const ModalTitle = withStyles("h4", styles.title);

export const ModalContainer = withStyles("div", styles.container);

export const ModalGroup = withStyles("div", styles.group);

export const ModalForm = withStyles("form", styles.form);

export default Modal;
