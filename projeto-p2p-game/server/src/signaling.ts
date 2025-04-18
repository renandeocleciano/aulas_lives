import WebSocket, { WebSocketServer } from "ws";
import { logger } from "./logger";

type ClientMap = Map<string, WebSocket>;
const clients: ClientMap = new Map();

export function setupWebSocket(server: any) {
  const wss = new WebSocketServer({ server });

  wss.on("connection", (ws) => {
    const clientId = generateId();
    clients.set(clientId, ws);
    logger.info(`Client connected: ${clientId}`);

    ws.send(JSON.stringify({ type: "welcome", id: clientId }));

    ws.on("message", (data) => {
      try {
        const msg = JSON.parse(data.toString());
        const target = clients.get(msg.to);
        if (target) {
          target.send(JSON.stringify({ ...msg, from: clientId }));
        }
      } catch (err) {
        logger.error("Error parsing message:", err);
      }
    });

    ws.on("close", () => {
      clients.delete(clientId);
      logger.info(`Client disconnected: ${clientId}`);
    });
  });
}

function generateId() {
  return Math.random().toString(36).substring(2, 10);
}
