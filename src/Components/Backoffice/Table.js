// src/components/Table.js
import React, { useState } from 'react';
import styles from '../Modal/modal.module.css';
import './table.css';
import {eyeButton} from '../../assets'
import FinancialViewModal from '../Modal/FinancialViewModal';

function Table({ columns, data, EditModal, DeleteModal, showCheckbox = true }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]); // Estado para controlar os checkboxes
  

  const openEditModal = (row) => {
      setSelectedRow(row);
      setIsEditModalOpen(true);
      setIsDeleteModalOpen(false);
  };

  const closeEditModal = () => {
      setSelectedRow(null);
      setIsEditModalOpen(false);
  };

  const openDeleteModal = (row) => {
      setSelectedRow(row);
      setIsDeleteModalOpen(true);
      setIsEditModalOpen(false);
  };
  
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const openViewModal = (row) => {
      setSelectedRow(row);
      setIsViewModalOpen(true);
  };

  const closeViewModal = () => {
      setSelectedRow(null);
      setIsViewModalOpen(false);
  };

  // Funções para os checkboxes
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(data.map((row) => row));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (row) => {
    if (selectedRows.includes(row)) {
      setSelectedRows(selectedRows.filter((selected) => selected !== row));
    } else {
      setSelectedRows([...selectedRows, row]);
    }
  };

  return (
    <div className="table-container">

      <table className='tableBackoffice'>
        <thead>
          <tr>
            {showCheckbox && //Condição para exibir checkbox
              <th> 
                <input 
                  type='checkbox' 
                  id='selectAll' 
                  className="inputCheckBox"
                  onChange={handleSelectAll}
                  checked={selectedRows.length === data.length && data.length > 0}
                  />
              </th>} 
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {showCheckbox && //Condição para exibir checkbox
                <td>
                  <input 
                    type='checkbox' 
                    className='inputCheckBox' 
                    checked={selectedRows.includes(row)}
                    onChange={() => handleSelectRow(row)}
                    />
                </td>} 
              {columns.map((col, colIndex) => (
                col == 'Ver' ? ( //Validação para quando for a coluna Ver
                  <td key={colIndex}><img src={eyeButton} className='img-eyes' onClick={() => openViewModal(row)}/></td>
                ) : (
                  <td key={colIndex}>{row[col]}</td>
                )
              ))}
              <td>
                <button className={styles.editButton} onClick={() => openEditModal(row)}>Editar</button>
                <button className={styles.deleteButton} onClick={() => openDeleteModal(row)}>Apagar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <EditModal
        isOpen={isEditModalOpen}
        closeModal={closeEditModal}
        rowData={selectedRow}
        />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        closeModal={closeDeleteModal}
        rowData={selectedRow}
        />

      <FinancialViewModal 
        isOpen={isViewModalOpen}
        closeModal={closeViewModal}
        rowData={selectedRow}
        />
        </div>
  );
}

export default Table;
