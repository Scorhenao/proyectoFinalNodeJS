import { Router } from 'express'; // Importa el objeto Router de Express para definir rutas específicas para los usuarios.
import UserController from '../controllers/userController'; // Importa el controlador de usuarios que maneja la lógica de las rutas.
import authMiddleware from '../middlewares/authMiddleware';

export const userRouter = Router(); // Crea una nueva instancia de Router para manejar las rutas relacionadas con los usuarios.

// Define las rutas y asigna los métodos del controlador para manejar las solicitudes.

// Ruta para obtener todos los usuarios.
// Cuando se hace una solicitud GET a '/users', se llama al método getAllUsers del UserController.
userRouter.get('/', UserController.getAllUsers);

// Ruta para obtener un usuario específico por su ID.
// Cuando se hace una solicitud GET a '/users/:id', se llama al método getUserById del UserController.
userRouter.get('/:id', UserController.getUserById);

// Ruta para crear un nuevo usuario.
// Cuando se hace una solicitud POST a '/users', se llama al método createUser del UserController.
userRouter.post('/', UserController.createUser);

userRouter.post('/login', UserController.login); // Ruta para inicio de sesión
