import express from "express";
import { deleteUser, dislike, getUser, like, subsribe, unsubsribe, update } from "../controllers/user.js";

const router = express.Router();

//update user
router.put("/:id", update)

//delete user
router.delete("/:id", deleteUser)

//get a user
router.get("/find/:id", getUser)

//subsribe a user
router.put("/sub/:id", subsribe)

//unsubsribe a user
router.put("/unsub/:id", unsubsribe)

// like a video
router.put("/like/:videoId", like)

//dislike a video
router.put("/dislike/:videoId", dislike)

export default router;