import express from "express";
 import { signin, signup } from "../controllers/auth.js";

const router = express.Router();

// CREATE A USER
router.post("/signup", signup )

// SINGIN
router.post("/signin", signin)

//GOOGLE AUTH
router.post("/google", )

export default router;