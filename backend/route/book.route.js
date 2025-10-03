import express from "express";
import { getBook } from "../controller/book.controller.js";  // <-- added .js

const router = express.Router();

router.get("/", getBook);

export default router;
