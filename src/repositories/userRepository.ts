import { injectable } from 'tsyringe'; // Importa el decorador @injectable para permitir la inyección de dependencias.
import { User } from '../models/user'; // Importa el modelo User para interactuar con la base de datos.

@injectable() // Marca la clase como inyectable, permitiendo que pueda ser inyectada en otros servicios o controladores.
export default class UserRepository {
    // Método para obtener todos los usuarios de la base de datos.
    async findAll() {
        return await User.findAll(); // Utiliza el método findAll de Sequelize para obtener todas las instancias del modelo User.
    }

    // Método para obtener un usuario específico por su ID.
    async findById(id: number) {
        return await User.findByPk(id); // Utiliza el método findByPk de Sequelize para obtener un usuario por su clave primaria (ID).
    }

    // Método para crear un nuevo usuario.
    async create(user: Partial<User>) {
        return await User.create(user); // Utiliza el método create de Sequelize para insertar un nuevo usuario en la base de datos.
    }
}
