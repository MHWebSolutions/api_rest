"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);

_dotenv2.default.config();

require('./database');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);
// import helmet from 'helmet';
var _homeRouter = require('./routes/homeRouter'); var _homeRouter2 = _interopRequireDefault(_homeRouter);
var _UserRouter = require('./routes/UserRouter'); var _UserRouter2 = _interopRequireDefault(_UserRouter);
var _TokenRouter = require('./routes/TokenRouter'); var _TokenRouter2 = _interopRequireDefault(_TokenRouter);
var _AlunoRouter = require('./routes/AlunoRouter'); var _AlunoRouter2 = _interopRequireDefault(_AlunoRouter);
var _FotoRouter = require('./routes/FotoRouter'); var _FotoRouter2 = _interopRequireDefault(_FotoRouter);

const whiteList = [
  'https://master.dy5trvb93m8oj.amplifyapp.com',
  'http://localhost:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, corsOptions));
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use('/images/', _express2.default.static(_path2.default.resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', _homeRouter2.default);
    this.app.use('/users', _UserRouter2.default);
    this.app.use('/Token', _TokenRouter2.default);
    this.app.use('/alunos', _AlunoRouter2.default);
    this.app.use('/fotos', _FotoRouter2.default);
  }
}

exports. default = new App().app;
