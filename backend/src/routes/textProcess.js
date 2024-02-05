import express from "express";
const router = express.Router();

import textExtractionController from "../controers/textExtractionController.js";
router.get("/extract", textExtractionController);

import textToGPTController from "../controllers/textToGPTController.js";
router.get("/gpt", textToGPTController);

export default router;