import {
  Table, // Decorador para definir una tabla de la base de datos.
  Column, // Decorador para definir una columna de la tabla.
  Model, // Clase base para todos los modelos.
  DataType, // Tipos de datos de Sequelize.
  PrimaryKey, // Decorador para definir una clave primaria.
  AutoIncrement, // Decorador para definir una columna con incremento automático.
  HasMany, // Decorador para definir una relación de uno a muchos.
} from "sequelize-typescript";
import { Task } from './task'; // Importa el modelo Task para establecer relaciones.
import bcrypt from 'bcrypt';


@Table({
  tableName: "users", // Nombre de la tabla en la base de datos.
  timestamps: true, // Habilita la gestión automática de timestamps (createdAt y updatedAt).
})
export class User extends Model {
  // Define la columna 'id' como clave primaria con incremento automático.
  @PrimaryKey
  @AutoIncrement
  @Column({
      type: DataType.INTEGER,
  })
  id!: number;

  // Define la columna 'name' con tipo STRING que no puede ser nula.
  @Column({
      type: DataType.STRING,
      allowNull: false,
  })
  name!: string;

  // Define la columna 'email' con tipo STRING que no puede ser nula y debe ser única.
  @Column({
      type: DataType.STRING,
      allowNull: false,
      unique: true,
  })
  email!: string;

  // Define la columna 'password' con tipo STRING que no puede ser nula y debe ser única.
  @Column({
      type: DataType.STRING,
      allowNull: false,
      unique: true,
  })
  password!: string;

  // Define la columna 'role' con tipo STRING que no puede ser nula.
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  role!: 'premium' | 'normal';
  
  // Define la relación de uno a muchos con el modelo Task.
  @HasMany(() => Task)
  task!: Task[];

  // Método para cifrar la contraseña antes de guardar el usuario
  async setPassword(password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    this.password = hashedPassword;
  }

  // Método para verificar la contraseña
  async validatePassword(password: string): Promise<boolean> {
      return await bcrypt.compare(password, this.password);
  }

}
