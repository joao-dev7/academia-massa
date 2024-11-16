// src/components/Modal/DeleteConfirmationModal.js
import React from 'react';

const DeleteFinancialModal = ({ isOpen, closeModal, rowData }) => {
  if (!isOpen) return null;

  const onConfirmDelete = (row) => {
    console.log(`Deletando movimento com ID: ${row["ID Movimentação"]}`);
    closeModal();
  };

  return (
    <div > {/*className="modal-ALGO"> */}
      <div > {/*className="modal-content"> */}
        <h2>Confirmar Exclusão</h2>
        <p>Você tem certeza que deseja excluir a movimentação: {rowData["ID Movimentação"]}?</p>
        <button onClick={() => onConfirmDelete(rowData)}>Apagar</button>
        <button onClick={closeModal}>Cancelar</button>
      </div>
    </div>
  );
};

export default DeleteFinancialModal;