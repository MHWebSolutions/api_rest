import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

routes.get('/', AlunoController.index);
routes.get('/:id', loginRequired, AlunoController.show);
routes.post('/', loginRequired, AlunoController.store);
routes.put('/:id', loginRequired, AlunoController.update);
routes.delete('/:id', loginRequired, AlunoController.delete);

export default routes;
