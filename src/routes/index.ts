import { Router } from 'express';
const router = Router();
import apiRoutes from './api/index.js'; // Import the apiRoutes file

router.use('/api', apiRoutes); // Add a prefix of `/api` to the apiRoutes

router.use((_req, res) => {
    return res.send('API endpoint not found');
});

export default router; // Export the router