import express from "express";
const router = express.Router();

import { textExtractionController } from "../controllers/textExtractionController";
router.get("/extract", textExtractionController);

import { textToGPTController } from "../controllers/textToGPTController";
router.get("/gpt", textToGPTController);

export default router;