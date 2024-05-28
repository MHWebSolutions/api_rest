import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorized } = req.headers;
  if (!authorized) {
    return res.status(401).json({
      errors: ['É necessário fazer login,caralho'],
    });
  }

  const [, token] = authorized.split(' ');

  try {
    const { id, email } = jwt.verify(token, process.env.TOKEN_SECRET);

    const user = await User.findOne({ where: { id, email } });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválidado'],
      });
    }
    req.userId = id;
    req.userEmail = email;
    next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
