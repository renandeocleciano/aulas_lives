import { QUEUE_NAME } from "../config/env";
import { getRabbitMQChannel } from "../config/rabbitmq";
import { Player } from "../types/player";

const waitingPlayers: Player[] = [];

(async () => {
  const channel = await getRabbitMQChannel();
  await channel.assertQueue(QUEUE_NAME, { durable: false });

  console.log("[CONSUMER] Aguardando jogadores...");

  channel.consume(QUEUE_NAME, (msg) => {
    if (msg) {
      const player: Player = JSON.parse(msg.content.toString());
      console.log("[CONSUMER] Jogador recebido:", player);

      waitingPlayers.push(player);

      if (waitingPlayers.length >= 2) {
        const match = waitingPlayers.splice(0, 2);
        console.log("\n🎮 Partida formada!");
        match.forEach((p, i) => console.log(`  Player ${i + 1}:`, p));
        console.log();
      }

      channel.ack(msg);
    }
  });
})();
