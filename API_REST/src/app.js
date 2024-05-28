import dotenv from 'dotenv';

dotenv.config();

import './database';
import express from 'express';
import path, { resolve } from 'path';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes/homeRouter';
import Userroutes from './routes/UserRouter';
import TokenRouter from './routes/TokenRouter';
import AlunoRouter from './routes/AlunoRouter';
import FotoRouter from './routes/FotoRouter';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(path.resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', routes);
    this.app.use('/users', Userroutes);
    this.app.use('/Token', TokenRouter);
    this.app.use('/alunos', AlunoRouter);
    this.app.use('/fotos', FotoRouter);
  }
}

export default new App().app;
