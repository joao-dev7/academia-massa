const membrosModel = require('../models/membersModel');
const { format } = require('date-fns');

exports.getAll = async (req, res) => {
  try {
    const results = await membrosModel.getAll();
    const membros = results.map((membro) => ({
      id: membro.id,
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

exports.getPorNome = async (req, res) => {
    try {
        const nome = req.params.nome; // Obtém o parâmetro 'nome' da URL
        const results = await membrosModel.getPorNome(nome); // Passa 'nome' para o modelo
        const membros = results.map((membro) => ({
            id: membro.id,
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
      } catch (error) {
        console.error('Erro ao buscar membros por nome:', error);
        res.status(500).send('Erro ao buscar membros'); // Retorna erro caso algo dê errado
    }
};

exports.create = async (req, res) => {
    try {
        console.log(req.body);
        const result = await membrosModel.create(req.body);
        res.status(200).json({ message: "Membro criado com sucesso", result });
      } catch (error) {
        console.error('Erro ao criar membro:', error);
        res.status(500).json({ message: 'Erro ao criar membro', error });
      }
};

exports.update = async (req, res) => {
    const { id } = req.params; // ID do membro na URL
    const membro = req.body; // Dados do membro enviados no body da requisição

    try {
        const result = await membrosModel.update(id, membro);
        res.status(200).json({ message: "Membro atualizado com sucesso", result });
    } catch (error) {
        console.error("Erro ao atualizar membro:", error);
        res.status(500).json({ error: error.message });
    }
};

exports.delete = async (req, res) => {
    const { id } = req.params; // ID do membro na URL

    try {
        const result = await membrosModel.delete(id);
        res.status(200).json({ message: "Membro deletado com sucesso", result });
    } catch (error) {
        console.error("Erro ao deletar membro:", error);
        res.status(500).json({ error: error.message });
    }
};
