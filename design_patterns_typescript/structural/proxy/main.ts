import { DatabaseProxy } from "./models/database-proxy";

const dbProxy = new DatabaseProxy();

console.log("\nTentando consultar sem autenticar...");
dbProxy.query("SELECT * FROM users");

console.log("\nTentando autenticar com senha errada...");
dbProxy.authenticate("123456");
dbProxy.query("SELECT * FROM users");

console.log("\nAutenticando corretamente...");
dbProxy.authenticate("admin123");
dbProxy.query("SELECT * FROM users");
