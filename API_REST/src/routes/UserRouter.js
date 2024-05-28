import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

routes.post('/', UserController.create);
routes.get('/', loginRequired, UserController.index);
routes.get('/:id', UserController.show);
routes.put('/', loginRequired, UserController.update);
routes.delete('/', loginRequired, UserController.delete);

export default routes;
