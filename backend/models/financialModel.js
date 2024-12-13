const connection = require('../config/database');

async function getForeignKeys(centroCusto, formaPagamento) {
  const query = `
    SELECT 
        dcc.id AS fk_centro_de_custo_id,
        dfp.id AS fk_forma_de_pagamento_id
    FROM 
        dim_centro_custo dcc
    JOIN 
        dim_forma_pagamento dfp
    WHERE 
        dcc.centro_custo = ? 
        AND dfp.forma_pagamento = ?;
  `;

  return new Promise((resolve, reject) => {
    connection.query(query, [centroCusto, formaPagamento], (err, results) => {
      if (err) {
        return reject(err); // Rejeita a Promise em caso de erro
      }

      if (results.length === 0) {
        return reject(new Error('Nenhuma correspondência encontrada para as FKs.'));
      }

      resolve(results[0]); // Resolve a Promise com o primeiro resultado
    });
  });
}

exports.getAll = () => {
  return new Promise((resolve, reject) => {
    const SQL_FINANCIAL = `
      SELECT 
        "financeiro" AS tabela,
          f.id AS "ID Movimentação",
          f.titulo AS "Titulo",
          f.natureza AS "Natureza",
          f.razao AS "Razão",
          f.data AS "Data",
          dfp.forma_pagamento AS "Pagamento",
          f.valor AS "Valor",
          f.tipo AS "Tipo",
          dcc.centro_custo AS "Centro de custo"
      FROM 
          f_financeiro f
      JOIN 
          dim_centro_custo dcc ON f.fk_centro_de_custo_id = dcc.id
      JOIN 
          dim_forma_pagamento dfp ON f.fk_forma_de_pagamento_id = dfp.id;
        
    `;

    connection.query(SQL_FINANCIAL, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};


exports.getPorNome = (nome) => {
    return new Promise((resolve, reject) => {
      const SQL_FINANCIAL = `
        SELECT 
          "financeiro" AS tabela,
          f.id AS "ID Movimentação",
          f.titulo AS "Titulo",
          f.natureza AS "Natureza",
          f.razao AS "Razão",
          f.data AS "Data",
          dfp.forma_pagamento AS "Pagamento",
          f.valor AS "Valor",
          f.tipo AS "Tipo",
          dcc.centro_custo AS "Centro de custo"
        FROM 
            f_financeiro f
        JOIN 
            dim_centro_custo dcc ON f.fk_centro_de_custo_id = dcc.id
        JOIN 
            dim_forma_pagamento dfp ON f.fk_forma_de_pagamento_id = dfp.id
        WHERE
              f.titulo  LIKE ?
          ;
      `;
  
      connection.query(SQL_FINANCIAL, [`%${nome}%`], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
};


exports.create = (data) => {
  return new Promise(async (resolve, reject) => {
    const { centroCusto, pagamento, titulo, natureza, razao, data: dataMov, valor, tipo } = data;
    try {
      // Obtém as FKs necessárias
      const fks = await getForeignKeys(centroCusto, pagamento);

      const query = `
        INSERT INTO f_financeiro (
          titulo, natureza, razao, data, valor, tipo, fk_centro_de_custo_id, fk_forma_de_pagamento_id, usuario_id
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
      `;
      const values = [
        titulo,
        natureza,
        razao,
        dataMov,
        valor,
        tipo,
        fks.fk_centro_de_custo_id,
        fks.fk_forma_de_pagamento_id,
        1 // Aqui você pode adicionar o ID do usuário se necessário
      ];

      connection.query(query, values, (err, financialResult) => {
        if (err) {
          return reject(err); // Rejeita a Promise em caso de erro
        }

        resolve({ message: 'Movimentação financeira inserida com sucesso!' }); // Resolve a Promise com o resultado do INSERT
      });
    } catch (error) {
      console.error('Erro ao inserir movimentação financeira:', error);
      reject(error); // Rejeita a Promise se houver um erro
    }
  });
};


exports.update = (id, membro) => {
  return new Promise((resolve, reject) => {
    // Verifica se os valores do plano e pagamento são válidos
    const planoId = PlanoAssinaturaEnum[membro.Plano];
    const formaPagamentoId = FormaPagamentoEnum[membro.pagamento];

    if (!planoId || !formaPagamentoId) {
      return reject(new Error("Plano ou forma de pagamento inválidos!"));
    }

    // Query para atualizar os dados do membro com base no ID
    const SQL_UPDATE_MEMBER = `
      UPDATE f_membros 
      SET 
        nome = ?, 
        cpf = ?, 
        endereco = ?, 
        data_nascimento = ?,
        sexo = ?, 
        fk_plano_assinatura_id = ?, 
        fk_forma_de_pagamento_id = ?, 
        status = ? 
      WHERE id = ?;
    `;

    const values = [
      membro.Nome,
      membro.CPF,
      membro.Endereco,
      membro.dataNascimento,
      membro.sexo,
      planoId, // fk_plano_assinatura_id
      formaPagamentoId, // fk_forma_de_pagamento_id
      membro.status,
      id, // ID do membro a ser atualizado
    ];
    console.log(values)
    console.log(membro)
    connection.query(SQL_UPDATE_MEMBER, values, (err, result) => {
      if (err) {
        return reject(err); // Rejeita a Promise em caso de erro
      }
      resolve(result); // Resolve a Promise com o resultado do UPDATE
    });
  });
};

exports.delete = (id) => {
  return new Promise((resolve, reject) => {
    
    // Query para atualizar os dados do membro com base no ID
    const SQL_UPDATE_MEMBER = `
      CALL DeleteMembro(?);
    `;

    const values = [
      id, // ID do membro a ser deletado
    ];
    connection.query(SQL_UPDATE_MEMBER, values, (err, result) => {
      if (err) {
        return reject(err); // Rejeita a Promise em caso de erro
      }
      resolve(result); // Resolve a Promise com o resultado do UPDATE
    });
  });
};
