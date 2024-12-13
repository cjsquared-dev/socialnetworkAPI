import { Router } from 'express';
const router = Router();
import userRoutes from './userRoutes.js'; // Import the userRoutes file

router.use('/users', userRoutes); // Add a prefix of `/users` to the userRoutes

export default router; // Export the router