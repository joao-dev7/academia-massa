import React from "react";
import styles from './modal.module.css';

function SavingButtons( { handle, close, toSave } ){
    return(
        <>
            <button onClick={handle}>{toSave ? "Salvar" : "Apagar"}</button>
            <button onClick={close}>Fechar</button>
        </>
    )
}

export default SavingButtons;