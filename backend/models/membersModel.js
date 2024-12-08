const connection = require('../config/database');

exports.getAllMembros = () => {
  return new Promise((resolve, reject) => {
    const SQL_MEMBERS = `
      SELECT 
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


exports.getMembrosPorNome = (nome) => {
    return new Promise((resolve, reject) => {
      const SQL_MEMBERS = `
        SELECT 
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

exports.updateMembros = (membro) => {
  return new Promise((resolve, reject) => {
    const SQL_MEMBERS = `
      INSERT INTO  f_membros (nome, 
        cpf, 
        dim_pa.plano_assinatura AS plano, 
        endereco,
        data_nascimento,
        sexo,
        status,
        dim_fp.forma_pagamento AS pagamento,
        status_financeiro)
      VALUES
      ('TESTE', '12345678901', 'Rua A, 123', '1980-05-15', 'maria@email.com', 'FEMININO', 1, 1, 'ATIVO', 1),
        ;
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
