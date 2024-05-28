import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
      const { id, nome, email } = newUser;
      return res.json({ id, nome, email });
    } catch (e) { return res.status(400).json({ errors: e.errors.map(err => err.message) }); }
  }

  async index(req, res) {
    try {
      const user = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(user);
    } catch (e) { return res.json(null); }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) { return res.json({ mensagem: 'ID inválido,use a rota padrão para ver todos os usuários' }); }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
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
      const user = await User.findByPk(req.userId);
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

export default new UserController();
