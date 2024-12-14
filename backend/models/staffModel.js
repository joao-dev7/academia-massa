const connection = require('../config/database');


exports.getAll = () => {
  return new Promise((resolve, reject) => {
    const SQL_STAFF = `
      SELECT 
        id,
        nome AS 'Nome',
        cpf AS 'CPF',
        IFNULL(endereco, 'N/A') AS 'endereco',
        data_nascimento AS 'dataNascimento',
        IFNULL(sexo, 'N/A') AS 'sexo',
        cargo AS 'Cargo',
        FORMAT(salario, 2) AS 'Salário',
        IFNULL(status, 'N/A') AS 'status'
      FROM 
        f_colaboradores;
    `;

    connection.query(SQL_STAFF, (err, results) => {
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
      const SQL_STAFF = `
        SELECT 
          id,
          nome AS 'Nome',
          cpf AS 'CPF',
          IFNULL(endereco, 'N/A') AS 'endereco',
          data_nascimento AS 'dataNascimento',
          IFNULL(sexo, 'N/A') AS 'sexo',
          cargo AS 'Cargo',
          FORMAT(salario, 2) AS 'Salário',
          IFNULL(status, 'N/A') AS 'status'
        FROM 
          f_colaboradores
        WHERE 
          nome LIKE ? ;
      `;
  
      connection.query(SQL_STAFF, [`%${nome}%`], (err, results) => {
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
    try {
      const query = `
        INSERT INTO 
          f_colaboradores (nome, cpf, cargo, salario, endereco, data_nascimento, sexo, status, fk_usuario_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
      `;
      const values = [
        data.Nome, 
        data.CPF, 
        data.Cargo, 
        data['Salário'],
        data.Endereco,
        data.dataNascimento, 
        data.sexo, 
        data.status,
        data.userId
      ];
      
      connection.query(query, values, (err, financialResult) => {
        if (err) {
          return reject(err); // Rejeita a Promise em caso de erro
        }

        resolve({ message: 'Colaborador inserido com sucesso!' }); // Resolve a Promise com o resultado do INSERT
      });
    } catch (error) {
      console.error('Erro ao inserir colaborador:', error);
      reject(error); // Rejeita a Promise se houver um erro
    }
  });
};

exports.update = (id, staff) => {
  return new Promise((resolve, reject) => {
    // Query para atualizar os dados do staff com base no ID
    const query = `
    UPDATE f_colaboradores
    SET 
      nome = ?,
      cpf = ?,
      cargo = ?,
      salario = ?,
      endereco = ?,
      data_nascimento = ?,
      sexo = ?,
      status = ?
    WHERE 
      id = ?
    `;

    const values = [
      staff.Nome,
      staff.CPF,
      staff.Cargo,
      staff['Salário'],
      staff.Endereco,
      staff.dataNascimento,
      staff.sexo,
      staff.status,
      id
    ];
    
    connection.query(query, values, (err, result) => {
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
    const query = `
      DELETE 
        FROM f_colaboradores 
      WHERE 
        id = ?;
    `;

    const values = [
      id, // ID do staff a ser deletado
    ];
    connection.query(query, values, (err, result) => {
      if (err) {
        return reject(err); // Rejeita a Promise em caso de erro
      }
      resolve(result); // Resolve a Promise com o resultado do UPDATE
    });
  });
};
