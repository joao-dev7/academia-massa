import React from "react";
import styles from './modal.module.css';

function SavingButtons( { handleSave, close } ){
    return(
        <>
            <button className={styles.editBtnModal} onClick={handleSave}>Salvar</button>
            <button className={styles.deleteBtnModal} onClick={close}>Fechar</button>
        </>
    )
}

export default SavingButtons;