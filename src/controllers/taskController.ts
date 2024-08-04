import { Request, Response } from 'express'; // Importa las interfaces Request y Response de Express.
import { container } from 'tsyringe'; // Importa el contenedor de inyección de dependencias de tsyringe.
import TaskService from '../services/taskService'; // Importa el servicio de tareas.

export default class TaskController {
    // Método estático para obtener todas las tareas.
    static async getAllTasks(req: Request, res: Response) {
        const taskService = container.resolve(TaskService); // Resuelve una instancia de TaskService desde el contenedor.
        const tasks = await taskService.getAllTasks(); // Llama al método getAllTasks del servicio de tareas.
        res.json(tasks); // Envía la lista de tareas como respuesta en formato JSON.
    }

    // Método estático para obtener una tarea por su ID.
    static async getTaskById(req: Request, res: Response) {
        const taskService = container.resolve(TaskService); // Resuelve una instancia de TaskService desde el contenedor.
        const task = await taskService.getTaskById(parseInt(req.params.id)); // Llama al método getTaskById del servicio de tareas, pasando el ID de la tarea como parámetro.
        res.json(task); // Envía la tarea encontrada como respuesta en formato JSON.
    }

    // Método estático para obtener tareas por el ID de usuario.
    static async getTasksByUserId(req: Request, res: Response) {
        const taskService = container.resolve(TaskService); // Resuelve una instancia de TaskService desde el contenedor.
        const tasks = await taskService.getTasksByUserId(parseInt(req.params.userId)); // Llama al método getTasksByUserId del servicio de tareas, pasando el ID de usuario como parámetro.
        res.json(tasks); // Envía la lista de tareas encontradas como respuesta en formato JSON.
    }

    // Método estático para crear una nueva tarea.
    static async createTask(req: Request, res: Response) {
        const taskService = container.resolve(TaskService); // Resuelve una instancia de TaskService desde el contenedor.
        const task = await taskService.createProduct(req.body); // Llama al método createTask del servicio de tareas, pasando los datos de la nueva tarea como parámetro.
        
        // Comenta las siguientes líneas para depurar los datos de la tarea en formato JSON.
        // const dataTask = req.body
        // const dataTaskObject = JSON.stringify(dataTask)
        // console.log(dataTaskObject);

        res.status(201).json(task); // Envía la tarea creada como respuesta en formato JSON, con el código de estado 201 (Created).
    }
}
