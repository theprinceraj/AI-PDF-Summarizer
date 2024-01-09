import express from "express";
const router = express.Router();

import { textExtractionController } from "../controllers/textExtractor";
router.get("/", textExtractionController);

export default router;