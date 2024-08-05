import { injectable } from 'tsyringe'; // Importa el decorador @injectable para permitir la inyección de dependencias.
import { Task, User } from '../models'; // Importa los modelos Task y User para interactuar con la base de datos.
import { CreationAttributes } from 'sequelize'; // Importa CreationAttributes para tipar los atributos al crear un nuevo registro.

@injectable() // Marca la clase como inyectable, permitiendo que pueda ser inyectada en otros servicios o controladores.
export default class TaskRepository {
    // Método para obtener todas las tareas de la base de datos.
    async findAll() {
        return await Task.findAll(); // Utiliza el método findAll de Sequelize para obtener todas las instancias del modelo Task.
    }

    // Método para obtener una tarea específica por su ID.
    async findById(id: number) {
        return await Task.findByPk(id); // Utiliza el método findByPk de Sequelize para obtener una tarea por su clave primaria (ID).
    }

    // Método para obtener todas las tareas asociadas a un usuario específico.
    async findByUserId(userId: number) {
        return await Task.findAll({ 
            where: { userId }, // Filtra las tareas por el ID del usuario.
            include: User // Incluye el modelo User en la consulta para obtener los datos del usuario asociado.
        });
    }

    // Método para crear una nueva tarea.
    async create(task: CreationAttributes<Task>) {
        return await Task.create(task); // Utiliza el método create de Sequelize para insertar una nueva tarea en la base de datos.
    }

    // Método para actualizar una tarea existente por su ID.
    async update(id: number, taskData: Partial<CreationAttributes<Task>>) {
        const [updatedCount, updatedTasks] = await Task.update(taskData, {
            where: { id },
            returning: true // Retorna las instancias actualizadas.
        });

        if (updatedCount === 0) {
            return null; // Si ninguna fila fue actualizada, retorna null.
        }

        return updatedTasks[0]; // Retorna la tarea actualizada.
    }

    // Método para eliminar una tarea existente por su ID.
    async delete(id: number) {
        const result = await Task.destroy({
            where: { id }
        });

        return result > 0; // Retorna true si se eliminó al menos una fila, de lo contrario false.
    }
}

/**
 * CreationAttributes<Task> es un tipo proporcionado por Sequelize que representa los atributos necesarios para crear una nueva instancia del modelo Task.
 */
