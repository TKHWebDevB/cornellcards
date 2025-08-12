import express from "express";
import cors from "cors";
// import todoRouter from "./routes/todo.js";

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
// app.use("/notes", notesRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
