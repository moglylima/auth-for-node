import userController from "../controllers/userController.js";
import { authenticated } from "../middlewares/authenticated.js";

import { Router } from "express";


const userRouter = Router();

userRouter
    .post('/users', userController.createUser)
    .get('/users/:email', authenticated, userController.getUserByEmail)
    .get('/users/:id', authenticated, userController.getUserById)
    .put('/users/:id', authenticated, userController.updateUser)
    .delete('/users/:id', authenticated, userController.deleteUser)
    .get('/users', authenticated, userController.getAllUsers);

export default userRouter;