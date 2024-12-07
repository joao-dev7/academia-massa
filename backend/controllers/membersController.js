const membrosModel = require('../models/membersModel');
const { format } = require('date-fns');

exports.getMembros = async (req, res) => {
  try {
    const results = await membrosModel.getAllMembros();
    const membros = results.map((membro) => ({
      Nome: membro.nome,
      CPF: membro.cpf,
      Plano: membro.plano,
      Endereco: membro.endereco,
      dataNascimento: format(membro.data_nascimento, 'dd/MM/yyyy'),
      sexo: membro.sexo,
      status: membro.status,
      pagamento: membro.pagamento,
      'Status Financeiro': membro.status_financeiro,
    }));
    res.json(membros);
  } catch (err) {
    console.error('Erro ao buscar membros:', err);
    res.status(500).send('Erro ao buscar membros');
  }
};

exports.getMembrosPorNome = async (req, res) => {
    try {
        const nome = req.params.nome; // Obtém o parâmetro 'nome' da URL
        const results = await membrosModel.getMembrosPorNome(nome); // Passa 'nome' para o modelo
        res.status(200).json(results); // Retorna os resultados como JSON
      } catch (error) {
        console.error('Erro ao buscar membros por nome:', error);
        res.status(500).send('Erro ao buscar membros'); // Retorna erro caso algo dê errado
    }
};

exports.createMembro = async (req, res) => {
  // Implementar lógica para criar membro
};
exports.updateMembro = async (req, res) => {
  // Implementar lógica para atualizar membro
};
exports.deleteMembro = async (req, res) => {
  // Implementar lógica para deletar membro
};