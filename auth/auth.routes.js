import { Router } from "express";
import { loginController, signUpController } from "./auth.controller.js";

const router = Router()
router.post('/login',loginController);
router.post('/register',signUpController);

export default router;