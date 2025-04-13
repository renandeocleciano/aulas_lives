import { ResumeData } from "../../infrastructure/services/GeminiOCRService";

export class MockGeminiOCRService {
  async analyzeResumeFromPdf(_: Buffer): Promise<ResumeData> {
    return {
      name: "Juliana Costa",
      email: "juliana.costa@email.com",
      skills: ["React", "Next.js", "Tailwind CSS"],
      experience: [
        {
          company: "FrontApp",
          position: "Frontend Developer Pleno",
          period: "2020 - Atual",
        },
      ],
      education: "UFMG, Sistemas de Informação (2015 - 2019)",
    };
  }
}
