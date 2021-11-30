import { Router } from 'express';
import { privateRoute } from '../config/passport';
import * as TodoController from '../controllers/todoController';
import * as UserController from '../controllers/userController';

const router = Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);

router.get('/todo', privateRoute, TodoController.getAll);
router.get('/todo/:id', privateRoute, TodoController.getOne);
router.post('/todo', privateRoute, TodoController.store);
router.put('/todo/:id', privateRoute, TodoController.update);
router.delete('/todo/:id', privateRoute, TodoController.remove);

export default router;