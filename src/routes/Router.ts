import { Router } from 'express';
import {userRouter, taskRouter} from './';

const router = Router();

router.use('/users', userRouter);
router.use('/tasks', taskRouter);

export default router;