const connection = require('../config/database');

const PlanoAssinaturaEnum = {
  Mensal: 1,
  Trimestral: 2,
  Semestral: 3,
  Anual: 4,
};

const FormaPagamentoEnum = {
  "Cartão de Crédito": 1,
  "Boleto Bancário": 2,
  "Transferência Bancária": 3,
  Pix: 4,
  Dinheiro: 5,
};

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
          dcc.centro_custo AS "Centro de Custo"
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
          dcc.centro_custo AS "Centro de Custo"
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

exports.create = (membro) => {
  return new Promise((resolve, reject) => {

    const planoId = PlanoAssinaturaEnum[membro.Plano];
    const formaPagamentoId = FormaPagamentoEnum[membro.pagamento];

    if (!planoId || !formaPagamentoId) {
      return reject(new Error("Plano ou forma de pagamento inválidos!"));
    }

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
