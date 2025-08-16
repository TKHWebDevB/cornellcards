import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: { notebooks: true },
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get notebooks for a specific user
router.get("/:userId/notebooks", async (req, res) => {
  const { userId } = req.params;
  try {
    const notebooks = await prisma.notebook.findMany({
      where: { userId },
      // include: {
      //   collections: { include: { cues: { include: { answer: true } } } },
      // },
    });
    res.json(notebooks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a specific notebook( need to change or figure out a better base URL since it's notebooks/notebooks)
router.get("/notebooks/:notebookId", async (req, res) => {
  const { notebookId } = req.params;
  try {
    const notebook = await prisma.notebook.findUnique({
      where: { id: notebookId },
      include: {
        collections: { include: { cues: { include: { answer: true } } } },
      },
    });
    res.json(notebook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
