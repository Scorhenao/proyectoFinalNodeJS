import { Router } from 'express'; // Importa el objeto Router de Express para definir rutas.
import { userRouter, taskRouter, authRouter } from './'; // Importa los routers de usuarios y tareas desde el archivo 'index.ts' en la misma carpeta.

const router = Router(); // Crea una nueva instancia de Router.

router.use('/users', userRouter); // Define que todas las rutas que comienzan con '/users' serán manejadas por 'userRouter'.
router.use('/tasks', taskRouter); // Define que todas las rutas que comienzan con '/tasks' serán manejadas por 'taskRouter'.
router.use('/auth', authRouter)


export default router; // Exporta el router configurado para su uso en otros archivos.
