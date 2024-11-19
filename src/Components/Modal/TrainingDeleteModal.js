// src/components/Modal/DeleteConfirmationModal.js
import React from 'react';
import DeletingButtons from './DeletingButtons';
import Modal from './Modal';
import styles from './modal.module.css'
import { alertIcon } from '../../assets';

const DeleteFinancialModal = ({ isOpen, closeModal, rowData }) => {
  if (!isOpen) return null;

  const onConfirmDelete = (row) => {
    console.log(`Deletando treino: ${row["Treino"]}`);
    closeModal();
  };

  return (
    <Modal>
      <div className={styles.alertMessage}>
        <img className={styles.alertIcon} src={alertIcon} alt='Icon de Alerta'></img>
        <h2>Tem certeza que deseja apagar o treino: <span className={styles.highlight}>{rowData["Treino"].slice(0, 8)}...</span>?</h2>
      </div>
        <DeletingButtons closeModal={closeModal} onConfirmDelete={onConfirmDelete} rowData={rowData}/>
    </Modal>
  );
};

export default DeleteFinancialModal;