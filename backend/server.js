const express = require('express');
const cors = require('cors');
const membrosRoutes = require('./routes/members');

const app = express();
const PORT = 3001;

// Configuração do CORS
app.use(cors());
// Middleware para permitir o recebimento de JSON
app.use(express.json());

// Rotas
app.use('/membros', membrosRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});