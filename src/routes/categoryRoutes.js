import Router from 'express';

import categoryController from '../controllers/CategoryController';

const route = Router();

route.get('/', categoryController.index);
route.get('/:id', categoryController.show);
route.post('/', categoryController.store);
route.delete('/:id', categoryController.delete);

export default route;
