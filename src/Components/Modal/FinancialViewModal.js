// src/components/Modal/FinancialEditModal.js
import React, { useEffect } from 'react';
import Modal from './Modal';
import styles from './modal.module.css'

const FinancialViewModal = ({ isOpen, closeModal, rowData }) => {

  if(!isOpen){return null}

  return (
    <Modal>
      <h2>Detalhes da Movimentação</h2>
      <div>
          <p><strong>Título:</strong> {rowData["Titulo"]}</p>
          <p><strong>Natureza:</strong> {rowData["Natureza"]}</p>
          <p><strong>Razão:</strong> {rowData["Razão"]}</p>
          <p><strong>Data:</strong> {rowData["Data"]}</p>
          <p><strong>Pagamento:</strong> {rowData["Pagamento"]}</p>
          <p><strong>Valor:</strong> {rowData["Valor"]}</p>
          <p><strong>Tipo:</strong> {rowData["Tipo"]}</p>
          <p><strong>Centro de Custo:</strong> {rowData["Centro de custo"]}</p>
      </div>
      <button className={styles.closeButton} onClick={closeModal}>
          Voltar
      </button>
    </Modal>
  );
};

export default FinancialViewModal;