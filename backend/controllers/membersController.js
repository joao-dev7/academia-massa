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
    try {
        console.log(req.body);
        const result = await membrosModel.createMembro(req.body);
        res.status(200).json({ message: "Membro criado com sucesso", result });
      } catch (error) {
        console.error('Erro ao criar membro:', error);
        res.status(500).json({ message: 'Erro ao criar membro', error });
      }
};

exports.updateMembro = async (req, res) => {
    const { id } = req.params; // ID do membro na URL
    const membro = req.body; // Dados do membro enviados no body da requisição
  
    try {
      const result = await membrosModel.updateMembro(id, membro);
      res.status(200).json({ message: "Membro atualizado com sucesso", result });
    } catch (error) {
      console.error("Erro ao atualizar membro:", error);
      res.status(500).json({ error: error.message });
    }
  };

exports.deleteMembro = async (req, res) => {
  // Implementar lógica para deletar membro
};
