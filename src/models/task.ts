import {
    Table, // Decorador para definir una tabla de la base de datos.
    Column, // Decorador para definir una columna de la tabla.
    Model, // Clase base para todos los modelos.
    DataType, // Tipos de datos de Sequelize.
    ForeignKey, // Decorador para definir una clave foránea.
    BelongsTo, // Decorador para definir una relación de pertenencia.
} from 'sequelize-typescript';
import { User } from './user'; // Importa el modelo User para establecer relaciones.

@Table({
    tableName: 'tasks', // Nombre de la tabla en la base de datos.
    timestamps: true, // Habilita la gestión automática de timestamps (createdAt y updatedAt).
})
export class Task extends Model<Task> {
    // Define la columna 'name' con tipo STRING que no puede ser nula.
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    // Define la columna 'description' con tipo STRING que no puede ser nula.
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description!: string;

    // Define la columna 'status' con tipo BOOLEAN que no puede ser nula.
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    status!: boolean;

    // Define la columna 'userId' como una clave foránea que referencia al modelo User.
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId!: number;

    // Define la relación de pertenencia al modelo User.
    @BelongsTo(() => User)
    user!: User;
}
