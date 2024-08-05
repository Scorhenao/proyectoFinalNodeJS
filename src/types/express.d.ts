// Importa la interfaz Request de Express.
import { Request } from 'express';
// Importa el modelo User para usarlo en la extensión de la interfaz Request.
import { User } from '../models/user';

// Extiende la interfaz Request de Express para incluir una propiedad opcional 'user' que es de tipo User.
declare module 'express' {
    export interface Request {
        user?: User; // 'user' es una propiedad opcional que puede contener un objeto de tipo User.
    }
}
