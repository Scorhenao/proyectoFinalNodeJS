import { Request, Response } from "express"; // Importa las interfaces Request y Response de Express.
import { container } from "tsyringe"; // Importa el contenedor de inyección de dependencias de tsyringe.
import UserService from "../services/userService"; // Importa el servicio de usuarios.

export default class UserController {
  // Método estático para obtener todos los usuarios.
  static async getAllUsers(_: Request, res: Response) {
    const userService = container.resolve(UserService); // Resuelve una instancia de UserService desde el contenedor.
    const users = await userService.getAllUsers(); // Llama al método getAllUsers del servicio de usuarios.
    res.json(users); // Envía la lista de usuarios como respuesta en formato JSON.
  }

  // Método estático para obtener un usuario por su ID.
  static async getUserById(req: Request, res: Response) {
    const userService = container.resolve(UserService); // Resuelve una instancia de UserService desde el contenedor.
    const user = await userService.getUserById(parseInt(req.params.id)); // Llama al método getUserById del servicio de usuarios, pasando el ID del usuario como parámetro.
    console.log(user); // Imprime el usuario en la consola para depuración.
    res.json(user); // Envía el usuario encontrado como respuesta en formato JSON.
  }

  // Método estático para crear un nuevo usuario.
  static async createUser(req: Request, res: Response) {
    const { name, email, password, role } = req.body;
  
    // Validar que todos los campos requeridos estén presentes
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: 'All fields (name, email, password, role) are required' });
    }
  
    // Validar que el rol sea válido
    if (role !== 'premium' && role !== 'normal') {
      return res.status(400).json({ message: 'Role must be "premium" or "normal"' });
    }
  
    try {
      const userService = container.resolve(UserService);
      const user = await userService.createUser(req.body);
      res.status(201).json(user); // Responder con el usuario creado
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: 'An unknown error occurred' });
      }
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const userService = container.resolve(UserService);
      const token = await userService.login(req.body.email, req.body.password);
      res.json({ message: "Login successful", token });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: "An unknown error occurred" });
      }
    }
  }
}
