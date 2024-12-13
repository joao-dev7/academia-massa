// src/components/Modal/DeleteConfirmationModal.js
import React from 'react';
import DeletingButtons from './DeletingButtons';
import styles from './modal.module.css'
import Modal from './Modal';
import { alertIcon } from '../../assets';
import { deleteMembro } from '../../services/api';

const DeleteFinancialModal = ({ isOpen, closeModal, rowData }) => {
  if (!isOpen) return null;

  const onConfirmDelete = (row) => {
    console.log(`Deletando membro: ${row["Nome"]}`);
    deleteMembro(row.id)
    closeModal();
  };

  return (
    <Modal>
        <div className={styles.alertMessage}>
          <img className={styles.alertIcon} src={alertIcon} alt='Icon de Alerta'></img>
          <h2>Tem certeza que deseja apagar o membro: <span className={styles.highlight}>{rowData["Nome"]}</span></h2>
        </div>
        <DeletingButtons closeModal={closeModal} onConfirmDelete={onConfirmDelete} rowData={rowData}/>
    </Modal>
  );
};

export default DeleteFinancialModal;