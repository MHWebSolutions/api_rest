"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AlunoController = require('../controllers/AlunoController'); var _AlunoController2 = _interopRequireDefault(_AlunoController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const routes = new (0, _express.Router)();

routes.get('/', _AlunoController2.default.index);
routes.get('/:id', _loginRequired2.default, _AlunoController2.default.show);
routes.post('/', _loginRequired2.default, _AlunoController2.default.store);
routes.put('/:id', _loginRequired2.default, _AlunoController2.default.update);
routes.delete('/:id', _loginRequired2.default, _AlunoController2.default.delete);

exports. default = routes;
