const financialModel = require('../models/financialModel');
const { format } = require('date-fns');

exports.getAll = async (req, res) => {
  try {
    const results = await financialModel.getAll();
    const financeiro = results.map((entry) => ({
      ...entry, // Repassa os campos diretamente do resultado
      Data: format(entry.Data, 'dd/MM/yyyy'), // Apenas formata a data
      Valor: parseFloat(entry.Valor).toFixed(2), // Formata o valor com 2 casas decimais
    }));
    res.json(financeiro);
  } catch (err) {
    console.error('Erro ao buscar financial:', err);
    res.status(500).send('Erro ao buscar financial');
  }
};

exports.getPorNome = async (req, res) => {
    try {
        const nome = req.params.nome; // Obtém o parâmetro 'nome' da URL
        const results = await financialModel.getPorNome(nome); // Passa 'nome' para o modelo
        const financeiro = results.map((entry) => ({
          ...entry, // Repassa os campos diretamente do resultado
          Data: format(entry.Data, 'dd/MM/yyyy'), // Apenas formata a data
          Valor: parseFloat(entry.Valor).toFixed(2), // Formata o valor com 2 casas decimais
        }));
        res.json(financeiro);
      } catch (error) {
        console.error('Erro ao buscar financeiro por titulo:', error);
        res.status(500).send('Erro ao buscar financeiro por titulo'); // Retorna erro caso algo dê errado
    }
};

exports.create = async (req, res) => {
    try {
        console.log(req.body);
        const result = await financialModel.create(req.body);
        res.status(200).json({ message: "Financial criado com sucesso", result });
      } catch (error) {
        console.error('Erro ao criar Financial:', error);
        res.status(500).json({ message: 'Erro ao criar Financial', error });
      }
};

exports.update = async (req, res) => {
    const { id } = req.params; // ID do membro na URL
    const membro = req.body; // Dados do membro enviados no body da requisição

    try {
        const result = await financialModel.update(id, membro);
        res.status(200).json({ message: "Financial atualizado com sucesso", result });
    } catch (error) {
        console.error("Erro ao atualizar financial:", error);
        res.status(500).json({ error: error.message });
    }
};

exports.delete = async (req, res) => {
    const { id } = req.params; // ID do membro na URL

    try {
        const result = await financialModel.delete(id);
    } catch (error) {
        console.error("Erro ao deletar financeiro:", error);
        res.status(500).json({ error: error.message });
    }
};
