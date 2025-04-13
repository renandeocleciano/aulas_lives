import { QUEUE_NAME } from "../config/env";
import { getRabbitMQChannel } from "../config/rabbitmq";
import { Player } from "../types/player";

export async function sendToMatchmakingQueue(player: Player) {
  const channel = await getRabbitMQChannel();
  await channel.assertQueue(QUEUE_NAME, { durable: false });
  channel.sendToQueue(QUEUE_NAME, Buffer.from(JSON.stringify(player)));
  console.log("[PRODUCER] Jogador enviado à fila:", player);
}
