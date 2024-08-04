### uso de dependencias
- express: Framework web para Node.js.
- sequelize: ORM para Node.js.
- sequelize-typescript: Decoradores de TypeScript para Sequelize.
- mysql2: Driver de MySQL para Node.js.
- nodemon: Herramienta para reiniciar automáticamente la aplicación cuando se detectan cambios.
- ts-node: Ejecuta TypeScript directamente en Node.js.
- typescript: Lenguaje de programación que añade tipado estático a JavaScript.
- tsyringe: Contenedor de inyección de dependencias para TypeScript.
- @types/express: Definiciones de tipos para Express.
- @types/sequelize: Definiciones de tipos para Sequelize.
- @types/node: Definiciones de tipos para Node.js.

### comandos de instalacion 
```text
npm install express sequelize sequelize-typescript mysql2 nodemon ts-node typescript tsyringe  @types/express @types/sequelize @types/node
```

### estructura de proyecto 
-  estructura de proyecto modular o estructura de proyecto en capas. Este enfoque organiza el código por funcionalidad y responsabilidades, lo que facilita el mantenimiento, la escalabilidad y la comprensión del proyecto

```text
project-name/
├── src/
│ ├── config/
│ │ └── container.ts
│ │ └── db.ts
│ ├── controllers/
│ │ ├── taskController.ts
│ │ └── userController.ts
| | └── ...
│ ├── models/
│ │ ├── index.ts
│ │ ├── task.ts
│ │ └── user.ts
| | └── ...
│ ├── repositories/
│ │ ├── taskRepository.ts
│ │ └── userRepository.ts
| | └── ...
│ ├── routes/
│ │ ├── index.ts
│ │ ├── Router.ts
│ │ ├── taskRoutes.ts
│ │ └── userRoutes.ts
| | └── ...
│ ├── services/
│ │ ├── taskService.ts
│ │ └── userService.ts
| | └── ...
│ └── index.ts
├── .gitignore/
├── package-lock.json
├── package.json
├── node_modules/
├── README.md/
└── nodemon.json
```
# Entidad relacion de bd
![Logo de Mi Proyecto](ejBD.JPG)
