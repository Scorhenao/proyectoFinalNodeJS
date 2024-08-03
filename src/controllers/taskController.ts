// src/controllers/ProductController.ts
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import TaskService from '../services/taskService';

export default class TaskController {
    static async getAllTasks(req: Request, res: Response) {
        const taskService = container.resolve(TaskService);
        const tasks = await taskService.getAllTasks();
        res.json(tasks);
    }

    static async getTaskById(req: Request, res: Response) {
        const taskService = container.resolve(TaskService);
        const task = await taskService.getTaskById(parseInt(req.params.id));
        res.json(task);
    }

    static async getTasksByUserId(req: Request, res: Response) {
        const taskService = container.resolve(TaskService);
        const tasks = await taskService.getTasksByUserId(parseInt(req.params.userId)); 
        res.json(tasks);
    }

    static async createTask(req: Request, res: Response) {
        const taskService = container.resolve(TaskService);
        const task = await taskService.createProduct(req.body);
        
        // const dataTask = req.body
        // const dataTaskObject = JSON.stringify(dataTask)
        // console.log(dataTaskObject);
        res.status(201).json(task);
    }
}