const express = require('express');
const cors = require('cors');
const membrosRoutes = require('./routes/members');
const financeiroRoutes = require('./routes/financial')
const colaboradoresRoutes = require('./routes/staff')
const treinosRoutes = require('./routes/training')

const app = express();
const PORT = 3001;

// Configuração do CORS
app.use(cors());
// Middleware para permitir o recebimento de JSON
app.use(express.json());

// Rotas
app.use('/membros', membrosRoutes);
app.use('/financeiro', financeiroRoutes);
app.use('/colaboradores', colaboradoresRoutes);
app.use('/treinos', treinosRoutes);



// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});