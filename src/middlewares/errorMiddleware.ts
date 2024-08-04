import { Request, Response, NextFunction } from 'express';
interface ErrorResponse {
    message: string;
    stack?: string;
}

  // Middleware de manejo de errores
export const errorHandler = (err: ErrorResponse, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack); // Loguea el error para la depuración
    
    res.status(500).json({
        message: err.message || 'Internal Server Error',
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
};