// src/pages/Financial.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardMenu from '../Components/Dashboard/DashboardMenu';
import Table from '../Components/Backoffice/Table';
import SearchBoard from '../Components/Dashboard/SearchBoard';
import DeleteFinancialModal from '../Components/Modal/FinancialDeleteModal';
import FinancialEditModal from '../Components/Modal/FinancialEditModal';
import FinancialViewModal from '../Components/Modal/FinancialViewModal';
import {financialIcon} from '../assets'

import '../css/financial.css'

const financialsData = [
    { 
        "tabela": "financeiro", 
        "id": "1",
        "ID Movimentação": 50454, 
        "Titulo": "Venda de Produto", 
        "Natureza": "Receita Operacional", 
        "Razão": "Recebimento de venda", 
        "Data": "20/04/2024", //DEVE VIR DO BANCO EM STRING DD/MM/YYYY
        "Pagamento": "Cartão de Crédito", 
        "Valor": "10.00", 
        "Tipo": "ENTRADA", 
        "Centro de custo": "TRAINEE" 
    },
    { 
        "tabela": "financeiro", 
        "id": "2",
        "ID Movimentação": 24, 
        "Titulo": "Devolução de Mercadoria", 
        "Natureza": "Despesa Operacional", 
        "Razão": "Reembolso ao cliente", 
        "Data": "26/04/2024", 
        "Pagamento": "Dinheiro", 
        "Valor": "85.00", 
        "Tipo": "SAIDA", 
        "Centro de custo": "LOJINHA" 
    },
    { 
        "tabela": "financeiro", 
        "id": "3", 
        "ID Movimentação": 513, 
        "Titulo": "Pagamento de Fornecedor", 
        "Natureza": "Despesa Fixa", 
        "Razão": "Compra de insumos", 
        "Data": "16/07/2024", 
        "Pagamento": "Transferência Bancária", 
        "Valor": "30.00", 
        "Tipo": "SAIDA", 
        "Centro de custo": "ACADEMIA" 
    }
];
// TODO: A ROW PODE TER ATÉ MAIS INFO DO QUE VAI APARECER, DAÍ TEM POR EX, ID, TABELA, ETC. PRA SER USADO NO EDIT E NO DELETE
// JÁ QUE AS COLUNAS SÃO PUXADAS SÓ DAQUI -->
const financialColumns = ["Ver", "ID Movimentação", "Data", "Tipo", "Valor"]

function Financial () {
    
    const financialsDataWithView = financialsData.map(item => ({
        ...item, // Copia todas as propriedades existentes
        Ver: null // Adiciona a propriedade "Ver" com o ícone
    }));

    
    return (
        <div className="flexContainer">
        <div className="divMenu">
            <DashboardMenu description='Financeiro' iconSrc={financialIcon}/>
        </div>
        <div className="divBoard">
            <SearchBoard EditModal={FinancialEditModal}></SearchBoard>
        </div>
        <div className="divTable">
        <Table 
            columns={financialColumns}
            data={financialsDataWithView}
            EditModal={FinancialEditModal}
            DeleteModal={DeleteFinancialModal}
            showCheckbox={false}
            />
        </div>
    </div>     
    )
}

export default Financial