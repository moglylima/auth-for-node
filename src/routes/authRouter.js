import { Router } from 'express';
import authController from "../controllers/authController.js";

const authRouter = Router();

authRouter
    .post('/auth/login', authController.login);

export default authRouter;