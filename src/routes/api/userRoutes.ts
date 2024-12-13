import { Router } from 'express';
const router = Router();
import { createUser, getUsers, getSingleUser, deleteUser, updateUser } from '../../controllers/userController.js';

router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getSingleUser);
router.route('/:userId').delete(deleteUser);
router.route('/:userId').put(updateUser);




export default router;