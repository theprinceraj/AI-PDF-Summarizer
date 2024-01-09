import express from "express";
const router = express.Router();

import { textExtractionController } from "../controllers/textExtractionController";
router.get("/", textExtractionController);

export default router;