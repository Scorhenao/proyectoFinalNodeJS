import { container } from 'tsyringe';  // Importa el contenedor de inyección de dependencias de la biblioteca tsyringe.
import UserService from '../services/userService';  // Importa el servicio de usuarios.
import UserRepository from '../repositories/userRepository';  // Importa el repositorio de usuarios.
import TaskRepository from '../repositories/taskRepository';  // Importa el repositorio de tareas.
import TaskService from '../services/taskService';  // Importa el servicio de tareas.

// Registra UserRepository como un Singleton en el contenedor de inyección de dependencias.
// Esto asegura que solo haya una instancia global de UserRepository en toda la aplicación.
container.registerSingleton<UserRepository>(UserRepository);

// Registra UserService como un Singleton en el contenedor de inyección de dependencias.
// Esto asegura que solo haya una instancia global de UserService en toda la aplicación.
container.registerSingleton<UserService>(UserService);

// Registra TaskRepository como un Singleton en el contenedor de inyección de dependencias.
// Esto asegura que solo haya una instancia global de TaskRepository en toda la aplicación.
container.registerSingleton<TaskRepository>(TaskRepository);

// Registra TaskService como un Singleton en el contenedor de inyección de dependencias.
// Esto asegura que solo haya una instancia global de TaskService en toda la aplicación.
container.registerSingleton<TaskService>(TaskService);
