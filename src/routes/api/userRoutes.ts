import { Router } from 'express';
const router = Router();
import { createUser, getUsers, getSingleUser, deleteUser, updateUser, addFriend, deleteFriend } from '../../controllers/userController.js';

router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);




export default router;