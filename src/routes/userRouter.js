import { Router } from "express";
import userController from "../controllers/userController.js";
import { authenticated } from "../middlewares/authenticated.js";
import authorized from "../middlewares/authorized.js";

const userRouter = Router();

userRouter
    .post('/users', userController.createUser)
    .get('/users/:email', authenticated, userController.getUserByEmail)
    .get('/users/:id', authenticated, userController.getUserById)
    .put('/users/:id', authenticated, userController.updateUser)
    .delete('/users/:id', authenticated, authorized("admin"), userController.deleteUser)
    .get('/users', authenticated, authorized("admin"), userController.getAllUsers);

export default userRouter;