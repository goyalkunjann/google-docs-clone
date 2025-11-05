import express from "express";
import {
  createDocument,
  getDocumentById,
  updateDocument,
} from "../controllers/document.controller";

const router = express.Router();

router.post("/", createDocument);
router.get("/:id", getDocumentById);
router.put("/:id", updateDocument);

export default router;
