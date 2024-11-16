// src/components/Modal/DeleteConfirmationModal.js
import React from 'react';
import DeletingButtons from './DeletingButtons';
import styles from './modal.module.css'
import Modal from './Modal';

const DeleteFinancialModal = ({ isOpen, closeModal, rowData }) => {
  if (!isOpen) return null;

  const onConfirmDelete = (row) => {
    console.log(`Deletando membro: ${row["Nome"]}`);
    closeModal();
  };

  return (
    <Modal>
        <h2>Tem certeza que deseja apagar o membro: <span className={styles.highlight}>{rowData["Nome"]}</span></h2>
        <DeletingButtons closeModal={closeModal} onConfirmDelete={onConfirmDelete} rowData={rowData}/>
    </Modal>
  );
};

export default DeleteFinancialModal;