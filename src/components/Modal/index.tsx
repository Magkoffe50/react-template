import React, {ReactNode, useEffect} from 'react';
import RModal from 'react-modal';
import cx from 'classnames';
import styles from './styles.module.scss';

type Props = {
  children?: ReactNode,
  onClose: () => void,
  isOpen: boolean,
  className?: string,
  closeMs?: number,
};

const Modal = ({children = null, onClose, isOpen, className, closeMs = 0}: Props) => {
  useEffect(() => {
    if (isOpen && closeMs > 0) {
      setTimeout(() => onClose(), closeMs);
    }
  }, [isOpen]);

  return (
    <RModal
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      isOpen={isOpen}
      className={cx(styles.modal, className)}
      overlayClassName={cx(styles.overlay)}
      ariaHideApp={false}
      onRequestClose={onClose}
    >
      {children}
    </RModal>
  );
};

export default Modal;
