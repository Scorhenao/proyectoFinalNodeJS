import "reflect-metadata"; // Importa 'reflect-metadata', necesario para la inyección de dependencias con 'tsyringe'.
import express from "express"; // Importa el framework Express para crear el servidor y manejar rutas.
import sequelize from "./config/db"; // Importa la instancia de Sequelize configurada para conectar con la base de datos.
import router from "./routes/Router"; // Importa el enrutador de la aplicación que define las rutas de la API.
import { errorHandler } from "./middlewares/errorMiddleware"; // Importa el middleware para manejar errores.

const app = express(); // Crea una nueva aplicación Express.
app.use(express.json()); // Configura Express para analizar solicitudes con formato JSON.
app.use("/api", router); // Configura el enrutador para que maneje las rutas bajo el prefijo '/api'.

app.use(errorHandler); // Aplica el middleware de manejo de errores.

const startServer = async () => { // Función asíncrona para iniciar el servidor.
  try {
    await sequelize.authenticate(); // Intenta autenticar la conexión a la base de datos.
    console.log("Database connected!"); // Mensaje de éxito si la conexión a la base de datos es exitosa.
    
    await sequelize.sync(); // Sincroniza los modelos con la base de datos, creando tablas si no existen.
    
    app.listen(3000, () => { // Inicia el servidor en el puerto 3000.
      console.log("Server started on port 3000"); // Mensaje de éxito cuando el servidor está en funcionamiento.
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error); // Mensaje de error si no se puede conectar a la base de datos.
  }
};

startServer(); // Llama a la función para iniciar el servidor.
