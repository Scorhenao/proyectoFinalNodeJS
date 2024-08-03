import { injectable } from 'tsyringe';
import { Task } from '../models';
import { CreationAttributes } from 'sequelize';

@injectable() //Significa que la clase es un servicio que puede ser inyectado
export default class TaskRepository {
    async findAll() {
        return await Task.findAll();
    }

    async findById(id: number) {
        return await Task.findByPk(id);
    }

    async findByUserId(userId: number) {
        return await Task.findAll({ where: { userId } });
    }

    async create(task: CreationAttributes<Task>) {
        return await Task.create(task);
    }
}

/**
 * CreationAttributes<Product> es un tipo que representa los atributos que se pueden pasar a la función create de un modelo de Sequelize.
 */