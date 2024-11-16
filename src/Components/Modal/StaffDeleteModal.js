// src/components/Modal/DeleteConfirmationModal.js
import React from 'react';

const DeleteFinancialModal = ({ isOpen, closeModal, rowData }) => {
  if (!isOpen) return null;

  const onConfirmDelete = (row) => {
    console.log(`Deletando colaborador: ${row["Nome"]}`);
    closeModal();
  };

  return (
    <div > {/*className="modal-ALGO"> */}
      <div > {/*className="modal-content"> */}
        <h2>Confirmar Exclusão</h2>
        <p>Tem certeza que deseja apagar o colaborador: {rowData["Nome"]}?</p>
        <button onClick={() => onConfirmDelete(rowData)}>Apagar</button>
        <button onClick={closeModal}>Cancelar</button>
      </div>
    </div>
  );
};

export default DeleteFinancialModal;