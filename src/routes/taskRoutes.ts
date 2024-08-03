import { Router } from 'express';
import TaskController from '../controllers/taskController';

export const taskRouter = Router();

taskRouter.get('/', TaskController.getAllTasks);
taskRouter.get('/:id', TaskController.getTaskById);
taskRouter.get('/user/:userId', TaskController.getTasksByUserId);
taskRouter.post('/', TaskController.createTask);