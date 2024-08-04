import { Request, Response, NextFunction } from "express"; // Importa las interfaces Request, Response y NextFunction de Express.
import jwt from "jsonwebtoken"; // Importa la librería jsonwebtoken para manejar tokens JWT.
import { User } from "../models/user"; // Importa el modelo de usuario.

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.replace("Bearer ", ""); // Obtiene el token de la cabecera de autorización y elimina el prefijo "Bearer ".

    if (!token) {
        return res.status(401).json({ message: "No token provided" }); // Devuelve una respuesta 401 si no se proporciona un token.
    }

    try {
        const decoded = jwt.verify(token, "secret_key") as User; // Verifica el token usando la clave secreta. Ajusta "secret_key" a tu clave secreta real.
        req.user = decoded; // Almacena la información decodificada del token en req.user.
        next(); // Llama a la siguiente función middleware.
    } catch (error) {
        res.status(401).json({ message: "Invalid token" }); // Devuelve una respuesta 401 si el token es inválido.
    }
};

export default authMiddleware; // Exporta el middleware de autenticación.
