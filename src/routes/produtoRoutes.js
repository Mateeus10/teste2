import Router from 'express';

import produtoController from '../controllers/ProdutoController';
import loginRequired from '../middlewares/loginRequired.js';

const route = Router();

route.get('/', produtoController.index);
route.get('/:id', produtoController.show);
route.post('/', loginRequired, produtoController.store);
route.put('/:id', loginRequired, produtoController.update);
route.delete('/:id', loginRequired, produtoController.delete);

export default route;
