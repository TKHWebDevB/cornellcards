import express from "express";
const router = express.Router();
import prisma from "../db/index.js";

router.get("/", async (req, res) => {
  // Gets all the todos from the database
  const notes = await prisma.todo.findMany();
  // Responds back to the client with json with a success status and the todos array
  res.status(200).json({
    success: true,
    todos,
  });
});

export default router;
