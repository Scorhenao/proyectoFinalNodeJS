import TaskRepository from '../repositories/taskRepository';
import { CreationAttributes } from 'sequelize';
import { injectable, inject } from 'tsyringe';
import { Task } from '../models';

@injectable()
export default class TaskService {
    constructor(
        @inject(TaskRepository) private taskRepository: TaskRepository
    ) {}

    async getAllTasks() {
        return await this.taskRepository.findAll();
    }

    async getTaskById(id: number) {
        return await this.taskRepository.findById(id);
    }

    async getTasksByUserId(userId: number) {
        return await this.taskRepository.findByUserId(userId);
    }

    async createProduct(task: CreationAttributes<Task>) {
        return await this.taskRepository.create(task);
    }
}