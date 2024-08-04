import { Sequelize } from 'sequelize-typescript';  // Importa Sequelize y las funcionalidades de sequelize-typescript.
import { User, Task } from '../models';  // Importa los modelos User y Task desde la carpeta models.

// Crea una nueva instancia de Sequelize con la configuración de la base de datos.
const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',  // Especifica el dialecto de la base de datos que se está utilizando (en este caso, MySQL).
    host: 'localhost',  // Especifica la dirección del host de la base de datos.
    username: 'root',  // Nombre de usuario para conectarse a la base de datos.
    password: '',  // Contraseña para conectarse a la base de datos (se recomienda no dejarla en blanco en producción).
    database: 'ApiTasks',  // Nombre de la base de datos a la que se conecta.
    models: [User, Task],  // Especifica los modelos que Sequelize debe usar y gestionar.
});

// Exporta la instancia de Sequelize para que pueda ser utilizada en otras partes de la aplicación.
export default sequelize;
