import { Request, Response } from 'express'; // Importa las interfaces Request y Response de Express.
import { container } from 'tsyringe'; // Importa el contenedor de inyección de dependencias de tsyringe.
import UserService from '../services/userService'; // Importa el servicio de usuarios.
import jwt from 'jsonwebtoken'; // Importa la librería jsonwebtoken para generar y verificar tokens JWT.

const SECRET_KEY = 'your_secret_key'; // Cambia esto por una clave secreta segura.

export default class AuthController {
    // Método estático para manejar el inicio de sesión.
    static async login(req: Request, res: Response) {
        const { email, password } = req.body; // Extrae el email y password del cuerpo de la solicitud.

        const userService = container.resolve(UserService); // Resuelve una instancia de UserService desde el contenedor.
        const user = await userService.getUserByEmail(email); // Llama al método getUserByEmail del servicio de usuarios para obtener el usuario por email.

        // Verifica si el usuario existe y si la contraseña es válida.
        if (!user || !(await user.validatePassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials' }); // Devuelve una respuesta 401 si las credenciales son inválidas.
        }

        // Genera el token JWT con el id y rol del usuario.
        const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });

        res.json({ token }); // Envía el token como respuesta en formato JSON.
    }
}
