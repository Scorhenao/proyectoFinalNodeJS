import UserRepository from "../repositories/userRepository"; // Importa el repositorio de usuarios, que maneja las operaciones de la base de datos.
import { injectable, inject } from "tsyringe"; // Importa decoradores para la inyección de dependencias.
import { User } from "../models/user"; // Importa el modelo de usuario.

@injectable() // Indica que esta clase puede ser inyectada como dependencia en otras clases.
export default class UserService {
  // Constructor que inyecta una instancia de UserRepository.
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  // Método para obtener todos los usuarios.
  async getAllUsers() {
    // Llama al método findAll del repositorio de usuarios para obtener todos los usuarios.
    return await this.userRepository.findAll();
  }

  // Método para obtener un usuario por su ID.
  async getUserById(id: number) {
    // Llama al método findById del repositorio de usuarios para obtener un usuario específico por su ID.
    return await this.userRepository.findById(id);
  }

  // Método para crear un nuevo usuario.
  async createUser(user: Partial<User>) {
    // Llama al método create del repositorio de usuarios para crear un nuevo usuario.
    // Partial<User> permite que se pasen solo algunos de los atributos del modelo User.
    return await this.userRepository.create(user);
  }
}

/**
 * @injectable() es un decorador que marca la clase como un servicio que puede ser inyectado en otras clases.
 * @inject(UserRepository) es un decorador que marca el parámetro userRepository del constructor para ser resuelto por el contenedor de inyección de dependencias.
 * El contenedor de inyección de dependencias se encarga de crear una instancia de UserService e inyectar una instancia de UserRepository en el parámetro userRepository del constructor.
 * 
 * Partial<User> define un tipo que tiene todas las propiedades de User como opcionales. Esto es útil para crear o actualizar un usuario sin necesidad de proporcionar todos los atributos.
 */
