import { Router } from 'express';
const router = Router();
import { createUser, findUser, updateUser, deleteUser } from '../../controllers/userController.js';
