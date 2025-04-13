import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import { ResumeData } from "../../domain/interaces/ResumeData";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export class GeminiOCRService {
  async analyzeResumeFromPdf(pdfBuffer: Buffer): Promise<ResumeData> {
    const base64 = pdfBuffer.toString("base64");

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
Você é um assistente de RH. Extraia do currículo os seguintes campos em formato JSON:
{
  "name": "",
  "email": "",
  "skills": [],
  "experience": [
    {
      "company": "",
      "position": "",
      "period": ""
    }
  ],
  "education": ""
}

Responda apenas o JSON, sem explicações.
`;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          data: base64,
          mimeType: "application/pdf",
        },
      },
    ]);

    const response = await result.response;
    const text = response.text();

    // Sanitize para remover markdown ou blocos extras (se houver)
    const jsonStart = text.indexOf("{");
    const jsonEnd = text.lastIndexOf("}");
    const jsonClean = text.substring(jsonStart, jsonEnd + 1);

    return JSON.parse(jsonClean);
  }
}
