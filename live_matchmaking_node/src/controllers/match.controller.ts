import { Request, Response } from "express";
import { createPlayerAndSendToQueue } from "../services/match.service";

export async function handleMatchRequest(req: Request, res: Response) {
  const { skill } = req.body;
  const player = await createPlayerAndSendToQueue(skill);
  res.status(202).json({ message: "Jogador enviado para a fila!", player });
}
