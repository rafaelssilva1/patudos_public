import { useRef } from "react";
import { Close } from "../icons";
import { Backdrop, BaseModal, IconWrapper } from "./Modal.styles";
import { PropTypes } from "./Modal.types";
import useOutsideClick from "@base/hooks/useClickOutside";

const Modal: React.FC<PropTypes> = ({
  open,
  onClose,
  children,
  ...remainingProps
}) => {
  const ownRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(onClose, ownRef);

  if (!open) {
    return null;
  }

  return (
    <>
      <Backdrop></Backdrop>
      <BaseModal ref={ownRef} {...remainingProps}>
        <IconWrapper onClick={onClose}>
          <Close />
        </IconWrapper>
        {children}
      </BaseModal>
    </>
  );
};

export default Modal;
