const connection = require('../config/database');

exports.getAll = () => {
  return new Promise((resolve, reject) => {
    const SQL_TRAINING = `
      SELECT 
        ft.id AS id,
        dg.descricao AS 'Grupo', 
        dt.descricao_treino AS 'Treino', 
        ft.serie AS 'Serie', 
        ft.progressao AS 'Progressão'
      FROM 
          f_treinos ft
      JOIN 
          dim_treinos dt ON ft.fk_treino_id = dt.id
      JOIN 
          dim_grupos dg ON dt.fk_grupo_id = dg.id;
    `;

    connection.query(SQL_TRAINING, (err, results) => {
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
      const SQL_TRAINING = `
          SELECT 
              ft.id AS id,
              dg.descricao AS 'Grupo', 
              dt.descricao_treino AS 'Treino', 
              ft.serie AS 'Serie', 
              ft.progressao AS 'Progressão'
          FROM 
              f_treinos ft
          JOIN 
              dim_treinos dt ON ft.fk_treino_id = dt.id
          JOIN 
              dim_grupos dg ON dt.fk_grupo_id = dg.id
          WHERE 
            dt.descricao_treino LIKE  ?;
      `;
  
      connection.query(SQL_TRAINING, [`%${nome}%`], (err, results) => {
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
          titulo, natureza, razao, data, valor, tipo, fk_centro_de_custo_id, fk_forma_de_pagamento_id
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?);
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
        // Adicionar o ID do usuário se necessário / usuario_id no banco
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
  

exports.update = (id, training) => {
  return new Promise((resolve, reject) => {
    console.log('Data training', training)
    // Query para atualizar os dados do training com base no ID
    const SQL_UPDATE_TRAINING = `
      UPDATE f_treinos ft
      JOIN dim_treinos dt ON ft.fk_treino_id = dt.id
      JOIN dim_grupos dg ON dt.fk_grupo_id = dg.id
      SET 
          ft.serie = ?, 
          ft.progressao = ?, 
          ft.fk_treino_id = (SELECT id FROM dim_treinos WHERE descricao_treino = ? LIMIT 1)
      WHERE 
          ft.id = ?;
    `;

    const values = [
      training.Serie,
      training["Progressão"],
      training.Treino,
      id,
    ];
    console.log(values)
    console.log(training)
    connection.query(SQL_UPDATE_TRAINING, values, (err, result) => {
      if (err) {
        return reject(err); // Rejeita a Promise em caso de erro
      }
      resolve(result); // Resolve a Promise com o resultado do UPDATE
    });
  });
};

exports.delete = (id) => {
  return new Promise((resolve, reject) => {
    
    // Query para atualizar os dados do staff com base no ID
    const SQL_UPDATE_TRAINING = `
      CALL DeleteTreino(?);
    `;

    const values = [
      id, // ID do treino a ser deletado
    ];
    connection.query(SQL_UPDATE_TRAINING, values, (err, result) => {
      if (err) {
        return reject(err); // Rejeita a Promise em caso de erro
      }
      resolve(result); // Resolve a Promise com o resultado do UPDATE
    });
  });
};
