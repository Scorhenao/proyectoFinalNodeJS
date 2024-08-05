import { Router } from 'express'; // Importa el enrutador de Express para definir rutas.
import AuthController from '../controllers/authController'; // Importa el controlador de autenticación para manejar las solicitudes de autenticación.

export const authRouter = Router(); // Crea una nueva instancia del enrutador de Express.

authRouter.post('/register', AuthController.register); // Define la ruta POST '/register' y asocia la solicitud al método register del AuthController.
authRouter.post('/login', AuthController.login); // Define la ruta POST '/login' y asocia la solicitud al método login del AuthController.
