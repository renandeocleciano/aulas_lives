import { ResumeData } from "../../domain/interaces/ResumeData";
import { GeminiOCRService } from "../../infrastructure/services/GeminiOCRService";

export class AnalyzeResumeUseCase {
  constructor(private readonly ocrService: GeminiOCRService) {}

  async execute(pdfBuffer: Buffer): Promise<ResumeData> {
    return this.ocrService.analyzeResumeFromPdf(pdfBuffer);
  }
}
