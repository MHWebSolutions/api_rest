import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async store(req, res) {
    try {
      const newAluno = await Aluno.create(req.body);
      return res.json(newAluno);
    } catch (e) { e.errors.map(err => err.message); }
  }

  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url', 'filename'],
        },
      });
      if (!alunos) {
        return res.status(400).json({ mensagem: 'Alunos não encontrados.' });
      }
      res.json(alunos);
    } catch (e) { res.json(null); }
  }

  async show(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url', 'filename'],
        },
      });
      if (!aluno) {
        return res.status(400).json({ mensagem: 'Aluno inexistente' });
      }
      return res.json(aluno);
    } catch (e) { res.status(400).json({ mensagem: 'rota para usuário inválida,usar a função index para listar todos os usuários' }); }
  }

  async update(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        return res.status(400).json({ mensagem: 'Usuário inexistente' });
      }
      const newAluno = await aluno.update(req.body);
      return res.json(newAluno);
    } catch (e) { e.errors.map(err => err.message); }
  }

  async delete(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        return res.status(400).json({ mensagem: 'Aluno inexistente' });
      }

      await aluno.destroy();
      return res.json({ mensagem: 'Aluno deletado com sucesso' });
    } catch (e) { e.errors.map(err => err.message); }
  }
}

export default new AlunoController();
