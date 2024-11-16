import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';

const Modal = ({children}) => {

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') // Certifique-se de adicionar isso no HTML
  );
};

export default Modal;