import express from "express";
import cors from "cors";
import notebooksRouter from "./routes/notebooks.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use("/collections", notebooksRouter);
// app.use("/flashcards", flashCardRouter); (Just a GET route for the creation of flashcards)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
