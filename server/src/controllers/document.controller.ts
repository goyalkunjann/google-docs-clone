import {Request, Response} from "express";
import Document from "../models/document.model";

export const createDocument = async (req: Request, res: Response) => {
  try {
    const document = await Document.create({});
    res.status(201).json(document);
  } catch (error) {
    res.status(500).json({ message: "Error creating document", error });
  }
};

export const getDocumentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const document = await Document.findById(id);
    if (!document) return res.status(404).json({ message: "Document not found" });
    res.json(document);
  } catch (error) {
    res.status(500).json({ message: "Error fetching document", error });
  }
};

export const updateDocument = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { content, title } = req.body;
    const document = await Document.findByIdAndUpdate(
      id,
      { content, title },
      { new: true }
    );
    if (!document) return res.status(404).json({ message: "Document not found" });
    res.json(document);
  } catch (error) {
    res.status(500).json({ message: "Error updating document", error });
  }
};