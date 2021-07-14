import { Router } from 'express';
import * as taskCtrl from '../controllers/tasks.controller';  

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Task endpoints
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Get all tasks
 *    tags: [Tasks]
 */
router
  .get('/', taskCtrl.getTasks)
/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: Create one task
 *    tags: [Tasks]
 */
  .post('/', taskCtrl.createTask);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: Return number of tasks
 *    tags: [Tasks]
 */
router
  .get('/count', taskCtrl.getTaskCount);

/**
 * @swagger
 * /tasks/:id:
 *  get:
 *    summary: Get task by id
 *    tags: [Tasks]
 */
router
  .get('/:id', taskCtrl.getTask)
/**
 * @swagger
 * /tasks/:id:
 *  delete:
 *    summary: Delete task by id
 *    tags: [Tasks]
 */
  .delete('/:id', taskCtrl.deleteTask)
/**
 * @swagger
 * /tasks/:id:
 *  put:
 *    summary: Update task by id
 *    tags: [Tasks]
 */
  .put('/:id', taskCtrl.updateTask);

export default router;