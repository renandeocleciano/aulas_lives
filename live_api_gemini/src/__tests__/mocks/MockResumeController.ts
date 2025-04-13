import { Request, Response } from "express";
import { AnalyzeResumeUseCase } from "../../application/use-cases/AnalyzeResumeUseCase";
import { MockGeminiOCRService } from "./MockGeminiOCRService";

export class MockResumeController {
  private readonly useCase: AnalyzeResumeUseCase;

  constructor() {
    const mockService = new MockGeminiOCRService();
    this.useCase = new AnalyzeResumeUseCase(mockService);
  }

  async handle(req: Request, res: Response): Promise<void> {
    const file = req.file;

    if (!file) {
      res.status(400).json({ error: "PDF do currículo não enviado." });
      return;
    }

    try {
      const data = await this.useCase.execute(file.buffer);
      res.status(200).json({ data });
    } catch (error: any) {
      res
        .status(500)
        .json({ error: "Erro ao analisar currículo.", detail: error.message });
    }
  }
}
