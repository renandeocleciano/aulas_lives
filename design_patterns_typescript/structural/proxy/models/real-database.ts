import { Database } from "../interfaces/database.interface";

export class RealDatabase implements Database {
  public query(statement: string): void {
    console.log(`Executando consulta no banco de dados: "${statement}"`);
  }
}
