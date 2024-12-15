const { query } = require('express');
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
    const SQL_MEMBERS = `
      SELECT 
        f_membros.id as id,
        nome,
        cpf, 
        dim_pa.plano_assinatura AS plano, 
        endereco,
        data_nascimento,
        sexo,
        status,
        dim_fp.forma_pagamento AS pagamento,
        status_financeiro
      FROM 
        f_membros
      JOIN
        dim_forma_pagamento dim_fp ON (dim_fp.id = f_membros.fk_forma_de_pagamento_id)
      JOIN 
        dim_plano_assinatura dim_pa ON (dim_pa.id = f_membros.fk_plano_assinatura_id);
    `;

    connection.query(SQL_MEMBERS, (err, results) => {
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
      const SQL_MEMBERS = `
        SELECT 
          f_membros.id as id,
          nome, 
          cpf, 
          dim_pa.plano_assinatura AS plano, 
          endereco,
          data_nascimento,
          sexo,
          status,
          dim_fp.forma_pagamento AS pagamento,
          status_financeiro
        FROM 
          f_membros
        JOIN
          dim_forma_pagamento dim_fp ON (dim_fp.id = f_membros.fk_forma_de_pagamento_id)
        JOIN 
          dim_plano_assinatura dim_pa ON (dim_pa.id = f_membros.fk_plano_assinatura_id)
        WHERE
            nome LIKE ?  
          ;
      `;
  
      connection.query(SQL_MEMBERS, [`%${nome}%`], (err, results) => {
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
    const query = `
      CALL DeleteMembro(?);
    `;

    const values = [
      id, // ID do membro a ser deletado
    ];
    connection.query(query, values, (err, result) => {
      if (err) {
        return reject(err); // Rejeita a Promise em caso de erro
      }
      resolve(result); // Resolve a Promise com o resultado do UPDATE
    });
  });
};
