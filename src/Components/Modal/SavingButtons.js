import React from "react";
import styles from './modal.module.css';

function SavingButtons( { form, close } ){
    return(
        <div>
            <button type="submit" className={styles.editBtnModal} form={form}>Salvar</button>
            <button type="button" className={styles.deleteBtnModal} onClick={close}>Fechar</button>
        </div>
    )
}

export default SavingButtons;