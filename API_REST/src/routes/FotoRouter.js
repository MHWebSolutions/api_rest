import { Router } from 'express';
import FotoController from '../controllers/FotoController';
import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

routes.post('/', loginRequired, FotoController.store);

export default routes;
