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

    // Recuperando o usuário do localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    let userId 
    if (user && user.id) {
        userId = user.id;
        console.log('O ID do usuário é:', userId);
    } else {
        throw new Error('Usuário não encontrado no localStorage ou ID ausente.');
    }

    const { cpf, cargo, endereco, nome, salario, data: dataNas, sexo, status } = data;
    try {
      const query = `
        INSERT INTO 
          f_colaboradores (nome, cpf, cargo, salario, endereco, data_nascimento, sexo, status, fk_usuario_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
      `;
      const values = [
        cpf, 
        cargo, 
        endereco, 
        nome, 
        salario, 
        dataNas, 
        sexo, 
        status,
        userId
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
      salario = ?
    WHERE 
      id = ?
    `;

    const values = [
      staff.id,
      staff.nome,
      staff.cpf,
      staff.cargo,
      staff.salario,
    ];
    console.log(values)
    console.log(staff)
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
