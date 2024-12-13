import { Router } from 'express';
const router = Router();
import { createUser, getUsers, getSingleUser, deleteUser } from '../../controllers/userController.js';

router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getSingleUser);
router.route('/:userId').delete(deleteUser);



export default router;