import dotenv from "dotenv";
import * as http from "http";
import { logger } from "./logger";
import { setupWebSocket } from "./signaling";

dotenv.config();

const PORT = process.env.PORT || 3000;
const server = http.createServer();

setupWebSocket(server);

server.listen(PORT, () => {
  logger.info(`WebSocket Signaling Server is running on port ${PORT}`);
});
