import { Router } from 'express';
import userController from '../controllers/UserController.js';
import loginrequired from '../middlewares/loginRequired.js';

const route = new Router();

//route.get('/', userController.index);
//route.get('/:id', userController.show);

route.post('/', userController.store);
route.put('/:id', loginrequired, userController.update);
route.delete('/:id', loginrequired, userController.delete);

export default route;
