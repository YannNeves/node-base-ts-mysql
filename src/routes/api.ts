import { Router } from 'express';
import { privateRoute } from '../config/passport';
import * as TodoController from '../controllers/todoController';
import * as ApiController from '../controllers/apiController';

const router = Router();

router.post('/register', ApiController.register);
router.post('/login', ApiController.login);

router.get('/todo', privateRoute, TodoController.getAll);
router.get('/todo/:id', privateRoute, TodoController.getOne);
router.post('/todo', privateRoute, TodoController.store);
router.put('/todo/:id', privateRoute, TodoController.update);
router.delete('/todo/:id', privateRoute, TodoController.remove);

export default router;