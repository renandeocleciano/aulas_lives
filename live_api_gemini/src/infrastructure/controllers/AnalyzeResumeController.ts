import { Request, Response } from "express";
import { AnalyzeResumeUseCase } from "../../application/use-cases/AnalyzeResumeUseCase";

export class AnalyzeResumeController {
  // Aqui a gente não instancia o serviço dentro do controller.
  // A responsabilidade do controller é só orquestrar.
  // Quem injeta as dependências é a infraestrutura (rota),
  // mantendo tudo flexível e testável.
  constructor(private readonly useCase: AnalyzeResumeUseCase) {}

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
      console.error(error);
      res
        .status(500)
        .json({ error: "Erro ao analisar currículo.", detail: error.message });
    }
  }
}
