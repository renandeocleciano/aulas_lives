import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import resumeRoutes from "./infrastructure/routes/resume.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/resumes", resumeRoutes);

app.listen(PORT, () => {
  console.log(`Resume Scanner API rodando em http://localhost:${PORT}`);
});
