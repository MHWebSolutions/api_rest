"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async create(req, res) {
    try {
      const newUser = await _User2.default.create(req.body);
      const { id, nome, email } = newUser;
      return res.json({ id, nome, email });
    } catch (e) { return res.status(400).json({ errors: e.errors.map(err => err.message) }); }
  }

  async index(req, res) {
    try {
      const user = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(user);
    } catch (e) { return res.json(null); }
  }

  async show(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) { return res.json({ mensagem: 'ID inválido,use a rota padrão para ver todos os usuários' }); }
  }

  async update(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: 'ID inválido',
        });
      }
      console.log(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: 'Usuário inválido',
        });
      }
      const newData = await user.update(req.body);
      const { id, nome, email } = newData;
      return res.json({ id, nome, email });
    } catch (e) { return res.status(400).json({ errors: e.errors.map(err => err.message) }); }
  }

  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: 'ID inválido',
        });
      }

      if (!user) {
        return res.status(400).json({
          errors: 'Usuário inválido',
        });
      }
      await user.destroy();
      return res.json({
        mensagem: 'Usuário deletado',
      });
    } catch (e) { return res.status(400).json({ errors: e.errors.map(err => err.message) }); }
  }
}

exports. default = new UserController();
