import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriends
} from "../controllers/users.js"
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

// Read
router.get("/:id", verifyToken, getUser);
router.get(":/id/friends", verifyToken, getUserFriends);

// Update
router.get("/:id/:friends", verifyToken, addRemoveFriends);

export default router;