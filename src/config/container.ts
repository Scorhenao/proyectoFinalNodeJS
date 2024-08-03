import { container } from 'tsyringe';
import UserService from '../services/userService';
import UserRepository from '../repositories/userRepository';
import TaskRepository from '../repositories/taskRepository';
import TaskService from '../services/taskService';

container.registerSingleton<UserRepository>(UserRepository); //Instancia global 
container.registerSingleton<UserService>(UserService);
container.registerSingleton<TaskRepository>(TaskRepository);
container.registerSingleton<TaskService>(TaskService);