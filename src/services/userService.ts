import UserRepository from "../repositories/userRepository"; // Importa el repositorio de usuarios, que maneja las operaciones de la base de datos.
import { injectable, inject } from "tsyringe"; // Importa decoradores para la inyección de dependencias.
import { User } from "../models/user"; // Importa el modelo de usuario.
import jwt from "jsonwebtoken"; // Importa la librería para generar y verificar JSON Web Tokens (JWT).

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

  // Método para obtener un usuario por su correo electrónico.
  // Devuelve una promesa que se resuelve en un usuario o nulo si no se encuentra el usuario.
  async getUserByEmail(email: string): Promise<User | null> {
    // Llama al método findByEmail del repositorio de usuarios para obtener un usuario específico por su correo electrónico.
    return await this.userRepository.findByEmail(email);
  }


  // Método para crear un nuevo usuario.
  async createUser(userData: { name: string, email: string, password: string, role: 'premium' | 'normal' }) {
    const user = new User(); // Crea una nueva instancia del modelo de usuario.
    user.name = userData.name; // Asigna el nombre del usuario.
    user.email = userData.email; // Asigna el correo electrónico del usuario.
    user.role = userData.role; // Asigna el rol del usuario.
    await user.setPassword(userData.password); // Asegúrate de cifrar la contraseña del usuario.

    return await user.save(); // Guarda el usuario en la base de datos.
  }

  async login(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email); // Busca al usuario por correo electrónico en el repositorio.
    if (!user || !(await user.validatePassword(password))) {
        throw new Error('Credenciales inválidas'); // Lanza un error si las credenciales son inválidas.
    }

    // Genera un token JWT con la información del usuario.
    const token = jwt.sign(
        { id: user.id, role: user.role }, // Datos que se incluirán en el token.
        'secret', // Usa tu clave secreta.
        { expiresIn: '1h' } // Establece el tiempo de expiración del token.
    );

    return { token }; // Devuelve el token generado.
  }
}

/**
 * @injectable() es un decorador que marca la clase como un servicio que puede ser inyectado en otras clases.
 * @inject(UserRepository) es un decorador que marca el parámetro userRepository del constructor para ser resuelto por el contenedor de inyección de dependencias.
 * El contenedor de inyección de dependencias se encarga de crear una instancia de UserService e inyectar una instancia de UserRepository en el parámetro userRepository del constructor.
 * 
 * Partial<User> define un tipo que tiene todas las propiedades de User como opcionales. Esto es útil para crear o actualizar un usuario sin necesidad de proporcionar todos los atributos.
 */
