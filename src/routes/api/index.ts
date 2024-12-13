import { Router } from 'express';
const router = Router();
import userRoutes from './userRoutes.js'; // Import the userRoutes file
import thoughtRoutes from './thoughtRoutes.js'; // Import the thoughtRoutes file

router.use('/users', userRoutes); // Add a prefix of `/users` to the userRoutes
router.use('/thoughts', thoughtRoutes); // Add a prefix of `/thoughts` to the thoughtRoutes

export default router; // Export the router