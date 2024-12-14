const express = require('express');
const router = express.Router();
const connection = require('../config/database'); // Conexão com o banco

router.post('/', (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    console.log(email, password)
    // Query para consultar o usuário no banco
    const query = `
        SELECT id, email, tipo_acesso AS tag 
        FROM usuarios 
        WHERE email = ? AND senha = ?;
    `;

    connection.query(query, [email, password], (err, results) => {
        if (err) {
            console.error("Erro na consulta:", err);
            return res.status(500).json({ message: "Erro interno no servidor." });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: "Credenciais inválidas." });
        }
        console.log('TESTE1',results)
        const user = {
            id: results[0].id,
            name: results[0].email,
            tag: results[0].tag
        };

        res.status(200).json(user);
    });
});

module.exports = router;