// src/components/Modal/DeleteConfirmationModal.js
import React from 'react';
import DeletingButtons from './DeletingButtons';
import styles from './modal.module.css'
import Modal from './Modal';

const DeleteFinancialModal = ({ isOpen, closeModal, rowData }) => {
  if (!isOpen) return null;

  
  const onConfirmDelete = (row) => {
    console.log(`Deletando movimento com ID: ${row["ID Movimentação"]}`);
    // TODO: deletar no BD
    closeModal();
  };

  return (
    <Modal>
        <h2>Você tem certeza que deseja apagar a movimentação: <span className={styles.highlight}>{rowData["ID Movimentação"]}</span>?</h2>
        <DeletingButtons closeModal={closeModal} onConfirmDelete={onConfirmDelete} rowData={rowData}/>
    </Modal>
  );
};

export default DeleteFinancialModal;