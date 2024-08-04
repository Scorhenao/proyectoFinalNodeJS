import TaskRepository from '../repositories/taskRepository'; // Importa el repositorio de tareas que maneja las operaciones con la base de datos.
import { CreationAttributes } from 'sequelize'; // Importa el tipo CreationAttributes de Sequelize, que define los atributos para crear un nuevo registro.
import { injectable, inject } from 'tsyringe'; // Importa decorators para inyección de dependencias.
import { Task } from '../models'; // Importa el modelo de tarea.

@injectable() // Marca esta clase como un servicio que puede ser inyectado en otros lugares mediante 'tsyringe'.
export default class TaskService {
    constructor(
        @inject(TaskRepository) private taskRepository: TaskRepository // Inyecta una instancia de TaskRepository en el constructor.
    ) {}

    // Método para obtener todas las tareas.
    async getAllTasks() {
        return await this.taskRepository.findAll(); // Llama al método findAll del repositorio de tareas para obtener todas las tareas.
    }

    // Método para obtener una tarea específica por su ID.
    async getTaskById(id: number) {
        return await this.taskRepository.findById(id); // Llama al método findById del repositorio de tareas para obtener una tarea por su ID.
    }

    // Método para obtener todas las tareas asociadas a un usuario específico por su ID.
    async getTasksByUserId(userId: number) {
        return await this.taskRepository.findByUserId(userId); // Llama al método findByUserId del repositorio de tareas para obtener tareas de un usuario específico.
    }

    // Método para crear una nueva tarea.
    async createProduct(task: CreationAttributes<Task>) {
        return await this.taskRepository.create(task); // Llama al método create del repositorio de tareas para crear una nueva tarea.
    }
}
