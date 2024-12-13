const connection = require('../config/database');

exports.getAll = () => {
  return new Promise((resolve, reject) => {
    const SQL_TRAINING = `
      SELECT 
        "treinos" AS tabela,
          f.id AS "ID",
          f.descricao_treino AS "Descricao do treino",
          f.fk_grupo_id AS "Grupo",
      FROM 
          f_treinos f
      JOIN 
          dim_centro_custo dcc ON f.fk_centro_de_custo_id = dcc.id
      JOIN 
          dim_forma_pagamento dfp ON f.fk_forma_de_pagamento_id = dfp.id;
        
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
          "treinos" AS tabela,
          f.id AS "ID",
          f.descricao_treino AS "Descricao do treino",
          f.fk_grupo_id AS "Grupo",
        FROM 
            f_treinos f
        JOIN 
            dim_centro_custo dcc ON f.fk_centro_de_custo_id = dcc.id
        JOIN 
            dim_forma_pagamento dfp ON f.fk_forma_de_pagamento_id = dfp.id
        WHERE
              f.titulo  LIKE ?
          ;
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

exports.create = (membro) => {
  return new Promise((resolve, reject) => {

    const nomeParts = membro.Nome.split(' '); // Divide o nome por espaços
    const email =
      nomeParts.length > 1
        ? `${nomeParts[0].toLowerCase()}.${nomeParts[1].toLowerCase()}@academiaMassa.com`
        : `${nomeParts[0].toLowerCase()}@academiaMassa.com`;
  
    //TODO - melhoria - validar se já tem um usuario com esse email.
    // Inserir um novo usuário
    const SQL_INSERT_USER = `
      INSERT INTO usuarios (email, senha, tipo_acesso)
      VALUES (?, 'senha123', 'Membro');
    `;
  
    connection.query(SQL_INSERT_USER, [email], (err, userResult) => {
      if (err) {
        return reject(err); // Rejeita a Promise em caso de erro
      }

      // Recuperar o ID do usuário criado
      const usuarioId = userResult.insertId;

      // Inserir o novo membro utilizando o ID do usuário
      const SQL_INSERT_MEMBER = `
        INSERT INTO f_membros 
        (nome, cpf, endereco, data_nascimento, email, sexo, fk_plano_assinatura_id, fk_forma_de_pagamento_id, status, usuario_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
      `;

      const values = [
        membro.Nome,
        membro.CPF,
        membro.Endereco,
        membro.dataNascimento,
        email,
        membro.sexo,
        planoId, // fk_plano_assinatura_id
        formaPagamentoId, // fk_forma_de_pagamento_id
        membro.status,
        usuarioId, // ID do usuário gerado
      ];

      connection.query(SQL_INSERT_MEMBER, values, (err, memberResult) => {
        if (err) {
          return reject(err); // Rejeita a Promise em caso de erro
        }

        resolve(memberResult); // Resolve a Promise com o resultado do INSERT do membro
      });
    });
  });
};
  

exports.update = (id, training) => {
  return new Promise((resolve, reject) => {
    // Query para atualizar os dados do training com base no ID
    const SQL_UPDATE_TRAINING = `
      UPDATE f_treinos
      SET 
        id = ?, 
        descricao_treino = ?, 
        fk_grupo_id = ?, 
      WHERE id = ?;
    `;

    const values = [
      training.id,
      training.descricao_treino,
      training.fk_grupo_id,
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
