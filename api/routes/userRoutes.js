import express from "express";
import { getData, updateUser } from "../controllers/userController.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/", getData);
router.post("/update/:id", verifyToken, updateUser);
export default router;
