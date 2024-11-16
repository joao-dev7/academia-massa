// src/components/Table.js
import React, { useState } from 'react';
import styles from './Modal/modal.module.css';


function Table({ columns, data, EditModal, DeleteModal}) {
  console.log('Columns:', columns);
  console.log('Data:', data);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  // Funções para abrir e fechar o modal
  const openEditModal = (row) => {
      setSelectedRow(row); // Passa os dados da linha para o modal
      setIsEditModalOpen(true);
      setIsDeleteModalOpen(false)
  };

  const closeEditModal = () => {
      setSelectedRow(null); // Fecha o modal
      setIsEditModalOpen(false); // Limpa os dados do modal
  };

  const openDeleteModal = (row) => {
      setSelectedRow(row);
      setIsDeleteModalOpen(true);
      setIsEditModalOpen(false)
  };
  
  const closeDeleteModal = () => {
  setIsDeleteModalOpen(false);
  setSelectedRow(null);
  };


  return (
  <>
    <table>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col}</th> // Exibe o nome da coluna
          ))}
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((col, colIndex) => (
              <td key={colIndex}>
                {row[col]} {/* Exibe os dados de cada linha, baseando-se no nome da coluna */}
              </td>
            ))}
            <td>
              <button className={styles.editButton} onClick={() => openEditModal(row)}>Editar</button>
              <button className={styles.deleteButton} onClick={() => openDeleteModal(row)}>Apagar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
    {/* Modal de Edição */}
    <EditModal
      isOpen={isEditModalOpen}
      closeModal={closeEditModal}
      rowData={selectedRow}
    />

    {/* Modal de Exclusão */}
    <DeleteModal
      isOpen={isDeleteModalOpen}
      closeModal={closeDeleteModal}
      rowData={selectedRow}
    />
  </>
  );
}

export default Table;