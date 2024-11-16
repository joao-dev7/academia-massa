// src/pages/Financial.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardMenu from '../Components/DashboardMenu';
import Table from '../Components/Table';
import SearchBoard from '../Components/SearchBoard';
import DeleteFinancialModal from '../Components/Modal/FinancialDeleteModal';
import FinancialEditModal from '../Components/Modal/FinancialEditModal';
//import styles from '../css/...' TODO: Ver se será necessário uma classe pra cada um, ou se será igual, acho q vai ser o mesmo
import financialIcon from '../images/financial-icon.png'
import eyeButton from '../images/eyes.png'

const eyesImg = <img src={eyeButton} className='img-eyes'/>
const financialsData = [
    { "tabela": "financeiro", "id":"1", "tabela": "", "id":"", "Ver":eyesImg, "ID Movimentação": 50454, "Data": "20/04/2024", "Tipo":"Entrada", "Valor":"R$ 10,00" },
    { "tabela": "financeiro", "id":"2", "Ver":eyesImg, "ID Movimentação": 24, "Data": "26/04/2024", "Tipo":"Entrada", "Valor":"R$ 85,00" },
    { "tabela": "financeiro", "id":"3", "Ver":eyesImg, "ID Movimentação": 513, "Data": "16/07/2024", "Tipo":"Saída", "Valor":"R$ 30,00" },
];
// TODO: A ROW PODE TER ATÉ MAIS INFO DO QUE VAI APARECER, DAÍ TEM POR EX, ID, TABELA, ETC. PRA SER USADO NO EDIT E NO DELETE
// JÁ QUE AS COLUNAS SÃO PUXADAS SÓ DAQUI -->
const financialColumns = ["Ver", "ID Movimentação", "Data", "Tipo", "Valor"]


function Financial () {

    return (
        <div> {/* TODO: Adicionar classe */}
            <DashboardMenu description='Financial' iconSrc={financialIcon}/>
            <SearchBoard></SearchBoard>
            <Table 
            columns={financialColumns}//TODO: Implementar corretamente a tabela Ver e a tabela Ações
            data={financialsData}
            EditModal={FinancialEditModal}
            DeleteModal={DeleteFinancialModal}
            />
        </div>
    )
}

export default Financial