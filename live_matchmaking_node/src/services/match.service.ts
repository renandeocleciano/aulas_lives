import { randomUUID } from "crypto";
import { sendToMatchmakingQueue } from "../queues/match.queue";
import { Player } from "../types/player";

export async function createPlayerAndSendToQueue(
  skill?: number
): Promise<Player> {
  const player: Player = {
    id: randomUUID(),
    skill: skill || Math.floor(Math.random() * 100),
  };

  await sendToMatchmakingQueue(player);
  return player;
}
