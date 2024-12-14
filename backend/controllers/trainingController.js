const trainingModel = require('../models/trainingModel');
const { format } = require('date-fns');

exports.getAll = async (req, res) => {
  try {
    const results = await trainingModel.getAll();
    const training = results.map((entry) => ({
      ...entry, // Repassa os campos diretamente do resultado
    }));
    res.json(training);
  } catch (err) {
    console.error('Erro ao buscar training:', err);
    res.status(500).send('Erro ao buscar training');
  }
};

exports.getPorNome = async (req, res) => {
    try {
        const nome = req.params.nome; // Obtém o parâmetro 'nome' da URL
        const results = await trainingModel.getPorNome(nome); // Passa 'nome' para o modelo
        const training = results.map((entry) => ({
          ...entry, // Repassa os campos diretamente do resultado
        }));
        res.json(training);
      } catch (error) {
        console.error('Erro ao buscar trainings por nome:', error);
        res.status(500).send('Erro ao buscar training por nome'); // Retorna erro caso algo dê errado
    }
};

exports.create = async (req, res) => {
    try {
        console.log(req.body);
        const result = await trainingModel.create(req.body);
        res.status(200).json({ message: "Training criado com sucesso", result });
      } catch (error) {
        console.error('Erro ao criar training:', error);
        res.status(500).json({ message: 'Erro ao criar training', error });
      }
};

exports.update = async (req, res) => {
    const { id } = req.params; // ID do training na URL
    const training = req.body; // Dados do training enviados no body da requisição

    try {
        const result = await trainingModel.update(id, training);
        res.status(200).json({ message: "Training atualizado com sucesso", result });
    } catch (error) {
        console.error("Erro ao atualizar training:", error);
        res.status(500).json({ error: error.message });
    }
};

exports.delete = async (req, res) => {
    const { id } = req.params; // ID do training na URL

    try {
        const result = await trainingModel.delete(id);
        res.status(200).json({ message: "Treino deletado com sucesso", result });
    } catch (error) {
        console.error("Erro ao deletar training:", error);
        res.status(500).json({ error: error.message });
    }
};
