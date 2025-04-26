import { Database } from "../interfaces/database.interface";
import { RealDatabase } from "./real-database";

export class DatabaseProxy implements Database {
  private realDatabase: RealDatabase;
  private authenticated: boolean = false;

  constructor() {
    this.realDatabase = new RealDatabase();
  }

  public authenticate(password: string): void {
    if (password === "admin123") {
      this.authenticated = true;
      console.log("Autenticação bem-sucedida!");
    } else {
      console.log("Senha incorreta. Acesso negado.");
    }
  }

  public query(statement: string): void {
    if (!this.authenticated) {
      console.log("Acesso negado. Autentique-se primeiro.");
      return;
    }
    this.realDatabase.query(statement);
  }
}
