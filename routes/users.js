import express from "express";
const router = express.Router();
import { getUser, getUsers, createUser, deleteUser, updateUser } from "../controllers/users";

router.get('/', getUsers)

router.post('/', createUser)

router.get('/:id', getUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)


export default router;