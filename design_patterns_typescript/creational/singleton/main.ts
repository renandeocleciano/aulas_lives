import { Logger } from "./logger";

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("Usuário entrou no sistema.");
logger2.log("Erro ao buscar dados.");

console.log("Mesma instância:", logger1 === logger2);
