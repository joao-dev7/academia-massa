// src/components/Modal/DeleteConfirmationModal.js
import React from 'react';
import DeletingButtons from './DeletingButtons';
import styles from './modal.module.css'
import { alertIcon } from '../../assets';
import Modal from './Modal';
import { deleteFinancial } from '../../services/api';

const DeleteFinancialModal = ({ isOpen, closeModal, rowData }) => {
  if (!isOpen) return null;

  
  const onConfirmDelete = (row) => {
    console.log(`Deletando movimento com ID: ${row["ID Movimentação"]}`);
    deleteFinancial(row["ID Movimentação"])
    closeModal();
  };

  return (
    <Modal>
      <div className={styles.alertMessage}>
        <img className={styles.alertIcon} src={alertIcon} alt='Icon de Alerta'></img>
        <h2>Você tem certeza que deseja apagar a movimentação: <span className={styles.highlight}>{rowData["ID Movimentação"]}</span>?</h2>
      </div>
        <DeletingButtons closeModal={closeModal} onConfirmDelete={onConfirmDelete} rowData={rowData}/>
    </Modal>
  );
};

export default DeleteFinancialModal;