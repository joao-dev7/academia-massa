import React from "react";
import styles from './modal.module.css';


function DeletingButtons( { onConfirmDelete, closeModal, rowData } ){
    return (
        <>
            <button className={styles.editBtnModal} onClick={() => onConfirmDelete(rowData)}>Apagar</button>
            <button className={styles.deleteBtnModal} onClick={closeModal}>Cancelar</button>
        </>
    )
}

export default DeletingButtons;