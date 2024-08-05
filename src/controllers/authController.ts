import { Request, Response } from 'express'; // Importa las interfaces Request y Response de Express para manejar solicitudes y respuestas HTTP.
import { container } from 'tsyringe'; // Importa el contenedor de inyección de dependencias de tsyringe.
import UserService from '../services/userService'; // Importa el servicio de usuarios para gestionar operaciones relacionadas con usuarios.
import jwt from 'jsonwebtoken'; // Importa la biblioteca jsonwebtoken para generar y verificar tokens JWT.

const SECRET_KEY = 'your_secret_key'; // Define una clave secreta para firmar los tokens JWT. (Cambiar por una clave segura y secreta en producción.)

export default class AuthController {
    // Método estático para registrar un nuevo usuario.
    static async register(req: Request, res: Response) {
        const { name, email, password, role } = req.body; // Extrae los datos del cuerpo de la solicitud.

        // Valida el rol del usuario. Debe ser 'premium' o 'normal'.
        if (!['premium', 'normal'].includes(role)) {
            return res.status(400).json({ message: 'Invalid role' }); // Devuelve un error 400 si el rol es inválido.
        }

        const userService = container.resolve(UserService); // Resuelve una instancia del servicio de usuarios desde el contenedor de dependencias.
        const user = await userService.createUser({ name, email, password, role }); // Crea un nuevo usuario usando el servicio de usuarios.
        res.status(201).json(user); // Devuelve el usuario creado con un código de estado 201 (Creado).
    }

    // Método estático para iniciar sesión.
    static async login(req: Request, res: Response) {
        const { email, password } = req.body; // Extrae el email y la contraseña del cuerpo de la solicitud.

        const userService = container.resolve(UserService); // Resuelve una instancia del servicio de usuarios desde el contenedor de dependencias.
        const user = await userService.getUserByEmail(email); // Busca al usuario por su email usando el servicio de usuarios.

        // Verifica si el usuario existe y si la contraseña proporcionada es correcta.
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' }); // Devuelve un error 401 si las credenciales son inválidas.
        }

        // Genera un token JWT con el id y rol del usuario.
        const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token }); // Devuelve el token JWT generado.
    }
}
