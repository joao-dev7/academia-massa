// src/components/Table.js
import React from 'react';

function Table({ columns, data }) {
    console.log('Columns:', columns);
    console.log('Data:', data);
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col}</th> // Exibe o nome da coluna
          ))}
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
              <button>Editar</button>
              <button>Apagar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;