import express from "express";
import { saveContact } from "../controller/contact.controller.js";

const router = express.Router();

// POST /api/contact
router.post("/contact", saveContact);

export default router;
