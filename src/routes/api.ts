import { Router } from 'express';

import * as TodoController from '../controllers/todoController';

const router = Router();

router.get('/todo', TodoController.getAll);
router.get('/todo/:id', TodoController.getOne);
router.post('/todo', TodoController.store);
router.put('/todo/:id', TodoController.update);
router.delete('/todo/:id', TodoController.remove);

export default router;