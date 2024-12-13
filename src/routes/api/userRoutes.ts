import { Router } from 'express';
const router = Router();
import { createUser, getUsers, getSingleUser, deleteUser, updateUser } from '../../controllers/userController.js';

router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);




export default router;