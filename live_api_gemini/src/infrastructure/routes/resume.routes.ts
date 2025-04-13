import { Router } from "express";
import multer from "multer";
import { AnalyzeResumeUseCase } from "../../application/use-cases/AnalyzeResumeUseCase";
import { AnalyzeResumeController } from "../controllers/AnalyzeResumeController";
import { GeminiOCRService } from "../services/GeminiOCRService";

const upload = multer(); // memória (sem salvar no disco)
const router = Router();

const geminiService = new GeminiOCRService();
const useCase = new AnalyzeResumeUseCase(geminiService);
const controller = new AnalyzeResumeController(useCase);

router.post("/analyze", upload.single("file"), (req, res) =>
  controller.handle(req, res)
);

export default router;
