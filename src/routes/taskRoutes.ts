import { Router } from 'express'; // Importa el objeto Router de Express para definir rutas específicas para las tareas.
import TaskController from '../controllers/taskController'; // Importa el controlador de tareas que maneja la lógica de las rutas.

export const taskRouter = Router(); // Crea una nueva instancia de Router para manejar las rutas relacionadas con tareas.

// Define las rutas y asigna los métodos del controlador para manejar las solicitudes.

// Ruta para obtener todas las tareas.
// Cuando se hace una solicitud GET a '/tasks', se llama al método getAllTasks del TaskController.
taskRouter.get('/', TaskController.getAllTasks);

// Ruta para obtener una tarea específica por su ID.
// Cuando se hace una solicitud GET a '/tasks/:id', se llama al método getTaskById del TaskController.
taskRouter.get('/:id', TaskController.getTaskById);

// Ruta para obtener todas las tareas asociadas a un usuario específico por su ID.
// Cuando se hace una solicitud GET a '/tasks/user/:userId', se llama al método getTasksByUserId del TaskController.
taskRouter.get('/user/:userId', TaskController.getTasksByUserId);

// Ruta para crear una nueva tarea.
// Cuando se hace una solicitud POST a '/tasks', se llama al método createTask del TaskController.
taskRouter.post('/', TaskController.createTask);
