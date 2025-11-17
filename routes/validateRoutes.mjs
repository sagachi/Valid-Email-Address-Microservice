import express from "express";
import { validateEmail } from "../controllers/validateController.mjs";

const router = express.Router();

// POST /api/v1/validate/email
router.post("/email", validateEmail);

export default router;
