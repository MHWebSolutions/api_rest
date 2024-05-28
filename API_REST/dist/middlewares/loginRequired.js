"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

exports. default = async (req, res, next) => {
  const { authorized } = req.headers;
  if (!authorized) {
    return res.status(401).json({
      errors: ['É necessário fazer login,caralho'],
    });
  }

  const [, token] = authorized.split(' ');

  try {
    const { id, email } = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);

    const user = await _User2.default.findOne({ where: { id, email } });

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
