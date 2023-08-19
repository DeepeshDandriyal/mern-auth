import express from "express";
import { getData } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getData);

export default router;
