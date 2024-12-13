const staffModel = require('../models/staffModel');
const { format } = require('date-fns');

exports.getAll = async (req, res) => {
  try {
    const results = await staffModel.getAll();
    const financeiro = results.map((entry) => ({
      ...entry, // Repassa os campos diretamente do resultado
      Data: format(entry.Data, 'dd/MM/yyyy'), // Apenas formata a data
      Valor: parseFloat(entry.Valor).toFixed(2), // Formata o valor com 2 casas decimais
    }));
    res.json(financeiro);
  } catch (err) {
    console.error('Erro ao buscar staff:', err);
    res.status(500).send('Erro ao buscar staff');
  }
};

exports.getPorNome = async (req, res) => {
    try {
        const nome = req.params.nome; // Obtém o parâmetro 'nome' da URL
        const results = await staffModel.getPorNome(nome); // Passa 'nome' para o modelo
        const staff = results.map((entry) => ({
          ...entry, // Repassa os campos diretamente do resultado
          Data: format(entry.Data, 'dd/MM/yyyy'), // Apenas formata a data
          Valor: parseFloat(entry.Valor).toFixed(2), // Formata o valor com 2 casas decimais
        }));
        res.json(staff);
      } catch (error) {
        console.error('Erro ao buscar staff nome:', error);
        res.status(500).send('Erro ao buscar staffs nome'); // Retorna erro caso algo dê errado
    }
};

exports.create = async (req, res) => {
    try {
        console.log(req.body);
        const result = await staffModel.create(req.body);
        res.status(200).json({ message: "Staff criado com sucesso", result });
      } catch (error) {
        console.error('Erro ao criar staff:', error);
        res.status(500).json({ message: 'Erro ao criar staff', error });
      }
};

exports.update = async (req, res) => {
    const { id } = req.params; // ID do staff na URL
    const staff = req.body; // Dados do staff enviados no body da requisição

    try {
        const result = await staffModel.update(id, staff);
        res.status(200).json({ message: "Staff atualizado com sucesso", result });
    } catch (error) {
        console.error("Erro ao atualizar staff:", error);
        res.status(500).json({ error: error.message });
    }
};

exports.delete = async (req, res) => {
    const { id } = req.params; // ID do membro na URL

    try {
        const result = await staffModel.delete(id);
    } catch (error) {
        console.error("Erro ao deletar staff:", error);
        res.status(500).json({ error: error.message });
    }
};
