"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

class AlunoController {
  async store(req, res) {
    try {
      const newAluno = await _Aluno2.default.create(req.body);
      return res.json(newAluno);
    } catch (e) { e.errors.map(err => err.message); }
  }

  async index(req, res) {
    try {
      const alunos = await _Aluno2.default.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
        include: {
          model: _Foto2.default,
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
      const aluno = await _Aluno2.default.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
        include: {
          model: _Foto2.default,
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
      const aluno = await _Aluno2.default.findByPk(req.params.id);
      if (!aluno) {
        return res.status(400).json({ mensagem: 'Usuário inexistente' });
      }
      const newAluno = await aluno.update(req.body);
      return res.json(newAluno);
    } catch (e) { e.errors.map(err => err.message); }
  }

  async delete(req, res) {
    try {
      const aluno = await _Aluno2.default.findByPk(req.params.id);
      if (!aluno) {
        return res.status(400).json({ mensagem: 'Aluno inexistente' });
      }

      await aluno.destroy();
      return res.json({ mensagem: 'Aluno deletado com sucesso' });
    } catch (e) { e.errors.map(err => err.message); }
  }
}

exports. default = new AlunoController();
