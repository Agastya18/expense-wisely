import express from "express";
import { createTransaction } from "../controllers/transaction.controller.js";
import { verifyUser } from "../middleware/protectRoute.js";

const router = express.Router();

router.post('/create',verifyUser,createTransaction)


export default router;