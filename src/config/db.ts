import { Sequelize } from 'sequelize-typescript';
import { User, Task } from '../models';

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'ApiTasks',
    models: [User, Task], // Añade todos tus modelos aquí
});

export default sequelize;